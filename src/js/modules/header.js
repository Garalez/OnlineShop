/* eslint-disable max-len */
import {showMenu} from './menu.js';
import {renderBasketProducts} from './basket.js';
import {preloader} from './preloader.js';
import {httpRequest} from './data.js';
import {getStorage} from './localStorage.js';

const navBar = document.querySelector('.header__nav');

export const modalEvents = () => {
  navBar.addEventListener('click', e => {
    const target = e.target;

    if (target.closest('.header__nav-btn')) {
      httpRequest('https://hidden-castle-31466.herokuapp.com/api/category', {
        method: 'GET',
        callback: showMenu,
      });
    }
    if (target.closest('.header__nav-basket')) {
      const breadCrumb = document.querySelector('.header__breadcrumb-list');
      if (breadCrumb) {
        breadCrumb.innerHTML = '';
        breadCrumb.insertAdjacentHTML('afterbegin', `
          <li class="header__breadcrumb-item">
            <a class="header__breadcrumb-ref" href="">Главная</a>
          </li>
          <li class="header__breadcrumb-item">
            <a class="header__breadcrumb-ref" href="">Корзина</a>
          </li>
        `);
      } else {
        navBar.insertAdjacentHTML('beforeend', `
          <ul class="header__breadcrumb-list">
            <li class="header__breadcrumb-item">
              <a class="header__breadcrumb-ref" href="">Главная</a>
            </li>
            <li class="header__breadcrumb-item">
              <a class="header__breadcrumb-ref" href="">Корзина</a>
            </li>
          </ul>
        `);
      }
      preloader();
      const storagedItems = getStorage('basket');
      renderBasketProducts(storagedItems);
    }
  });
};

