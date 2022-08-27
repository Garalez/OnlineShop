/* eslint-disable max-len */
import {showMenu} from './menu.js';
import {renderBasketProducts} from './basket.js';
import {preloader} from './preloader.js';
import {httpRequest} from './data.js';

const navBar = document.querySelector('.header__nav');
const navMenuBtn = document.querySelector('.header__nav-btn');
const breadCrumb = document.querySelector('.header__breadcrumb-list');

export const modalEvents = () => {
  navBar.addEventListener('click', e => {
    const target = e.target;

    if (target.closest('.header__nav-btn')) {
      const {menuOverlay, menuWrapper} = showMenu();

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
      menuWrapper.style.top = `${-distance / 1.6}px`;
      startAnimation(duration, (progress) => {
        const top = easeInOut(progress) * distance;
        menuWrapper.style.transform = `translateY(${top}px)`;
      });

      menuOverlay.addEventListener('click', event => {
        if (!event.target.closest('.menu__wrapper')) {
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
    if (target.closest('.header__nav-basket')) {
      preloader();
      httpRequest('https://hidden-castle-31466.herokuapp.com/api/goods', {
        method: 'GET',
        callback: renderBasketProducts,
      });
    }
  });
};

