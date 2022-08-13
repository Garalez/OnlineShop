const article = document.querySelector('.shoe-care');
const backToBlogs = document.querySelector('.footer__item-ref');

export const fullBlog = async () => {
  article.innerHTML = '';

  const pageParams = new URLSearchParams(location.search);
  const postId = pageParams.get('id');
  const result = await fetch(`https://gorest.co.in/public-api/posts?id=${postId}`);
  const data = await result.json();

  const getUsers = await fetch(`https://gorest.co.in/public-api/users/${data.data[0].user_id}`);
  const user = await getUsers.json();

  const blogTitle = document.createElement('h1');
  blogTitle.style.marginBottom = '50px';
  blogTitle.textContent = data.data[0].title;

  const blog = document.createElement('p');
  blog.textContent = data.data[0].body;

  const author = document.querySelector('.footer__item-author');
  author.style.marginBottom = '25px';
  author.textContent = user.data.name;

  const uploadDate = document.createElement('p');
  uploadDate.classList.add('blog__item-subtitle');
  uploadDate.style.marginBottom = '25px';
  uploadDate.textContent = '22 октября 2021, 12:45';

  const blogMedia = document.createElement('p');
  blogMedia.classList.add('blog__item-media');

  const viewsCount = document.createElement('span');
  viewsCount.classList.add('blog__item-views');
  viewsCount.textContent = '1.2K';

  const commentsCount = document.createElement('span');
  commentsCount.classList.add('blog__item-comments');
  commentsCount.textContent = '0';

  backToBlogs.href = 'blog.html';

  blogMedia.append(viewsCount, commentsCount);
  author.after(uploadDate, blogMedia);
  article.append(blogTitle, blog);
};

