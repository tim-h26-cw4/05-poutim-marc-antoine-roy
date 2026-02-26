import Icons from './utils/Icons.js';

class Main {
  constructor() {
    this.init();
  }

  init() {
    //console.log('test');

    Icons.load();
  }
}

new Main();
// La ligne suivante devrait être au TOUT début du init() du Main
