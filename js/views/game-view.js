import {checked} from '../util';
import {renderGame} from '../game-functions/render-game';
import {inGameStats} from '../page-elements/ingame-stats';
import AbstractView from './abstract-view';
import footer from '../page-elements/footer';
import {QuestionTypes} from '../data/game-data';

const description = `Найдите рисунок среди изображений`;
let questionType = ``;

export default class GameView extends AbstractView {

  constructor(level, answers) {
    super();
    this.level = level;
    this.answers = answers;
  }
  get template() {
    return `
      <div class="game">
        ${renderGame(this.level)}
        ${inGameStats(this.answers)}
      </div>
      ${footer}
    `;
  }
  bind() {
    const gameContent = this.element.querySelector(`.game__content`);
    const questionArray = [...this.element.querySelectorAll(`[name*='question']`)];
    const questionOneArray = [...this.element.querySelectorAll(`[name='question1']`)];
    const questionTwoArray = [...this.element.querySelectorAll(`[name='question2']`)];

    if (gameContent.classList.contains(`game__content--wide`)) {
      this.element.addEventListener(`change`, () => {
        const value = gameContent.querySelector(`input:checked`).value;
        if (value === this.level.answers[0].type) {
          this.onAnswer(true);
        } else {
          this.onAnswer(false);
        }
      });
    } else if (gameContent.classList.contains(`game__content--triple`)) {
      gameContent.addEventListener(`click`, (event) => {
        const cardUrl = event.target.querySelector(`img`).getAttribute(`src`);
        if (this.level.question === description) {
          questionType = QuestionTypes.PAINTING;
        } else {
          questionType = QuestionTypes.PHOTO;
        }
        const correctCard = this.level.answers.find((answer) => answer.type === questionType).image.url;
        if (cardUrl === correctCard) {
          this.onAnswer(true);
        } else {
          this.onAnswer(false);
        }
      });
    } else {
      questionArray.forEach((element) => {
        element.addEventListener(`change`, () => {
          if (questionOneArray.some(checked) && questionTwoArray.some(checked)) {
            const firstAnswerChecked = questionOneArray.filter((item) => item.checked);
            const secondAnswerChecked = questionTwoArray.filter((item) => item.checked);
            if (firstAnswerChecked[0].value === this.level.answers[0].type
              &&
              secondAnswerChecked[0].value === this.level.answers[1].type
            ) {
              this.onAnswer(true);
            } else {
              this.onAnswer(false);
            }
          }
        });
      });
    }
  }

  onAnswer(answer) {
    return answer;
  }

  onReturn() {

  }
}
