const navBar = document.querySelector('.header__nav');

export const showMenu = () => {
  navBar.insertAdjacentHTML('beforeend', `
    <nav class="menu">
      <div class="menu__wrapper">
        <div class="menu__hrefs">
          <ul class="menu__catalog-list">
            <li class="menu__catalog-item">
              Каталог
            </li>
            <li class="menu__catalog-item">
              <a class="menu__catalog-link" href="">Смартфоны</a>
            </li>
            <li class="menu__catalog-item">
              <a class="menu__catalog-link" href="">Ноутбуки</a>
            </li>
            <li class="menu__catalog-item">
              <a class="menu__catalog-link" href="">Ювелирные изделия</a>
            </li>
            <li class="menu__catalog-item">
              <a class="menu__catalog-link" href="">Одежда</a>
            </li>
            <li class="menu__catalog-item">
              <a class="menu__catalog-link" href="">Бытовая техника</a>
            </li>
          </ul>

          <ul class="menu__addition-list">
            <li class="menu__addition-item">
              <a class="menu__addition-link" href="">Бытовая химия</a>
            </li>
            <li class="menu__addition-item">
              <a class="menu__addition-link" href="">Книги и журналы</a>
            </li>
            <li class="menu__addition-item">
              <a class="menu__addition-link" href="">Домашний текстиль</a>
            </li>
            <li class="menu__addition-item">
              <a class="menu__addition-link" href="">Электроника</a>
            </li>
            <li class="menu__addition-item">
              <a class="menu__addition-link" href="">Косметика</a>
            </li>
          </ul>

          <ul class="menu__clients-list">
            <li class="menu__clients-item">
              Покупателям
            </li>
            <li class="menu__clients-item">
              <a class="menu__clients-link" href="">Оплата заказа</a>
            </li>
            <li class="menu__clients-item">
              <a class="menu__clients-link" href="">Условия доставки</a>
            </li>
            <li class="menu__clients-item">
              <a class="menu__clients-link" href="">Условия возврата </br> заказа</a>
            </li>
            <li class="menu__clients-item">
              <a class="menu__clients-link" href="">Блог</a>
            </li>
          </ul>

          <ul class="menu__contacts-list">
            <li class="menu__contacts-item">Связаться с нами</li>
            <li class="menu__contacts-item">
              <a class="menu__contacts-link menu__contacts-tel" href="">Контакты</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `);

  const menuOverlay = document.querySelector('.menu');
  const menuWrapper = document.querySelector('.menu__wrapper');

  return {
    menuOverlay,
    menuWrapper,
  };
};
