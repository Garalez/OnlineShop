const catalogList = document.querySelector('.footer__catalog-list');
const additionList = document.querySelector('.footer__addition-list');
const catalogItems = document.querySelectorAll('.footer__catalog-item');
const additionItems = document.querySelectorAll('.footer__addition-item');
const clientsItems = document.querySelectorAll('.footer__clients-item');
const wrapper = document.querySelector('.footer__hrefs');
const catalogBtn = document.querySelector('.footer__catalog-btn');
const clientBtn = document.querySelector('.footer__clients-btn');

export const acc = () => {
  wrapper.addEventListener('click', (event) => {
    const target = event.target;
    if (target.closest('.footer__catalog-btn') ||
    target.closest('.footer__catalog-item')) {
      catalogBtn.style.transform = 'rotate(180deg) translate(0px, 11px)';
      catalogItems.forEach(elem => {
        elem.classList.toggle('active');
        if (elem.classList.contains('active')) {
          elem.style.height = elem.scrollHeight + 'px';
          catalogList.style.gap = '4px';
          catalogList.style.marginBottom = '3px';
        } else {
          elem.style.height = '';
          catalogBtn.style.transform = 'translate(0px, -3px)';
          catalogList.style.gap = '0';
          catalogList.style.marginBottom = '11px';
        }
      });
      additionItems.forEach(e => {
        e.classList.toggle('active');
        if (e.classList.contains('active')) {
          e.style.height = e.scrollHeight + 'px';
          additionList.style.gap = '4px';
          additionList.style.marginBottom = '30px';
        } else {
          e.style.height = '';
          additionList.style.gap = '0';
          additionList.style.marginBottom = '0px';
        }
      });
    }
    if (target.closest('.footer__clients-btn') ||
        target.closest('.footer__clients-item')) {
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
};

