export default class Poutine {
  constructor(element) {
    this.element = element;
    this.types = this.element.querySelectorAll('.js-button-poutine');
    this.selectedTypes = '';

    this.init();
  }

  init() {
    // console.log('test3'); good

    for (let i = 0; i < this.types.length; i++) {
      const button = this.types[i];

      button.addEventListener('click', this.selectType.bind(this));
    }
  }

  selectType(event) {
    // console.log('test4'); good

    for (let i = 0; i < this.types.length; i++) {
      const button = this.types[i];

      button.classList.remove('is-active');
    }

    event.currentTarget.classList.add('is-active');
    this.selectedTypes = event.currentTarget.innerText;

    addEventListener('click', this.updatePhoto.bind(this));
  }

  updatePhoto() {
    const photos = this.element.querySelector('.js-photo');

    photos.classList.add('is-active');
    photos.src = `assets/images/${this.selectedTypes}.png`;
  }
}
