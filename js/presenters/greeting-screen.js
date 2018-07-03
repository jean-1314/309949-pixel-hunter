import Application from '../application';
import GreetingView from '../views/greeting-view';

export default class GreetingScreen {
  constructor() {
    this.content = new GreetingView();
    this.root = document.createElement(`div`);
    this.root.classList.add(`greeting__wrapper`);
    this.root.appendChild(this.content.element);
    this.init();
  }

  get element() {
    return this.root;
  }

  init() {
    this.content.onEvent = this.event.bind(this);
  }

  event() {
    Application.showRules();
  }

  addFadein() {
    this.element.classList.add(`greeting__wrapper--fadein`);
  }

  removeWrapper() {
    this.element.classList.remove(`greeting__wrapper`);
  }
}
