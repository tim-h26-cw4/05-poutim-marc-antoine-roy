import Poutine from './Poutine.js';

export default class Chef {
  constructor(element) {
    this.element = element;
    this.menu = [];
    this.container = document.querySelectorAll('.js-final-order');

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

    const button = document.querySelector('.js-button-order');
    button.addEventListener('click', this.sendOrder.bind(this));
  }

  sendOrder() {
    let nbPoutine = 0;

    for (let i = 0; i < this.menu.length; i++) {
      const poutine = this.menu[i];
      nbPoutine += 1;

      if () {

      }
    }
    
    const menuText = document.createElement('p');
    menuText.innerText = `Nombre total de poutine(s) : ${laskdjfa}`;
    this.container.appendChild(menuText);
    this.container.innerText = '';
  }
}
