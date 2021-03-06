import {createPosts} from './modules/blogs.js';
import {loadPosts} from './modules/data.js';
import {pagination} from './modules/pagination.js';


const init = () => {
  loadPosts();
  pagination();
  createPosts();
};

init();
