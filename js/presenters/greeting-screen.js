import Application from '../application';
import GreetingView from '../views/greeting-view';

export default class GreetingScreen {
  constructor() {
    this.content = new GreetingView();
    this.root = document.createElement(`div`);
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
}
