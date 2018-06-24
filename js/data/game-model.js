import {resetState} from '../game-functions/reset-state';
import {gameConsts, initialState, questions} from './game-data';
import Application from '../application';
import {renderResults} from '../game-functions/render-results';
import {tick} from '../game-functions/tick';

const getLevel = (state) => questions[state.currentLevel];

export default class GameModel {
  constructor() {
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
    return this._state.currentLevel < gameConsts.MIN_ANSWERS - 1 && this._state.lives >= 0 ? true : false;
  }

  isVictory() {
    return this._state.currentLevel === gameConsts.MIN_ANSWERS - 1 && this._state.lives >= 0 ? true : false;
  }

  winGame() {
    this._state.victory = true;
  }

  endGame() {
    renderResults(this._state, this._answers);
    Application.showStats(this._state, this._answers);
  }

  getLevel() {
    return getLevel(this._state);
  }

  tick() {
    this._state.time = tick(this._state.time);
  }

  isTimeUp() {
    return this._state.time === 0;
  }

  resetTime() {
    this._state.time = initialState.TIME;
  }

}