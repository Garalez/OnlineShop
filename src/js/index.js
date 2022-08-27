import {createPosts} from './modules/blogs.js';
import {loadPosts} from './modules/data.js';
import {pagination} from './modules/pagination.js';
import {fullBlog} from './modules/blogArticle.js';
import {modalEvents} from './modules/header.js';
import {acc} from './modules/footer.js';
const basketItemCounter = document.querySelector(
    '.header__nav-basket-quantity');


const init = () => {
  acc();
  modalEvents();
  if (window.location.toString().includes('blog')) {
    loadPosts();
    pagination();
    createPosts();
  }
  if (window.location.toString().includes('article')) {
    fullBlog();
  }
  fetch('https://hidden-castle-31466.herokuapp.com/api/goods')
      .then((response) => response.json())
      .then((data) => {
        let productCounter = 0;
        data.forEach(() => {
          productCounter += 1;
        });
        basketItemCounter.textContent = productCounter;
      });
};

init();
