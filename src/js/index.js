import {createPosts} from './modules/blogs.js';
import {loadPosts} from './modules/data.js';
import {pagination} from './modules/pagination.js';
import {fullBlog} from './modules/blogArticle.js';
import {modalEvents} from './modules/header.js';
import {acc} from './modules/footer.js';
import {renderProductInfo} from './modules/productDesc.js';
import {itemsToOffer} from './modules/offers.js';
import {renewBasketQuantity} from './modules/localStorage.js';


const init = () => {
  acc();
  modalEvents();
  renewBasketQuantity();
  if (window.location.toString().includes('blog')) {
    loadPosts();
    pagination();
    createPosts();
  }
  if (window.location.toString().includes('article')) {
    fullBlog();
  }
  if (window.location.toString().includes('card')) {
    renderProductInfo();
  }
  if (window.location.toString().includes('index')) {
    itemsToOffer();
  }
};

init();

