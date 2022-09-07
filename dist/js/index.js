/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 511:
/***/ ((__unused_webpack___webpack_module__, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _modules_blogs_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(929);
/* harmony import */ var _modules_data_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(732);
/* harmony import */ var _modules_pagination_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(64);
/* harmony import */ var _modules_blogArticle_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(702);
/* harmony import */ var _modules_header_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(918);
/* harmony import */ var _modules_footer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(592);
/* harmony import */ var _modules_productDesc_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(773);
/* harmony import */ var _modules_offers_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(461);
/* harmony import */ var _modules_localStorage_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(424);










const init = () => {
  (0,_modules_footer_js__WEBPACK_IMPORTED_MODULE_4__/* .acc */ .P)();
  (0,_modules_header_js__WEBPACK_IMPORTED_MODULE_3__/* .modalEvents */ .D)();
  (0,_modules_localStorage_js__WEBPACK_IMPORTED_MODULE_6__/* .renewBasketQuantity */ .xC)();

  if (window.location.toString().includes('blog')) {
    (0,_modules_data_js__WEBPACK_IMPORTED_MODULE_7__/* .loadPosts */ .N)();
    (0,_modules_pagination_js__WEBPACK_IMPORTED_MODULE_1__/* .pagination */ .o)();
    (0,_modules_blogs_js__WEBPACK_IMPORTED_MODULE_0__/* .createPosts */ .Y)();
  }

  if (window.location.toString().includes('article')) {
    (0,_modules_blogArticle_js__WEBPACK_IMPORTED_MODULE_2__/* .fullBlog */ .x)();
  }

  if (window.location.toString().includes('card')) {
    (0,_modules_productDesc_js__WEBPACK_IMPORTED_MODULE_5__/* .renderProductInfo */ .X)();
  }

  if (window.location.toString().includes('index')) {
    (0,_modules_offers_js__WEBPACK_IMPORTED_MODULE_8__/* .itemsToOffer */ .B)();
  }
};

init();

/***/ }),

/***/ 957:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": () => (/* binding */ renderBasketProducts)
/* harmony export */ });
/* harmony import */ var _localStorage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(424);
/* eslint-disable max-len */


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
  const basketTitle = document.querySelector('.basket-head__title');
  const productHeadCounter = document.querySelector('.basket-head__product-counter');
  const productTotalCounter = document.querySelector('.basket-total__quantity-number');
  const productList = document.querySelector('.basket-head__list');
  const totalPrice = document.querySelector('.basket-total__title-price');
  const deliveryMisc = document.querySelector('.basket-delivery__item-misc');
  const totalPriceNoDiscount = document.querySelector('.basket-total__price-nodiscount');
  const totalDiscount = document.querySelector('.basket-total__discount-total');
  const deleteProduct = document.querySelector('.basket-head__clear');
  const allCheckboxes = document.querySelector('.basket-head__checkall');
  const btnWrapper = document.querySelector('.basket-head__btn-wrapper');
  const deliveryPointBtn = document.querySelector('.basket-delivery__btn-change');
  const form = document.querySelector('.basket');
  form.addEventListener('submit', e => {
    e.preventDefault();
    alert('На данное время в ТЗ не было указанно действия для заказа');
  });
  deliveryPointBtn.addEventListener('click', e => {
    e.preventDefault();
    document.body.insertAdjacentHTML('beforeend', `
      <div class="overlay active">
        <div class="overlay__modal modal">
          <button class="modal__close">
            <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="m2 2 20 20M2 22 22 2" stroke="currentColor" stroke-width="3" stroke-linecap="round" /></svg>
          </button>
          <div class="modal__top">
            <h2 class="modal__title">Введите пункт выдачи</h2>
          </div>
          <input class="modal__input" type="text">
          <div class="buttons__wrapper">
            <button class="modal__accept modal__submit">ОК</button>
            <button class="modal__decline modal__submit">Закрыть</button>
          </div>
        </div>
      </div>
    `);
    const overlay = document.querySelector('.overlay');
    const deliveryPointAddress = document.querySelector('.basket-delivery__item-address');
    const overlayInput = document.querySelector('.modal__input');
    overlay.addEventListener('click', event => {
      const target = event.target;

      if (target.closest('.modal__accept')) {
        deliveryPointAddress.textContent = overlayInput.value;
        overlay.remove();
      }

      if (target.closest('.modal__decline') || !target.closest('.overlay__modal') || target.closest('.modal__close')) {
        overlay.remove();
      }
    });
  });
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
    basketTitle,
    btnWrapper
  };
};

const renderBasketProducts = data => {
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
    basketTitle,
    btnWrapper
  } = openBasket();

  const validNumber = num => num.toString().replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ');

  const sum = data.reduce((a, b) => a + Number(b.price) * b.count, 0);
  let discountSum = 0;
  let basketProductCounter = 0;
  let basketProductQuantity = 0;
  totalPriceNoDiscount.textContent = `${validNumber(sum)} ₽`;

  if (data.length === 0) {
    basketTitle.textContent = 'Корзина пуста';
    productHeadCounter.remove();
    btnWrapper.remove();
  }

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
      discountSum += item.price * item.count - item.price * item.count / 100 * item.discount;
      total.textContent = `${validNumber(item.price * item.count - item.price * item.count / 100 * item.discount)} ₽`;
    } else {
      discountSum += item.price * item.count;
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
        const getData = (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_0__/* .getStorage */ .cF)('basket');
        const storageItem = getData.findIndex(el => el.id === productId);
        (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_0__/* .removeStorage */ .Li)(getData[storageItem].id, 'basket');
        getData[storageItem].count += 1;
        (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_0__/* .setStorage */ .po)('basket', getData);
        renderBasketProducts(getData);
      }

      if (target.closest('.basket-head__quantity-btn_subtract')) {
        if (counterText.textContent > 0) {
          counterText.textContent = +counterText.textContent - 1;
          const getData = (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_0__/* .getStorage */ .cF)('basket');
          const storageItem = getData.findIndex(el => el.id === productId);
          (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_0__/* .removeStorage */ .Li)(getData[storageItem].id, 'basket');
          getData[storageItem].count -= 1;
          (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_0__/* .setStorage */ .po)('basket', getData);
          renderBasketProducts(getData);
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
    productCheckboxes.forEach(item => {
      if (item.checked) {
        const itemToDelete = item.parentNode.children[0].textContent;
        (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_0__/* .removeStorage */ .Li)(itemToDelete, 'basket');
        renderBasketProducts((0,_localStorage_js__WEBPACK_IMPORTED_MODULE_0__/* .getStorage */ .cF)('basket'));
        (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_0__/* .renewBasketQuantity */ .xC)();
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

/***/ }),

/***/ 702:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": () => (/* binding */ fullBlog)
/* harmony export */ });
const article = document.querySelector('.shoe-care__blog');
const backToBlogs = document.querySelector('.author__item-ref');
const fullBlog = async () => {
  article.innerHTML = '';
  const pageParams = new URLSearchParams(location.search);
  const postId = pageParams.get('id');
  const result = await fetch(`https://gorest.co.in/public-api/posts?id=${postId}`);
  const data = await result.json();
  const getUsers = await fetch(`https://gorest.co.in/public-api/users/${data.data[0].user_id}`);
  const user = await getUsers.json();
  const blogTitle = document.createElement('h1');
  blogTitle.style.marginBottom = '50px';
  blogTitle.textContent = data.data[0].title;
  const blog = document.createElement('p');
  blog.textContent = data.data[0].body;
  blog.style.marginBottom = '100px';
  const author = document.querySelector('.author__item-name');
  author.style.marginBottom = '25px';
  author.textContent = user.data.name;
  const uploadDate = document.createElement('p');
  uploadDate.classList.add('blog__item-subtitle');
  uploadDate.style.marginBottom = '25px';
  uploadDate.textContent = '22 октября 2021, 12:45';
  const blogMedia = document.createElement('p');
  blogMedia.classList.add('blog__item-media');
  const viewsCount = document.createElement('span');
  viewsCount.classList.add('blog__item-views');
  viewsCount.textContent = '1.2K';
  const commentsCount = document.createElement('span');
  commentsCount.classList.add('blog__item-comments');
  commentsCount.textContent = '0';
  backToBlogs.href = 'blog.html';
  blogMedia.append(viewsCount, commentsCount);
  author.after(uploadDate, blogMedia);
  article.append(blogTitle, blog);
};

/***/ }),

/***/ 929:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": () => (/* binding */ createPosts)
/* harmony export */ });
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(732);

const blogWrapper = document.querySelector('.blog-wrapper');
const createPosts = async () => {
  const pageParams = new URLSearchParams(location.search);
  const postPage = pageParams.get('page');
  const data = await (0,_data_js__WEBPACK_IMPORTED_MODULE_0__/* .loadPosts */ .N)(postPage);
  const blogList = document.createElement('ul');
  blogList.classList.add('blog__list');
  blogWrapper.append(blogList);
  data.data.forEach((element, index) => {
    const blogItem = document.createElement('li');
    blogItem.classList.add('blog__item');
    const imgWrapper = document.createElement('div');
    imgWrapper.classList.add('blog__item-img-wrapper');
    const blogImg = document.createElement('a');
    blogImg.classList.add('blog__item-img');
    blogImg.href = `article.html?id=${data.data[index].id}`;
    blogImg.style.backgroundImage = 'url("./img/blog/boots.png")';
    const textWrapper = document.createElement('div');
    textWrapper.classList.add('blog__text-wrapper');
    const itemTitle = document.createElement('a');
    itemTitle.classList.add('blog__item-title');
    itemTitle.textContent = element.title;
    itemTitle.href = `article.html?id=${data.data[index].id}`;
    const blogDate = document.createElement('a');
    blogDate.classList.add('blog__item-subtitle');
    blogDate.href = `article.html?id=${data.data[index].id}`;
    blogDate.textContent = '22 октября 2021, 12:45';
    const blogMedia = document.createElement('a');
    blogMedia.classList.add('blog__item-media');
    blogMedia.href = `article.html?id=${data.data[index].id}`;
    const viewsCount = document.createElement('span');
    viewsCount.classList.add('blog__item-views');
    viewsCount.textContent = '1.2K';
    const commentsCount = document.createElement('span');
    commentsCount.classList.add('blog__item-comments');
    commentsCount.textContent = '0';
    imgWrapper.append(blogImg);
    blogItem.append(imgWrapper, textWrapper);
    textWrapper.append(itemTitle, blogDate, blogMedia);
    blogMedia.append(viewsCount, commentsCount);
    blogList.append(blogItem);
  });
};

/***/ }),

/***/ 732:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ loadPosts),
/* harmony export */   "c": () => (/* binding */ httpRequest)
/* harmony export */ });
const loadPosts = async page => {
  let result;
  page === null ? result = await fetch('https://gorest.co.in/public-api/posts') : result = await fetch(`https://gorest.co.in/public-api/posts?page=${page}`);
  const data = await result.json();
  return data;
};
const httpRequest = (url, {
  method = 'GET',
  body = {},
  callback,
  headers
}) => {
  try {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);

    if (headers) {
      for (const [key, value] of Object.entries(headers)) {
        xhr.setRequestHeader(key, value);
      }
    }

    xhr.addEventListener('load', () => {
      if (xhr.status < 200 || xhr.status >= 300) {
        console.log(xhr.status);
        callback(xhr.status, xhr.response);
        return;
      }

      const data = JSON.parse(xhr.response);
      if (callback) callback(null, data);
    });
    xhr.addEventListener('error', () => {
      callback(new Error(xhr.status), xhr.response);
    });
    xhr.send(JSON.stringify(body));
  } catch (err) {
    callback(new Error(err));
  }
};

/***/ }),

/***/ 592:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* binding */ acc),
/* harmony export */   "T": () => (/* binding */ loadCategoryGoods)
/* harmony export */ });
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(732);
/* harmony import */ var _preloader_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(422);
/* eslint-disable max-len */


const catalogList = document.querySelector('.footer__catalog-list');
const clientsItems = document.querySelectorAll('.footer__clients-item');
const wrapper = document.querySelector('.footer__wrapper');
const catalogBtn = document.querySelector('.footer__catalog-btn');
const clientBtn = document.querySelector('.footer__clients-btn');
const loadCategoryGoods = (e, err, data) => {
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

    const validNumber = num => num.toString().replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ');

    data.map(item => {
      if (e.target.textContent === item.category) {
        categoryList.insertAdjacentHTML('afterbegin', `
          <li class="card-footer__item" tabindex="0">
            <a class="card-footer__item-link"  href="card.html?id=${item.id}">
              <div class="card-footer__item-pic-wrapper">
                <img class="card-footer__item-pic" src="./img/${item.image}" alt="${item.title}">
                <p class="card-footer__item-discount">-${item.discount}%</p>
              </div>
              <div class="card-footer__item-price-wrapper">
              <p class="card-footer__item-price-discount"></p>
                <p class="card-footer__item-nodiscount"></p>
              </div>
              <p class="card-footer__item-name">${item.title}</p>
            </a>
          </li>
        `);
        categorySection.append(categoryTitle, categoryList);
        wrapper.append(categorySection);
        const productPrice = document.querySelector('.card-footer__item-price-discount');
        const priceNoDiscount = document.querySelector('.card-footer__item-nodiscount');
        const discount = document.querySelector('.card-footer__item-discount');

        if (item.discount > 0) {
          productPrice.textContent = `${validNumber(item.price - item.price * (item.discount / 100))} ₽`;
          priceNoDiscount.textContent = `${validNumber(item.price)} ₽`;
        } else {
          productPrice.textContent = `${validNumber(item.price)} ₽`;
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
const acc = () => {
  (0,_data_js__WEBPACK_IMPORTED_MODULE_0__/* .httpRequest */ .c)('https://hidden-castle-31466.herokuapp.com/api/category', {
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
            (0,_preloader_js__WEBPACK_IMPORTED_MODULE_1__/* .preloader */ .x)();
            (0,_data_js__WEBPACK_IMPORTED_MODULE_0__/* .httpRequest */ .c)(`https://hidden-castle-31466.herokuapp.com/api/goods`, {
              method: 'GET',

              callback(err, data) {
                loadCategoryGoods(e, err, data);
              }

            });
          });
        });
        const catalogItems = document.querySelectorAll('.footer__catalog-item');
        wrapper.addEventListener('click', event => {
          const target = event.target;

          if (target.closest('.footer__catalog-btn') || target.closest('.footer__catalog-title')) {
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

          if (target.closest('.footer__clients-btn') || target.closest('.footer__clients')) {
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
    }

  });
};

/***/ }),

/***/ 918:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ modalEvents)
/* harmony export */ });
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(113);
/* harmony import */ var _basket_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(957);
/* harmony import */ var _preloader_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(422);
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(732);
/* harmony import */ var _localStorage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(424);
/* eslint-disable max-len */





const navBar = document.querySelector('.header__nav');
const modalEvents = () => {
  navBar.addEventListener('click', e => {
    const target = e.target;

    if (target.closest('.header__nav-btn')) {
      (0,_data_js__WEBPACK_IMPORTED_MODULE_1__/* .httpRequest */ .c)('https://hidden-castle-31466.herokuapp.com/api/category', {
        method: 'GET',
        callback: _menu_js__WEBPACK_IMPORTED_MODULE_0__/* .showMenu */ .A
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

      (0,_preloader_js__WEBPACK_IMPORTED_MODULE_2__/* .preloader */ .x)();
      const storagedItems = (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_3__/* .getStorage */ .cF)('basket');
      (0,_basket_js__WEBPACK_IMPORTED_MODULE_4__/* .renderBasketProducts */ .X)(storagedItems);
    }
  });
};

/***/ }),

/***/ 424:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Li": () => (/* binding */ removeStorage),
/* harmony export */   "cF": () => (/* binding */ getStorage),
/* harmony export */   "po": () => (/* binding */ setStorage),
/* harmony export */   "xC": () => (/* binding */ renewBasketQuantity)
/* harmony export */ });
/* eslint-disable max-len */
const getStorage = key => {
  const objFromStorage = JSON.parse(localStorage.getItem(key));

  if (objFromStorage === null) {
    return [];
  } else {
    return objFromStorage;
  }
};
const setStorage = (key, obj) => {
  const getData = getStorage(key);

  if (Array.isArray(obj)) {
    getData.splice(0, getData.length, ...obj);
  } else {
    getData.push(obj);
  }

  const newData = JSON.stringify(getData);
  localStorage.setItem(key, newData);
};
const removeStorage = (id, usersName) => {
  const getDataFromStorage = getStorage(usersName);
  getDataFromStorage.forEach((item, index) => {
    if (id === item.id) {
      getDataFromStorage.splice([index], 1);
      setStorage(usersName, getDataFromStorage);
    }
  });
};
const renewBasketQuantity = () => {
  const basketItemQuantity = document.querySelector('.header__nav-basket-quantity');
  const itemsInStorage = getStorage('basket');
  let productCounter = 0;
  itemsInStorage.forEach(() => {
    productCounter += 1;
  });
  basketItemQuantity.textContent = productCounter;
};

/***/ }),

/***/ 113:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ showMenu)
/* harmony export */ });
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(732);
/* harmony import */ var _preloader_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(422);
/* harmony import */ var _footer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(592);
/* eslint-disable max-len */



const navBar = document.querySelector('.header__nav');
const breadCrumb = document.querySelector('.header__breadcrumb-list');
const navMenuBtn = document.querySelector('.header__nav-btn');
const showMenu = (err, data) => {
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
                <a class="menu__clients-link" href="blog.html">Блог</a>
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
    startAnimation(duration, progress => {
      const top = easeInOut(progress) * distance;
      menuWrapper.style.transform = `translateY(${top}px)`;
    });
    menuOverlay.addEventListener('click', event => {
      if (!event.target.closest('.menu__wrapper') || event.target.closest('.menu__catalog-link')) {
        if (event.target.closest('.menu__catalog-link')) {
          event.preventDefault();
          scrollTo(0, 0);
          (0,_preloader_js__WEBPACK_IMPORTED_MODULE_1__/* .preloader */ .x)();
          (0,_data_js__WEBPACK_IMPORTED_MODULE_2__/* .httpRequest */ .c)(`https://hidden-castle-31466.herokuapp.com/api/goods`, {
            method: 'GET',

            callback(err, data) {
              (0,_footer_js__WEBPACK_IMPORTED_MODULE_0__/* .loadCategoryGoods */ .T)(event, err, data);
            }

          });
        }

        if (breadCrumb) {
          breadCrumb.style.visibility = 'visible';
        }

        navMenuBtn.classList.remove('menu-active');
        menuWrapper.style.top = `${distance / 2.5}px`;
        startAnimation(duration, progress => {
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

/***/ }),

/***/ 461:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B": () => (/* binding */ itemsToOffer)
/* harmony export */ });
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(732);
/* eslint-disable max-len */

const itemsToOffer = () => {
  const offerList = document.querySelector('.card-footer__list');
  (0,_data_js__WEBPACK_IMPORTED_MODULE_0__/* .httpRequest */ .c)('https://hidden-castle-31466.herokuapp.com/api/goods', {
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
                  <p class="card-footer__item-price-discount">${product.price - product.price * (product.discount / 100)} ₽</p>
                  <p class="card-footer__item-nodiscount">${product.price} ₽</p>
                </div>
                <p class="card-footer__item-name">${product.title}</p>
              </a>
            </li>
          `);
        });
      }
    }

  });
};

/***/ }),

/***/ 64:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "o": () => (/* binding */ pagination)
/* harmony export */ });
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(732);

const blogWrapper = document.querySelector('.blog-wrapper');
const pagination = async () => {
  const pageParams = new URLSearchParams(location.search);
  const postPage = pageParams.get('page');
  const data = await (0,_data_js__WEBPACK_IMPORTED_MODULE_0__/* .loadPosts */ .N)(postPage);
  const paginationWrapper = document.createElement('div');
  paginationWrapper.classList.add('pages');
  const previousPage = document.createElement('a');
  previousPage.classList.add('pages__btn-previous');
  const pageList = document.createElement('ul');
  pageList.classList.add('pages__list');
  const pageNumber = document.createElement('a');
  pageNumber.classList.add('pages__item');

  if (data.meta.pagination.page === 1) {
    pageNumber.textContent = '';
    previousPage.style.display = 'none';
  } else {
    pageNumber.textContent = data.meta.pagination.page - 1;
  }

  const pageNumberClone = pageNumber.cloneNode();
  pageNumberClone.textContent = data.meta.pagination.page;
  const thirdPage = pageNumberClone.cloneNode();
  const nextPage = document.createElement('a');
  nextPage.classList.add('pages__btn-next');

  if (data.meta.pagination.page === data.meta.pagination.pages) {
    thirdPage.textContent = '';
    nextPage.style.display = 'none';
  } else {
    thirdPage.textContent = data.meta.pagination.page + 1;
  }

  nextPage.addEventListener('click', () => {
    data.meta.pagination.page += 1;
    nextPage.href = `blog.html?page=${data.meta.pagination.page}`;
  });
  previousPage.addEventListener('click', () => {
    data.meta.pagination.page -= 1;

    if (data.meta.pagination.page === 1) {
      previousPage.href = `blog.html`;
    } else {
      previousPage.href = `blog.html?page=${data.meta.pagination.page}`;
    }
  });
  paginationWrapper.append(previousPage, pageList, nextPage);
  pageList.append(pageNumber, pageNumberClone, thirdPage);
  pageList.childNodes.forEach(elem => {
    elem.addEventListener('click', () => {
      if (elem.textContent === 1 .toString()) {
        elem.href = `blog.html`;
      } else {
        elem.href = `blog.html?page=${elem.textContent}`;
      }
    });
  });
  blogWrapper.after(paginationWrapper);
};

/***/ }),

/***/ 422:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": () => (/* binding */ preloader)
/* harmony export */ });
const preloader = () => {
  const lds = document.createElement('div');
  lds.classList.add('lds-ring-wrapper');
  lds.insertAdjacentHTML('afterbegin', `
    <div class="lds-ring">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  `);
  const main = document.querySelector('main');
  main.append(lds);
};

/***/ }),

/***/ 773:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": () => (/* binding */ renderProductInfo)
/* harmony export */ });
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(732);
/* harmony import */ var _footer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(592);
/* harmony import */ var _preloader_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(422);
/* harmony import */ var _localStorage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(424);
/* eslint-disable max-len */




const renderProductInfo = () => {
  const breadCrumb = document.querySelector('.header__breadcrumb-list');
  breadCrumb.innerHTML = '';

  const validNumber = num => num.toString().replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ');

  const pageParams = new URLSearchParams(location.search);
  const postId = pageParams.get('id');
  (0,_preloader_js__WEBPACK_IMPORTED_MODULE_1__/* .preloader */ .x)();
  (0,_data_js__WEBPACK_IMPORTED_MODULE_2__/* .httpRequest */ .c)(`https://hidden-castle-31466.herokuapp.com/api/goods/${postId}`, {
    method: 'GET',

    callback(err, data) {
      if (err) {
        console.log(err);
      } else {
        const main = document.querySelector('main');
        const wrapper = main.children[0];
        wrapper.innerHTML = '';
        wrapper.insertAdjacentHTML('afterbegin', `
          <section class="product">
            <h1 class="product__title">${data.title}</h1>
            <div class="product__img-wrapper">
              <p class="product__discount">-15%</p>
              <img class="product__pic" src="./img/${data.image}" alt="${data.title}">
            </div>

            <ul class="product__list">
              <li class="product__item product__item-price">
                <span class="product__price-discount">${validNumber(data.price - data.price / 100 * data.discount)} ₽</span>
                <s class="product__price-nodiscount">${validNumber(data.price)} ₽</s>
              </li>
              <li class="product__item product__item-credit">В кредит от 5600 ₽ </li>
              <li class="product__item product__item-btns">
                <button class="product__item-btns-bucket">Добавить в корзину</button>
                <input class="product__item-btns-checkbox" type="checkbox" name="favorite" id="favorite">
                <label class="product__item-btns-favorite" for="favorite"></label>
              </li>
              <li class="product__item product__item-info">
                <div class="product__item-info-shipping-wrapper">
                  <p class="product__item-info-shipping">Доставка</p>
                  <p class="product__item-info-date">1-3 января</p>
                </div>
                <div class="product__item-info-seller-wrapper">
                  <p class="product__item-info-seller">Продавец</p>
                  <p class="product__item-info-name">ShopOnline</p>
                </div>
              </li>
              <li class="product__item product__item-discount">
                <button class="product__item-discount-btn"></button>
                <p class="product__item-discount-txt">Узнать о снижении цены</p>
              </li>
            </ul>

            <div class="product__desc">
              <p class="product__desc-title">Описание:</p>
              <p class="product__desc-subtitle">${data.description}</p>
            </div>
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
        const discountPrice = document.querySelector('.product__price-nodiscount');
        const discountNumber = document.querySelector('.product__discount');
        const addToBasketBtn = document.querySelector('.product__item-btns-bucket');

        if (data.discount === 0) {
          discountPrice.remove();
          discountNumber.remove();
        } else {
          discountNumber.textContent = `-${data.discount}%`;
        }

        addToBasketBtn.addEventListener('click', () => {
          const getData = (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_3__/* .getStorage */ .cF)('basket');

          if (getData.length > 0) {
            const storageItem = getData.findIndex(el => el.id === data.id);

            if (storageItem >= 0) {
              alert('Товар уже есть в корзине');
            } else {
              data.count = 1;
              alert('Товар добавлен в корзину');
              (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_3__/* .setStorage */ .po)('basket', data);
              (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_3__/* .renewBasketQuantity */ .xC)();
            }
          } else {
            data.count = 1;
            alert('Товар добавлен в корзину');
            (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_3__/* .setStorage */ .po)('basket', data);
            (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_3__/* .renewBasketQuantity */ .xC)();
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
              (0,_data_js__WEBPACK_IMPORTED_MODULE_2__/* .httpRequest */ .c)(`https://hidden-castle-31466.herokuapp.com/api/goods`, {
                method: 'GET',

                callback(err, data) {
                  (0,_footer_js__WEBPACK_IMPORTED_MODULE_0__/* .loadCategoryGoods */ .T)(e, err, data);
                }

              });
            });
          }, 500);
        }
      }
    }

  });
};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	__webpack_require__(511);
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_require__(957);
/******/ 	__webpack_require__(702);
/******/ 	__webpack_require__(929);
/******/ 	__webpack_require__(732);
/******/ 	__webpack_require__(592);
/******/ 	__webpack_require__(918);
/******/ 	__webpack_require__(424);
/******/ 	__webpack_require__(113);
/******/ 	__webpack_require__(461);
/******/ 	__webpack_require__(64);
/******/ 	__webpack_require__(422);
/******/ 	var __webpack_exports__ = __webpack_require__(773);
/******/ 	
/******/ })()
;