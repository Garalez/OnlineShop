import {loadPosts} from './data.js';

const blogWrapper = document.querySelector('.blog-wrapper');

export const pagination = async () => {
  const pageParams = new URLSearchParams(location.search);
  const postPage = pageParams.get('page');
  const data = await loadPosts(postPage);

  const paginationWrapper = document.createElement('div');
  paginationWrapper.classList.add('pages');

  const previousPage = document.createElement('a');
  previousPage.classList.add('pages__btn-previous');

  const pageList = document.createElement('ul');
  pageList.classList.add('pages__list');

  const pageNumber = document.createElement('a');
  pageNumber.classList.add('pages__item');
  if (data.meta.pagination.page === 1) {
    pageNumber.textContent = '';
    previousPage.style.display = 'none';
  } else {
    pageNumber.textContent = data.meta.pagination.page - 1;
  }
  const pageNumberClone = pageNumber.cloneNode();
  pageNumberClone.textContent = data.meta.pagination.page;
  const thirdPage = pageNumberClone.cloneNode();

  const nextPage = document.createElement('a');
  nextPage.classList.add('pages__btn-next');

  if (data.meta.pagination.page === data.meta.pagination.pages) {
    thirdPage.textContent = '';
    nextPage.style.display = 'none';
  } else {
    thirdPage.textContent = data.meta.pagination.page + 1;
  }

  nextPage.addEventListener('click', () => {
    data.meta.pagination.page += 1;
    nextPage.href = `blog.html?page=${data.meta.pagination.page}`;
  });

  previousPage.addEventListener('click', () => {
    data.meta.pagination.page -= 1;
    if (data.meta.pagination.page === 1) {
      previousPage.href = `blog.html`;
    } else {
      previousPage.href = `blog.html?page=${data.meta.pagination.page}`;
    }
  });

  paginationWrapper.append(previousPage, pageList, nextPage);
  pageList.append(pageNumber, pageNumberClone, thirdPage);

  pageList.childNodes.forEach(elem => {
    elem.addEventListener('click', () => {
      if (elem.textContent === (1).toString()) {
        elem.href = `blog.html`;
      } else {
        elem.href = `blog.html?page=${elem.textContent}`;
      }
    });
  });

  blogWrapper.after(paginationWrapper);
};
