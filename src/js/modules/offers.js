/* eslint-disable max-len */
import {httpRequest} from './data.js';

export const itemsToOffer = () => {
  const offerList = document.querySelector('.card-footer__list');
  const validNumber = (num) => num.toString().replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ');

  httpRequest('https://hidden-castle-31466.herokuapp.com/api/goods', {
    method: 'GET',
    callback(err, data) {
      if (err) {
        console.log(err);
      } else {
        offerList.innerHTML = '';
        const dataWithDiscount = [];
        data.map(item => {
          if (item.discount > 0) {
            dataWithDiscount.push(item);
          }
        });
        dataWithDiscount.length = Math.min(dataWithDiscount.length, 8);
        dataWithDiscount.map(product => {
          offerList.insertAdjacentHTML('beforeend', `
            <li class="card-footer__item" tabindex="0">
              <a class="card-footer__item-link"  href="card.html?id=${product.id}">
                <div class="card-footer__item-pic-wrapper">
                  <img class="card-footer__item-pic" src="./img/${product.image}" alt="${product.title}">
                  <p class="card-footer__item-discount">-${product.discount}%</p>
                </div>
                <div class="card-footer__item-price-wrapper">
                  <p class="card-footer__item-price-discount">${validNumber(product.price - (product.price * (product.discount / 100)))} ₽</p>
                  <p class="card-footer__item-nodiscount">${validNumber(product.price)} ₽</p>
                </div>
                <p class="card-footer__item-name">${product.title}</p>
              </a>
            </li>
          `);
        });
      }
    },
  });
};
