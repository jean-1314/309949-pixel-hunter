import RulesView from '../views/rules-view';
import Application from '../application';

export default class RulesScreen {
  constructor() {
    this.content = new RulesView();
    this.root = document.createElement(`div`);
    this.root.appendChild(this.content.element);
    this.init();
  }

  get element() {
    return this.root;
  }

  init() {
    this.content.onSubmit = this.submit.bind(this);
    this.content.onReturn = this.goBack.bind(this);
  }

  submit() {
    Application.showGame(name);
  }

  goBack() {
    Application.showGreeting();
  }
}
