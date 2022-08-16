import gulp from 'gulp';
import browserSync from 'browser-sync';
import sassPkg from 'sass';
import gulpSass from 'gulp-sass';
import gulpCssimport from 'gulp-cssimport';
import {deleteAsync} from 'del';
import htmlmin from 'gulp-htmlmin';
import cleanCss from 'gulp-clean-css';
import terser from 'gulp-terser';
import gulpImg from 'gulp-image';
import gulpWebp from 'gulp-webp';
import gulpAvif from 'gulp-avif';
import {stream as critical} from 'critical';
import gulpIf from 'gulp-if';
// import concat from 'gulp-concat';
// import sourcemaps from 'gulp-sourcemaps';

const prepros = true;

const sass = gulpSass(sassPkg);

let dev = false;

// const allJS = [
//   'src/libs',
// ];
// задачи

export const html = () => gulp
    .src('src/*.html')
    .pipe(htmlmin({
      removeComments: true,
      collapseWhitespace: true,
    }))
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.stream());

export const style = () => {
  if (prepros) {
    return gulp
        .src('src/scss/**/*.scss')
        // .pipe(gulpIf(dev, sourcemaps.init()))
        .pipe(sass().on('error', sass.logError))
        .pipe(cleanCss({
          2: {
            specialComments: 0,
          },
        }))
        // .pipe(gulpIf(dev, sourcemaps.write('../maps')))
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.stream());
  }

  return gulp
      .src('src/css/index.css')
      // .pipe(sourcemaps.init())
      .pipe(gulpCssimport({
        extensions: ['css'],
      }))
      .pipe(cleanCss({
        2: {
          specialComments: 0,
        },
      }))
      // .pipe(sourcemaps.write('../maps'))
      .pipe(gulp.dest('dist/css'))
      .pipe(browserSync.stream());
};

export const js = () => gulp
    .src('src/scripts/**/*.js')
    // .pipe(gulpIf(dev, sourcemaps.init()))
    .pipe(terser())
    // .pipe(concat('index.min.js'))
    // .pipe(gulpIf(dev, sourcemaps.write('../maps')))
    .pipe(gulp.dest('dist/scripts'))
    .pipe(browserSync.stream());

export const img = () => gulp
    .src('src/img/**/*.{jpeg,jpg,png,svg,gif}')
    .pipe(gulpIf(!dev, gulpImg({
      optipng: ['-i 1', '-strip all', '-fix', '-o7', '-force'],
      pngquant: ['--speed=1', '--force', 256],
      zopflipng: ['-y', '--lossy_8bit', '--lossy_transparent'],
      jpegRecompress: ['--strip', '--quality', 'medium', '--min', 40, '--max', 80],
      mozjpeg: ['-optimize', '-progressive'],
      gifsicle: ['--optimize'],
      svgo: true,
    })))
    .pipe(gulp.dest('dist/img'))
    .pipe(browserSync.stream());

export const webp = () => gulp
    .src('src/img/**/*.{jpeg,jpg,png}')
    .pipe(gulpWebp({
      quality: 60,
    }))
    .pipe(gulp.dest('dist/img'))
    .pipe(browserSync.stream());

export const avif = () => gulp
    .src('src/img/**/*.{jpeg,jpg,png}')
    .pipe(gulpAvif({
      quality: 60,
    }))
    .pipe(gulp.dest('dist/img'))
    .pipe(browserSync.stream());

export const critCss = () => gulp
    .src('dist/*.html')
    .pipe(critical({
      base: 'dist/',
      inline: true,
      css: ['dist/css/index.css'],
    }))
    .on('error', err => {
      console.err(err.message);
    })
    .pipe(gulp.dest('dist'));

export const copy = () => gulp
    .src('src/fonts/**/*', {
      base: 'src',
    })
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.stream({
      once: true,
    }));

export const server = () => {
  browserSync.init({
    ui: false,
    notify: false,
    // tunnel: true,
    server: {
      baseDir: 'dist',
    },
  });

  gulp.watch('src/**/*.html', html);
  gulp.watch(prepros ? 'src/scss/**/*.scss' : 'src/css/**/*.css', style);
  gulp.watch('src/img/**/*.{jpeg,jpg,png,svg,gif}', img);
  gulp.watch('src/scripts/**/*.js', js);
  gulp.watch('src/fonts/**/*', copy);
  gulp.watch('src/img/**/*.{jpeg,jpg,png}', webp);
  gulp.watch('src/img/**/*.{jpeg,jpg,png}', avif);
};

export const clear = async () => await deleteAsync('dist/**/*', {force: true});

// запуск
export const develop = async () => {
  dev = true;
};

export const base = gulp.parallel(html, style, js, img, avif, webp, copy);

export const build = gulp.series(clear, base, critCss);

export default gulp.series(develop, base, server);