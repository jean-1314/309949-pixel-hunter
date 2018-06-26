import {resetState} from '../game-functions/reset-state';
import {GameConsts, INITIAL_STATE} from './game-data';
import Application from '../application';
import {renderIngameStats} from '../game-functions/render-ingame-stats';
import {tick} from '../game-functions/tick';

export default class GameModel {
  constructor(name, data) {
    this.name = name;
    this.data = data;
    this.shouldTick = true;
    this.restart();
  }

  get state() {
    return this._state;
  }

  get answers() {
    return this._answers;
  }

  restart() {
    this._state = resetState();
    this._answers = [];
  }

  levelUp() {
    ++this._state.currentLevel;
  }

  updateFastAnswers() {
    ++this._state.fastAnswers;
  }

  updateSlowAnswers() {
    ++this._state.slowAnswers;
  }

  updateAnswers(answer) {
    this._answers.push(answer);
  }

  removeLife() {
    --this._state.lives;
  }

  canContinue() {
    return this._state.currentLevel < GameConsts.MIN_ANSWERS - 1 && this._state.lives >= 0 ? true : false;
  }

  isVictory() {
    return this._state.currentLevel === GameConsts.MIN_ANSWERS - 1 && this._state.lives >= 0 ? true : false;
  }

  winGame() {
    this._state.victory = true;
  }

  endGame() {
    renderIngameStats(this._answers);
    Application.showStats(this._state, this._answers, this.name);
  }

  getLevel() {
    return this.data[this.state.currentLevel];
  }

  tick() {
    if (this.shouldTick) {
      this._state.time = tick(this._state.time);
    }
  }

  isTimeUp() {
    return this._state.time === 0;
  }

  resetTime() {
    this._state.time = INITIAL_STATE.time;
  }

}
