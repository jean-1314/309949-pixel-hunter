import {questions} from '../data/game-data';
import {gameState} from '../data/state';
import {checked} from '../util';
import {renderCurrentGame} from '../game-functions/render-game';
import AbstractView from './abstract-view';

const getLevel = () => questions[gameState.currentLevel];

export default class GameView extends AbstractView {

  constructor() {
    super();
    this._level = getLevel();
  }
  get template() {
    return `
      ${renderCurrentGame(this._level)}
    `;
  }
  bind() {
    const returnBtn = this.element.querySelector(`.back`);
    const gameContent = this.element.querySelector(`.game__content`);
    const questionArray = [...this.element.querySelectorAll(`[name*='question']`)];
    const questionOneArray = [...this.element.querySelectorAll(`[name='question1']`)];
    const questionTwoArray = [...this.element.querySelectorAll(`[name='question2']`)];

    returnBtn.addEventListener(`click`, () => {
      this.onReturn();
    });

    if (gameContent.classList.contains(`game__content--wide`)) {
      this.element.addEventListener(`input`, () => {
        const value = gameContent.querySelector(`input:checked`).value;
        if (value === this._level.options[0].answer) {
          gameState.currentAnswerStatus = true;
        }
        this.onAnswer();
      });
    } else if (gameContent.classList.contains(`game__content--triple`)) {
      gameContent.addEventListener(`click`, (event) => {
        const cardUrl = event.target.querySelector(`img`).getAttribute(`src`);
        const correctCard = this._level.options.find((question) => question.answer === `paint`).img;
        if (cardUrl === correctCard) {
          gameState.currentAnswerStatus = true;
        }
        this.onAnswer();
      });
    } else {
      questionArray.forEach((element) => {
        element.addEventListener(`change`, () => {
          if (questionOneArray.some(checked) && questionTwoArray.some(checked)) {
            const firstAnswerChecked = questionOneArray.filter((item) => item.checked);
            const secondAnswerChecked = questionTwoArray.filter((item) => item.checked);
            if (firstAnswerChecked[0].value === this._level.options[0].answer
              &&
              secondAnswerChecked[0].value === this._level.options[1].answer
            ) {
              gameState.currentAnswerStatus = true;
            }
            this.onAnswer();
          }
        });
      });
    }
  }

  onAnswer() {

  }

  onReturn() {

  }
}
