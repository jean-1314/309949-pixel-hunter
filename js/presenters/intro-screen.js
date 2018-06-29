import Application from '../application';
import IntroView from '../views/intro-view';

export default class IntroScreen {
  constructor() {
    this.content = new IntroView();
    this.root = document.createElement(`div`);
    this.root.classList.add(`intro__wrapper`);
    this.root.appendChild(this.content.element);
    this.init();
  }

  get element() {
    return this.root;
  }

  init() {
    this.content.onEvent = this.click.bind(this);
  }

  click() {
    Application.showGreeting();
  }
}
