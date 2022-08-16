import {createPosts} from './modules/blogs.js';
import {loadPosts} from './modules/data.js';
import {pagination} from './modules/pagination.js';
// import {acc} from './modules/footer.js';
// import {fullBlog} from './modules/blogArticle.js';


const init = () => {
  loadPosts();
  pagination();
  createPosts();
  // fullBlog();
  // acc();
};

init();
