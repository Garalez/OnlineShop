/* eslint-disable max-len */
import {httpRequest} from './data.js';

const openBasket = () => {
  const main = document.querySelector('main');
  const wrapper = main.children[0];
  wrapper.innerHTML = '';

  wrapper.insertAdjacentHTML('afterbegin', `
    <form class="basket" action="#">
      <section class="basket-head">
        <h1 class="basket-head__title">Корзина</h1>
        <span class="basket-head__product-counter">2</span>
        <div class="basket-head__btn-wrapper">
          <input class="basket-head__checkall" type="checkbox" id="checkall">
          <label class="basket-head__checkall-label" for="checkall">Выбрать все</label>
          <button class="basket-head__clear"></button>
        </div>

        <ul class="basket-head__list"></ul>
      </section>

      <section class="basket-delivery">
        <h2 class="basket-delivery__title">Способ доставки</h2>
        <button class="basket-delivery__btn-change">Изменить</button>

        <ul class="basket-delivery__list">
          <li class="basket-delivery__item">
            <p class="basket-delivery__item-point">Пункт выдачи</p>
            <p class="basket-delivery__item-cost">Стоимость доставки</p>
            <p class="basket-delivery__item-date">10-13 февраля</p>
          </li>
          <li class="basket-delivery__item basket-delivery__item-misc">
            <p class="basket-delivery__item-address">г. Москва (Московская область), улица Павлика Морозова, д. 48, (Пункт выдачи), Ежедневно 10:00-21:00</p>
            <p class="basket-delivery__item-price">Бесплатно</p>
            <p class="basket-delivery__item-price-gray">Бесплатная доставка</p>
          </li>
        </ul>
      </section>

      <section class="basket-total">
        <div class="basket-total__wrapper">
          <h2 class="basket-total__title">
            <span class="basket-total__title-text">Итого:</span>
            <span class="basket-total__title-price">112 992 ₽</span>
          </h2>
          <ul class="basket-total__list">
            <li class="basket-total__item">
              <p class="basket-total__quantity">Товары, <span class="basket-total__quantity-number">2</span> шт.</p>
              <p class="basket-total__discount">Скидка</p>
              <p class="basket-total__delivery">Доставка</p>
            </li>
            <li class="basket-total__item">
              <p class="basket-total__price-nodiscount">145 080 ₽</p>
              <p class="basket-total__discount-total">32 088 ₽</p>
              <p class="basket-total__delivery-cost">Бесплатно</p>
            </li>
          </ul>
          <ul class="basket-total__misc-list">
            <li class="basket-total__misc-item">
              <p class="basket-total__misc-delivery">Доставка: <span class="basket-total__misc-delivery-point">Пункт выдачи</span></p>
            </li>
            <li class="basket-total__misc-item">
              <p class="basket-total__misc-hours">Ежедневно 10:00 - 21:00</p>
            </li>
            <li class="basket-total__misc-item">
              <p class="basket-total__misc-address">г. Москва (Московская область), улица Павлика Морозова, д. 48</p>
            </li>
            <li class="basket-total__misc-item">
              <p class="basket-total__misc-date">Дата: <span class="basket-total__misc-date-blue">10-13 февраля</span></p>
            </li>
            <li class="basket-total__misc-item">
              <p class="basket-total__misc-payment">Оплата: <span class="basket-total__misc-payment-method">Картой</span></p>
            </li>
            <li class="basket-total__misc-item basket-total__misc-item-confirm">
              <button class="basket-total__misc-btn-submit" type="submit">Заказать</button>
            </li>
            <li class="basket-total__misc-item basket-total__misc-item-copy">
              <input class="basket-total__misc-copy-check basket-head__checkall" type="checkbox" id="copy">
              <label class="basket-total__misc-copy-label basket-head__checkall-label" for="copy">
                <p class="basket-total__misc-tos">Согласен с условиями <span class="basket-total__misc-tos-agreement">правил пользования торговой площадкой и правилами возврата</span></p>
              </label>
            </li>
          </ul>
        </div>
      </section>
    </form>

    <section class="card-footer">
      <h2 class="card-footer__title">Это выгодно!</h2>
      <ul class="card-footer__list">
        <li class="card-footer__item" tabindex="0">
          <div class="card-footer__item-shirts card-footer__item-discount-50"></div>
          <p class="card-footer__item-price">1299 ₽ <s class="line-through">2598 ₽</s></p>
          <p class="card-footer__item-name">Пара футболок</p>
        </li>
        <li class="card-footer__item" tabindex="0">
          <div class="card-footer__item-sneakers card-footer__item-discount-40"></div>
          <p class="card-footer__item-price">2099₽ <s class="line-through">5938 ₽</s></p>
          <p class="card-footer__item-name">Кроссовки</p>
        </li>
        <li class="card-footer__item" tabindex="0">
          <div class="card-footer__item-bedroom card-footer__item-discount-10"></div>
          <p class="card-footer__item-price">3902 ₽ <s class="line-through">4490 ₽</s></p>
          <p class="card-footer__item-name">Постельное белье</p>
        </li>
        <li class="card-footer__item" tabindex="0">
          <div class="card-footer__item-dryers card-footer__item-discount-30"></div>
          <p class="card-footer__item-price">2999 ₽ <s class="line-through">6030 ₽</s></p>
          <p class="card-footer__item-name">Фен</p>
        </li>
        <li class="card-footer__item" tabindex="0">
          <div class="card-footer__item-bedroom card-footer__item-discount-10"></div>
          <p class="card-footer__item-price">3902 ₽ <s class="line-through">4490 ₽</s></p>
          <p class="card-footer__item-name">Постельное белье</p>
        </li>
        <li class="card-footer__item" tabindex="0">
          <div class="card-footer__item-dryers card-footer__item-discount-30"></div>
          <p class="card-footer__item-price">2999 ₽ <s class="line-through">6030 ₽</s></p>
          <p class="card-footer__item-name">Фен</p>
        </li>
        <li class="card-footer__item card-footer__item-hideable" tabindex="0">
          <div class="card-footer__item-mittens card-footer__item-discount-30"></div>
          <p class="card-footer__item-price">540 ₽ <s class="line-through">890 ₽</s></p>
          <p class="card-footer__item-name">Варежки-мишки</p>
        </li>
        <li class="card-footer__item card-footer__item-hideable" tabindex="0">
          <div class="card-footer__item-shirts card-footer__item-discount-50"></div>
          <p class="card-footer__item-price">1299 ₽ <s class="line-through">2598 ₽</s></p>
          <p class="card-footer__item-name">Пара футболок</p>
        </li>
      </ul>
    </section>
  `);

  const productHeadCounter = document.querySelector('.basket-head__product-counter');
  const productTotalCounter = document.querySelector('.basket-total__quantity-number');
  const productList = document.querySelector('.basket-head__list');
  const totalPrice = document.querySelector('.basket-total__title-price');
  const deliveryMisc = document.querySelector('.basket-delivery__item-misc');
  const totalPriceNoDiscount = document.querySelector('.basket-total__price-nodiscount');
  const totalDiscount = document.querySelector('.basket-total__discount-total');
  const deleteProduct = document.querySelector('.basket-head__clear');
  const allCheckboxes = document.querySelector('.basket-head__checkall');


  return {
    productHeadCounter,
    productTotalCounter,
    productList,
    totalPrice,
    deliveryMisc,
    totalPriceNoDiscount,
    totalDiscount,
    deleteProduct,
    allCheckboxes,
  };
};


export const renderBasketProducts = (err, data) => {
  if (err) {
    console.warn(err);
    return;
  }
  const validNumber = (num) => num.toString().replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ');
  const {
    productHeadCounter,
    productTotalCounter,
    productList,
    totalPrice,
    deliveryMisc,
    totalPriceNoDiscount,
    totalDiscount,
    deleteProduct,
    allCheckboxes,
  } = openBasket();
  const sum = data.reduce((a, b) => a + (Number(b.price) * b.count), 0);
  let discountSum = 0;
  let basketProductCounter = 0;
  let basketProductQuantity = 0;

  totalPriceNoDiscount.textContent = `${validNumber(sum)} ₽`;

  data.map(item => {
    productList.insertAdjacentHTML('afterbegin', `
      <li class="basket-head__item">
        <ul class="basket-head__desc">
          <li class="basket-head__desc-item basket-head__desc-item-checkbox">
            <p class="basket-head__product-id">${item.id}</p>
            <input class="basket-head__product-check basket-head__checkall" type="checkbox" id="${item.id}">
            <label class="basket-head__product-check-label basket-head__checkall-label" for="${item.id}"></label>
            <button class="basket-head__product-remove basket-head__clear"></button>
          </li>
          <li class="basket-head__desc-item">
            <img class="basket-head__desc-pic" src="./img/${item.image}" alt="Ваш товар">
          </li>
          <li class="basket-head__desc-item basket-head__desc-item-txt">
            <a class="basket-head__desc-title" href="card.html?id=${item.id}">${item.title}</a>
            <a class="basket-head__desc-color" href="card.html?id=${item.id}">${item.description}</a>
          </li>
          <li class="basket-head__desc-item basket-head__desc-item-counter">
            <button class="basket-head__quantity-btn basket-head__quantity-btn_subtract"></button>
            <p class="basket-head__quantity-count">${item.count}</p>
            <button class="basket-head__quantity-btn basket-head__quantity-btn_add"></button>
          </li>
          <li class="basket-head__desc-item">
            <p class="basket-head__total"></p>
            <p class="basket-head__nodiscount">${validNumber(item.price * item.count)} ₽</p>
            <a class="basket-head__credit" href="#">В кредит от 600 ₽ </a>
          </li>
        </ul>
      </li>
    `);

    const total = document.querySelector('.basket-head__total');
    const priceNoDiscount = document.querySelector('.basket-head__nodiscount');
    const creditSum = document.querySelector('.basket-head__credit');
    const itemCounter = document.querySelector('.basket-head__desc-item-counter');

    if (item.discount > 0) {
      discountSum += (item.price * item.count) - (item.price * item.count / 100 * item.discount);
      total.textContent = `${validNumber((item.price * item.count) - (item.price * item.count / 100 * item.discount))} ₽`;
    } else {
      discountSum += (item.price * item.count);
      total.textContent = `${validNumber(item.price * item.count)} ₽`;
      priceNoDiscount.remove();
    }

    if (item.price * item.count < 10000) {
      creditSum.textContent = 'В кредит от 600 ₽';
    } else {
      creditSum.textContent = 'В кредит от 4600 ₽';
    }

    basketProductCounter += item.count;
    basketProductQuantity += 1;

    const imgMini = document.createElement('img');
    imgMini.classList.add('basket-delivery__item-pic');
    imgMini.src = `./img/${item.image}`;
    imgMini.alt = `Мини картинка ${item.title}`;
    deliveryMisc.append(imgMini);

    itemCounter.addEventListener('click', e => {
      e.preventDefault();
      const target = e.target;
      const counterText = target.parentNode.children[1];
      const productId = target.parentNode.parentNode.children[0].children[0].textContent;


      if (target.closest('.basket-head__quantity-btn_add')) {
        counterText.textContent = +counterText.textContent + 1;

        httpRequest(`https://hidden-castle-31466.herokuapp.com/api/goods/${productId}`, {
          method: 'PATCH',
          body: {
            count: +counterText.textContent,
          },
          callback(err, data) {
            console.log(err, data);
            if (err) {
              console.log(err);
            } else {
              httpRequest(`https://hidden-castle-31466.herokuapp.com/api/goods`, {
                method: 'GET',
                callback: renderBasketProducts,
              });
            }
          },
          headers: {
            'Content-Type': 'application/json',
          },
        });
      }

      if (target.closest('.basket-head__quantity-btn_subtract')) {
        if (counterText.textContent > 0) {
          counterText.textContent = +counterText.textContent - 1;

          httpRequest(`https://hidden-castle-31466.herokuapp.com/api/goods/${productId}`, {
            method: 'PATCH',
            body: {
              count: +counterText.textContent,
            },
            callback(err, data) {
              console.log(err, data);
              if (err) {
                console.log(err);
              } else {
                httpRequest(`https://hidden-castle-31466.herokuapp.com/api/goods`, {
                  method: 'GET',
                  callback: renderBasketProducts,
                });
              }
            },
            headers: {
              'Content-Type': 'application/json',
            },
          });
        }
      }
    });
  });

  const productCheckboxes = document.querySelectorAll('.basket-head__product-check');
  const arrFromNode = Array.from(productCheckboxes);

  allCheckboxes.addEventListener('change', () => {
    productCheckboxes.forEach(item => {
      if (allCheckboxes.checked) {
        item.checked = true;
      } else {
        item.checked = false;
      }
    });
  });

  productCheckboxes.forEach(item => {
    item.addEventListener('change', () => {
      if (arrFromNode.every(el => el.checked === true)) {
        allCheckboxes.checked = true;
      } else {
        allCheckboxes.checked = false;
      }
    });
  });

  deleteProduct.addEventListener('click', e => {
    e.preventDefault();

    productCheckboxes.forEach((item) => {
      if (item.checked) {
        const itemToDelete = item.parentNode.children[0].textContent;
        httpRequest(`https://hidden-castle-31466.herokuapp.com/api/goods/${itemToDelete}`, {
          method: 'DELETE',
          callback(err, data) {
            console.log(err, data);
            if (err) {
              console.log(err);
            } else {
              httpRequest(`https://hidden-castle-31466.herokuapp.com/api/goods`, {
                method: 'GET',
                callback: renderBasketProducts,
              });
            }
          },
          headers: {
            'Content-Type': 'application/json',
          },
        });
      }
    });
  });

  totalPrice.textContent = `${validNumber(discountSum)} ₽`;
  totalDiscount.textContent = `${validNumber((sum - discountSum).toFixed(1))} ₽`;
  productHeadCounter.textContent = basketProductQuantity;
  productTotalCounter.textContent = basketProductCounter;

  const loader = document.querySelector('.lds-ring-wrapper');
  if (loader) {
    setTimeout(() => {
      loader.remove();
    }, 500);
  }
};

