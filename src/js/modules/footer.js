/* eslint-disable max-len */
import {httpRequest} from './data.js';
import {preloader} from './preloader.js';

const catalogList = document.querySelector('.footer__catalog-list');
const clientsItems = document.querySelectorAll('.footer__clients-item');
const wrapper = document.querySelector('.footer__wrapper');
const catalogBtn = document.querySelector('.footer__catalog-btn');
const clientBtn = document.querySelector('.footer__clients-btn');

export const loadCategoryGoods = (e, err, data) => {
  console.log(e.target);
  console.log(data);
  if (err) {
    console.log(err);
  } else {
    const categorySection = document.createElement('section');
    categorySection.classList.add('card-footer__section');
    const categoryTitle = document.createElement('h1');
    categoryTitle.classList.add('card-footer__title');
    categoryTitle.textContent = e.target.textContent;

    const main = document.querySelector('main');
    const wrapper = main.children[0];
    wrapper.innerHTML = '';
    wrapper.style.minHeight = '100vh';
    wrapper.style.height = '100%';

    const categoryList = document.createElement('ul');
    categoryList.classList.add('card-footer__list');

    data.map(item => {
      if (e.target.textContent === item.category) {
        categoryList.insertAdjacentHTML('afterbegin', `
          <li class="card-footer__item" tabindex="0">
            <img class="card-footer__item-pic" src="./img/${item.image}" alt="${item.title}">
            <p class="card-footer__item-discount">-${item.discount}%</p>
            <div class="card-footer__item-price-wrapper">
            <p class="card-footer__item-price-discount"></p>
              <p class="card-footer__item-nodiscount"></p>
            </div>
            <p class="card-footer__item-name">${item.title}</p>
          </li>
        `);
        categorySection.append(categoryTitle, categoryList);
        wrapper.append(categorySection);
        const productPrice = document.querySelector('.card-footer__item-price-discount');
        const priceNoDiscount = document.querySelector('.card-footer__item-nodiscount');
        const discount = document.querySelector('.card-footer__item-discount');

        if (item.discount > 0) {
          productPrice.textContent = `${item.price - (item.price * (item.discount / 100))} ₽`;
          priceNoDiscount.textContent = `${item.price} ₽`;
        } else {
          productPrice.textContent = `${item.price} ₽`;
          priceNoDiscount.remove();
          discount.remove();
        }
      }
    });

    const checkBreadCrumb = document.querySelector('.header__breadcrumb-list');
    const navBar = document.querySelector('.header__nav');

    if (checkBreadCrumb) {
      checkBreadCrumb.innerHTML = '';
    } else {
      const createBreadCrumb = document.createElement('ul');
      createBreadCrumb.classList.add('header__breadcrumb-list');
      navBar.append(createBreadCrumb);
    }

    const breadCrumb = document.querySelector('.header__breadcrumb-list');
    breadCrumb.insertAdjacentHTML('afterbegin', `
      <li class="header__breadcrumb-item">
        <a class="header__breadcrumb-ref" href="index.html">Главная</a>
      </li>
      <li class="header__breadcrumb-item">
        <a class="header__breadcrumb-ref" href="">Каталог</a>
      </li>
      <li class="header__breadcrumb-item">
        <a class="header__breadcrumb-ref" href="">${e.target.textContent}</a>
      </li>
    `);

    const loader = document.querySelector('.lds-ring-wrapper');
    if (loader) {
      setTimeout(() => {
        loader.remove();
      }, 500);
    }
  }
};


export const acc = () => {
  httpRequest('https://hidden-castle-31466.herokuapp.com/api/category', {
    method: 'GET',
    callback(err, data) {
      if (err) {
        console.log(err);
      } else {
        catalogList.innerHTML = '';

        data.map(item => {
          const listItem = document.createElement('li');
          listItem.classList.add('footer__catalog-item');
          const link = document.createElement('a');
          link.classList.add('footer__catalog-link');
          link.textContent = item;
          link.href = item;

          listItem.append(link);
          catalogList.append(listItem);

          link.addEventListener('click', e => {
            e.preventDefault();
            scrollTo(0, 0);
            preloader();

            httpRequest(`https://hidden-castle-31466.herokuapp.com/api/goods`, {
              method: 'GET',
              callback(err, data) {
                loadCategoryGoods(e, err, data);
              },
            });
          });
        });

        const catalogItems = document.querySelectorAll('.footer__catalog-item');

        wrapper.addEventListener('click', event => {
          const target = event.target;

          if (target.closest('.footer__catalog-btn') ||
          target.closest('.footer__catalog-title')) {
            catalogBtn.style.transform = 'rotate(180deg)';
            catalogBtn.style.top = '1px';
            catalogItems.forEach(elem => {
              elem.classList.toggle('active');
              if (elem.classList.contains('active')) {
                elem.style.height = elem.scrollHeight + 'px';
                catalogList.style.gap = '4px';
                catalogList.style.marginBottom = '3px';
              } else {
                elem.style.height = '';
                catalogBtn.style.transform = 'rotate(360deg)';
                catalogBtn.style.top = '10px';
                catalogList.style.gap = '0';
              }
            });
          }
          if (target.closest('.footer__clients-btn') ||
              target.closest('.footer__clients')) {
            clientBtn.style.transform = 'rotate(180deg)';
            clientsItems.forEach(elem => {
              elem.classList.toggle('active');
              if (elem.classList.contains('active')) {
                elem.style.height = elem.scrollHeight + 'px';
                clientBtn.style.transform = 'rotate(180deg) translate(0px, 11px)';
              } else {
                elem.style.height = '';
                clientBtn.style.transform = 'translate(0px, -2px)';
              }
            });
          }
        });
      }
    },
  });
};

