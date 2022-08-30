/* eslint-disable max-len */
import {httpRequest} from './data.js';
import {loadCategoryGoods} from './footer.js';
import {preloader} from './preloader.js';
import {renewBasketQuantity, setStorage, getStorage} from './localStorage.js';

export const renderProductInfo = async () => {
  const pageParams = new URLSearchParams(location.search);
  const postId = pageParams.get('id');
  preloader();

  const result = await fetch(`https://hidden-castle-31466.herokuapp.com/api/goods/${postId}`);
  const data = await result.json();
  console.log(data);
  const main = document.querySelector('main');
  const wrapper = main.children[0];
  wrapper.innerHTML = '';
  const breadCrumb = document.querySelector('.header__breadcrumb-list');
  breadCrumb.innerHTML = '';

  wrapper.insertAdjacentHTML('afterbegin', `
    <section class="product">
      <h1 class="product__title">${data.title}</h1>
      <ul class="product__list">
        <li class="product__item-card">
          <p class="product__item-discount">-15%</p>
          <img class="product__item-pic" src="./img/${data.image}" alt="Картинка продукта">
        </li>
        <li class="product__item-card">
          <ul class="product__card-list">
            <li class="product__card-price">
              <span class="product__card-price-discount">${data.price - (data.price / 100 * data.discount)} ₽</span>
              <span class="product__card-price-nodiscount">${data.price} ₽</span>
            </li>
            <li class="product__card-credit">В кредит от 5600 ₽ </li>
            <li class="product__card-btns">
              <button class="product__card-btns-bucket">Добавить в корзину</button>
              <input class="product__card-btns-checkbox" type="checkbox" name="favorite" id="favorite">
              <label class="product__card-btns-favorite" for="favorite"></label>
            </li>
            <li class="product__card-info">
              <div class="product__card-info-shipping-wrapper">
                <p class="product__card-info-shipping">Доставка</p>
                <p class="product__card-info-date">1-3 января</p>
              </div>
              <div class="product__card-info-seller-wrapper">
                <p class="product__card-info-seller">Продавец</p>
                <p class="product__card-info-name">ShopOnline</p>
              </div>
            </li>
            <li class="product__card-discount">
              <button class="product__card-discount-btn"></button>
              <p class="product__card-discount-txt">Узнать о снижении цены</p>
            </li>
          </ul>
        </li>
        <li class="product__item-desc">
          <p class="product__item-desc-title">Описание:</p>
          <p class="product__item-desc-subtitle">${data.description}</p>
        </li>
      </ul>
    </section>

    <section class="offer">
      <h2 class="offer__title">Рекомендуем также</h2>
      <ul class="offer__list">
        <li class="offer__item">
          <figure>
            <img class="offer__item-pic" src="./img/card/offer-laptop1.png" alt="laptop dell">
            <figcaption>
              <p class="offer__item-price">96 320 ₽</p>
              <p class="offer__item-name">Ноутбук Dell</p>
            </figcaption>
          </figure>
        </li>
        <li class="offer__item">
          <figure>
            <img class="offer__item-pic" src="./img/card/offer-laptop2.png" alt="laptop hp 250">
            <figcaption>
              <p class="offer__item-price">64 949 ₽</p>
              <p class="offer__item-name">Ноутбук HP 250</p>
            </figcaption>
          </figure>
        </li>
        <li class="offer__item">
          <figure>
            <img class="offer__item-pic" src="./img/card/offer-laptop3.png" alt="laptop hp 15">
            <figcaption>
              <p class="offer__item-price">37 980 ₽</p>
              <p class="offer__item-name">Ноутбук HP 15</p>
            </figcaption>
          </figure>
        </li>
        <li class="offer__item offer__item-discount">
          <figure>
            <img class="offer__item-pic" src="./img/card/offer-laptop4.png" alt="laptop ASUS ZenBook Pro">
            <figcaption>
              <p class="offer__item-price">
                <span class="offer__item-price-discount">102 680 ₽</span>
                <span class="offer__item-price-nodiscount">105 999 ₽</span>
              </p>
              <p class="offer__item-name">Ноутбук ASUS ZenBook Pro</p>
            </figcaption>
          </figure>
        </li>
      </ul>

      <ul class="offer-profit__list">
        <li class="offer-profit__item" tabindex="0">
          <div class="offer-profit__item-shirts offer-profit__item-discount-50"></div>
          <p class="offer-profit__item-price">1299 ₽ <s class="line-through">2598 ₽</s></p>
          <p class="offer-profit__item-name">Пара футболок</p>
        </li>
        <li class="offer-profit__item" tabindex="0">
          <div class="offer-profit__item-sneakers offer-profit__item-discount-40"></div>
          <p class="offer-profit__item-price">2099₽ <s class="line-through">5938 ₽</s></p>
          <p class="offer-profit__item-name">Кроссовки</p>
        </li>
        <li class="offer-profit__item" tabindex="0">
          <div class="offer-profit__item-bedroom offer-profit__item-discount-10"></div>
          <p class="offer-profit__item-price">3902 ₽ <s class="line-through">4490 ₽</s></p>
          <p class="offer-profit__item-name">Постельное белье</p>
        </li>
        <li class="offer-profit__item" tabindex="0">
          <div class="offer-profit__item-dryers offer-profit__item-discount-30"></div>
          <p class="offer-profit__item-price">2999 ₽ <s class="line-through">6030 ₽</s></p>
          <p class="offer-profit__item-name">Фен</p>
        </li>
        <li class="offer-profit__item" tabindex="0">
          <div class="offer-profit__item-bedroom offer-profit__item-discount-10"></div>
          <p class="offer-profit__item-price">3902 ₽ <s class="line-through">4490 ₽</s></p>
          <p class="offer-profit__item-name">Постельное белье</p>
        </li>
        <li class="offer-profit__item" tabindex="0">
          <div class="offer-profit__item-dryers offer-profit__item-discount-30"></div>
          <p class="offer-profit__item-price">2999 ₽ <s class="line-through">6030 ₽</s></p>
          <p class="offer-profit__item-name">Фен</p>
        </li>
      </ul>
    </section>
  `);

  const discountPrice = document.querySelector('.product__card-price-nodiscount');
  const discountNumber = document.querySelector('.product__item-discount');
  const addToBasketBtn = document.querySelector('.product__card-btns-bucket');

  if (data.discount === 0) {
    discountPrice.remove();
    discountNumber.remove();
  } else {
    discountNumber.textContent = `-${data.discount}%`;
  }

  addToBasketBtn.addEventListener('click', () => {
    const getData = getStorage('basket');
    console.log(getData);
    if (getData.length > 0) {
      const storageItem = getData.findIndex(el => el.id === data.id);
      console.log(storageItem);
      if (storageItem >= 0) {
        alert('Товар уже есть в корзине');
      } else {
        data.count = 1;
        alert('Товар добавлен в корзину');
        setStorage('basket', data);
        renewBasketQuantity();
      }
    } else {
      data.count = 1;
      alert('Товар добавлен в корзину');
      setStorage('basket', data);
      renewBasketQuantity();
    }
  });

  const loader = document.querySelector('.lds-ring-wrapper');
  if (loader) {
    setTimeout(() => {
      loader.remove();
      breadCrumb.insertAdjacentHTML('afterbegin', `
        <li class="header__breadcrumb-item">
          <a class="header__breadcrumb-ref" href="index.html">Главная</a>
        </li>
        <li class="header__breadcrumb-item">
          <a class="header__breadcrumb-ref" href="">Каталог</a>
        </li>
        <li class="header__breadcrumb-item">
          <a class="header__breadcrumb-ref header__breadcrumb-ref-category" href="">${data.category}</a>
        </li>
        <li class="header__breadcrumb-item">
          <a class="header__breadcrumb-ref" href="">${data.title}</a>
        </li>
      `);
      const categoryCrumb = document.querySelector('.header__breadcrumb-ref-category');
      categoryCrumb.addEventListener('click', e => {
        e.preventDefault();
        httpRequest(`https://hidden-castle-31466.herokuapp.com/api/goods`, {
          method: 'GET',
          callback(err, data) {
            loadCategoryGoods(e, err, data);
          },
        });
      });
    }, 500);
  }
};

