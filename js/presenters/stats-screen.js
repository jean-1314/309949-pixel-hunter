import StatsView from '../views/stats-view';
import Application from '../application';
import ScoreboardView from '../views/scoreboard-view';

export default class StatsScreen {
  constructor(state, answers, name) {
    this.state = state;
    this.answers = answers;
    this.name = name;
    this.content = new StatsView(this.state, this.answers);
    this.scoreBoard = new ScoreboardView();
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

  addScoreboard() {
    const container = this.element.querySelector(`.result`);
    container.appendChild(this.scoreBoard.element);
  }

  showScore(data) {
    this.scoreBoard.showScore(data);
  }
}
