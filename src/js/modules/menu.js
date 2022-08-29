/* eslint-disable max-len */
import {httpRequest} from './data.js';
import {preloader} from './preloader.js';
import {loadCategoryGoods} from './footer.js';

const navBar = document.querySelector('.header__nav');
const breadCrumb = document.querySelector('.header__breadcrumb-list');
const navMenuBtn = document.querySelector('.header__nav-btn');

export const showMenu = (err, data) => {
  if (err) {
    console.log(err);
    return;
  } else {
    navBar.insertAdjacentHTML('beforeend', `
      <nav class="menu">
        <div class="menu__wrapper">
          <section class="menu__catalog">
            <h2 class="menu__catalog-title">Каталог</h2>
            <ul class="menu__catalog-list"></ul>
          </section>

          <section class="menu__clients">
            <h2 class="menu__clients-title">Покупателям</h2>

            <ul class="menu__clients-list">
              <li class="menu__clients-item">
                <a class="menu__clients-link" href="">Оплата заказа</a>
              </li>
              <li class="menu__clients-item">
                <a class="menu__clients-link" href="">Условия доставки</a>
              </li>
              <li class="menu__clients-item">
                <a class="menu__clients-link" href="">Условия возврата заказа</a>
              </li>
              <li class="menu__clients-item">
                <a class="menu__clients-link" href="">Блог</a>
              </li>
            </ul>
          </section>

          <section class="menu__contacts">
            <h2 class="menu__contacts-title">Связаться с нами</h2>
            <a class="menu__contacts-link" href="">Контакты</a>
          </section>
        </div>
      </nav>
    `);

    const catalogList = document.querySelector('.menu__catalog-list');
    const menuOverlay = document.querySelector('.menu');
    const menuWrapper = document.querySelector('.menu__wrapper');

    data.map(item => {
      const catalogItem = document.createElement('li');
      catalogItem.classList.add('menu__catalog-item');

      const catalogLink = document.createElement('a');
      catalogLink.classList.add('menu__catalog-link');
      catalogLink.href = '';
      catalogLink.textContent = item;
      catalogItem.append(catalogLink);
      catalogList.append(catalogItem);
    });

    const duration = 700;
    const distance = menuWrapper.clientHeight;

    const startAnimation = (duration, callback) => {
      let startAnimation = NaN;

      requestAnimationFrame(function step(timestamp) {
        startAnimation ||= timestamp;

        const progress = (timestamp - startAnimation) / duration;

        callback(progress);
        if (progress < 1) {
          requestAnimationFrame(step);
        }
      });
    };

    const easeInOut = time => 0.5 * (1 - Math.cos(Math.PI * time));
    if (breadCrumb) {
      breadCrumb.style.visibility = 'hidden';
    }
    navMenuBtn.classList.add('menu-active');
    menuOverlay.classList.add('is-visible');
    menuWrapper.style.top = `${-distance / 1.3}px`;
    startAnimation(duration, (progress) => {
      const top = easeInOut(progress) * distance;
      menuWrapper.style.transform = `translateY(${top}px)`;
    });

    menuOverlay.addEventListener('click', event => {
      if (!event.target.closest('.menu__wrapper') ||
          event.target.closest('.menu__catalog-link')) {
        if (event.target.closest('.menu__catalog-link')) {
          event.preventDefault();
          scrollTo(0, 0);
          preloader();

          httpRequest(`https://hidden-castle-31466.herokuapp.com/api/goods`, {
            method: 'GET',
            callback(err, data) {
              loadCategoryGoods(event, err, data);
            },
          });
        }
        if (breadCrumb) {
          breadCrumb.style.visibility = 'visible';
        }
        navMenuBtn.classList.remove('menu-active');
        menuWrapper.style.top = `${distance / 2.5}px`;
        startAnimation(duration, (progress) => {
          const top = easeInOut(progress) * distance;
          menuWrapper.style.transform = `translateY(${-top}px)`;
        });
        menuOverlay.classList.remove('is-visible');
        setTimeout(() => {
          menuOverlay.remove();
        }, 500);
      }
    });
  }
};

