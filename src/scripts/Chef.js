import Poutine from './Poutine.js';

export default class Chef {
  constructor(element) {
    this.element = element;
    this.menu = [];
    this.container = this.element.querySelector('.js-final-order');

    this.init();
  }

  init() {
    //console.log('test2'); good

    const poutines = this.element.querySelectorAll('.js-poutine');
    for (let i = 0; i < poutines.length; i++) {
      const poutine = poutines[i];
      const instance = new Poutine(poutine);

      this.menu.push(instance);
    }

    const button = this.element.querySelector('.js-button-order');
    button.addEventListener('click', this.sendOrder.bind(this));
  }

  sendOrder() {
    this.container.innerText = '';

    let nbPoutine = 0;

    for (let i = 0; i < this.menu.length; i++) {
      const poutine = this.menu[i];

      if (poutine.isActive == true) {
        nbPoutine += 1;
      }
    }

    const menuText = document.createElement('p');
    menuText.innerText = `Nombre total de poutine(s) : ${nbPoutine}`;
    console.log(nbPoutine);
    this.container.appendChild(menuText);
  }
}
