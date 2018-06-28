import HeaderView from '../views/header-view';
import GameView from '../views/game-view';
import Application from '../application';
import {GameConsts} from '../data/game-data';
import {resizeImages} from '../game-functions/resize';

const ONE_SECOND = 1000;

export default class GameScreen {
  constructor(model) {
    this.model = model;
    this.header = new HeaderView(this.model.state);
    this.content = new GameView(this.model);
    this.root = document.createElement(`div`);
    this.root.appendChild(this.header.element);
    this.root.appendChild(this.content.element);
    this.updateHeader();
  }

  get element() {
    return this.root;
  }

  start() {
    this.model.checkIfDebug();
    this.model.resetTime();
    this.changeGame();
    this.model.interval = setInterval(() => {
      if (!this.model.isTimeUp()) {
        this.model.tick();
        this.updateHeader();
      } else {
        this.answer(false);
      }
    }, ONE_SECOND);
  }

  stopGame() {
    clearInterval(this.model.interval);
  }

  updateHeader() {
    const header = new HeaderView(this.model.state);
    this.root.replaceChild(header.element, this.header.element);
    this.header = header;
    header.onReturn = this.back.bind(this);
  }

  changeGame() {
    this.updateHeader();
    const game = new GameView(this.model);
    game.onAnswer = this.answer.bind(this);
    this.updateView(game);
  }

  updateView(view) {
    this.root.replaceChild(view.element, this.content.element);
    this.content = view;
    resizeImages(view.element);
  }

  answer(answer) {
    this.stopGame();
    let currentAnswer = {};

    if (answer) {
      currentAnswer = {
        correct: true,
        time: this.model.state.time,
      };
      if (currentAnswer.time > GameConsts.FAST_ANSWER) {
        this.model.updateFastAnswers();
      }
      if (currentAnswer.time < GameConsts.SLOW_ANSWER) {
        this.model.updateSlowAnswers();
      }
    } else {
      this.model.removeLife();
      currentAnswer = {
        correct: false,
      };
    }

    this.model.updateAnswers(currentAnswer);

    if (this.model.canContinue()) {
      this.model.levelUp();
      this.start();
    } else {
      if (this.model.isVictory()) {
        this.model.winGame();
      }
      this.model.endGame();
    }
  }

  back() {
    Application.showModalConfirm(this.model);
  }
}
