import StatsView from '../views/stats-view';
import Application from '../application';

export default class StatsScreen {
  constructor(state, answers, name) {
    this.state = state;
    this.answers = answers;
    this.name = name;
    this.content = new StatsView(this.state, this.answers);
    this.root = document.createElement(`div`);
    this.root.appendChild(this.content.element);
    this.init();
  }

  get element() {
    return this.root;
  }

  init() {
    this.content.onReturn = this.goBack.bind(this);
  }

  goBack() {
    Application.showGreeting();
  }
}
