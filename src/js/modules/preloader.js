export const preloader = () => {
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
