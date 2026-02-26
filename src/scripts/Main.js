import Icons from './utils/Icons.js';
import Chef from './Chef.js';

class Main {
  constructor() {
    this.init();
  }

  init() {
    //console.log('test');
    const chefs = document.querySelectorAll('[data-component="chef"]');
    for (let i = 0; i < chefs.length; i++) {
      const chef = chefs[i];

      new Chef(chef);
    }

    Icons.load();
  }
}

new Main();
// La ligne suivante devrait être au TOUT début du init() du Main
