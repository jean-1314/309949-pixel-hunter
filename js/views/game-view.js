import {checked} from '../util';
import {renderGame} from '../game-functions/render-game';
import {inGameStats} from '../page-elements/ingame-stats';
import AbstractView from './abstract-view';
import footer from '../page-elements/footer';
import {GameConsts, QuestionTypes} from '../data/game-data';

const description = `Найдите рисунок среди изображений`;
let questionType = ``;

const debugGame = (gameType, model, element) => {
  const level = model.data[model.state.currentLevel];

  switch (gameType) {
    case (`tinder-like`):
      const correctAnswer = element.querySelector(`.game__answer--${level.answers[0].type}`);
      correctAnswer.classList.add(`game__answer--correct`);
      break;
    case (`two-of-two`):
      const correctAnswerOne = element.querySelector(`.game__option:first-child .game__answer--${level.answers[0].type}`);
      const correctAnswerTwo = element.querySelector(`.game__option:nth-child(2) .game__answer--${level.answers[1].type}`);
      correctAnswerOne.classList.add(`game__answer--correct`);
      correctAnswerTwo.classList.add(`game__answer--correct`);
      break;
    case (`one-of-three`):
      const questions = [];
      const answers = level.answers;
      answers.forEach((answer) => {
        questions.push(answer.type);
      });
      const type = description === level.question ? QuestionTypes.PAINTING : QuestionTypes.PHOTO;
      const findCorrectElement = (el, i) => {
        if (el === type) {
          return i;
        }
        return null;
      };
      const index = questions.findIndex(findCorrectElement);
      const correctOption = element.querySelector(`.game__option:nth-child(${index + GameConsts.UNIT})`);
      correctOption.classList.add(`game__option--correct`);
      break;
    default:
      throw new Error(`Unknown game type`);
  }
};

export default class GameView extends AbstractView {

  constructor(model) {
    super();
    this.model = model;
    this.level = model.getLevel();
    this.answers = model.answers;
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
      if (this.model.debugMode) {
        debugGame(`tinder-like`, this.model, this.element);
      }
      this.element.addEventListener(`change`, () => {
        const value = gameContent.querySelector(`input:checked`).value;
        if (value === this.level.answers[0].type) {
          this.onAnswer(true);
        } else {
          this.onAnswer(false);
        }
      });
    } else if (gameContent.classList.contains(`game__content--triple`)) {
      if (this.model.debugMode) {
        debugGame(`one-of-three`, this.model, this.element);
      }
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
      if (this.model.debugMode) {
        debugGame(`two-of-two`, this.model, this.element);
      }
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
