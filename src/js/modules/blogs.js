import {loadPosts} from './data.js';

const blogWrapper = document.querySelector('.blog-wrapper');

export const createPosts = async () => {
  const pageParams = new URLSearchParams(location.search);
  const postPage = pageParams.get('page');
  const data = await loadPosts(postPage);

  const blogList = document.createElement('ul');
  blogList.classList.add('blog__list');
  blogWrapper.append(blogList);

  data.data.forEach((element, index) => {
    const blogItem = document.createElement('li');
    blogItem.classList.add('blog__item');

    const imgWrapper = document.createElement('div');
    imgWrapper.classList.add('blog__item-img-wrapper');

    const blogImg = document.createElement('a');
    blogImg.classList.add('blog__item-img');
    blogImg.href = `article.html?id=${data.data[index].id}`;
    blogImg.style.backgroundImage = 'url("./img/blog/boots.png")';

    const textWrapper = document.createElement('div');
    textWrapper.classList.add('blog__text-wrapper');

    const itemTitle = document.createElement('a');
    itemTitle.classList.add('blog__item-title');
    itemTitle.textContent = element.title;
    itemTitle.href = `article.html?id=${data.data[index].id}`;

    const blogDate = document.createElement('a');
    blogDate.classList.add('blog__item-subtitle');
    blogDate.href = `article.html?id=${data.data[index].id}`;
    blogDate.textContent = '22 октября 2021, 12:45';

    const blogMedia = document.createElement('a');
    blogMedia.classList.add('blog__item-media');
    blogMedia.href = `article.html?id=${data.data[index].id}`;

    const viewsCount = document.createElement('span');
    viewsCount.classList.add('blog__item-views');
    viewsCount.textContent = '1.2K';

    const commentsCount = document.createElement('span');
    commentsCount.classList.add('blog__item-comments');
    commentsCount.textContent = '0';

    imgWrapper.append(blogImg);
    blogItem.append(imgWrapper, textWrapper);
    textWrapper.append(itemTitle, blogDate, blogMedia);
    blogMedia.append(viewsCount, commentsCount);
    blogList.append(blogItem);
  });
};
