import StatsView from '../views/stats-view';
import Application from '../application';

export default class StatsScreen {
  constructor(state, answers) {
    this.state = state;
    this.answers = answers;
    this.content = new StatsView(this.state, this.answers);
    this.root = document.createElement(`div`);
    this.root.appendChild(this.content.element);
    this.init();
  }

  get element() {
    return this.root;
  }

  init() {
    this.content.onReturn = this.return.bind(this);
  }

  return() {
    Application.showGreeting();
  }
}
