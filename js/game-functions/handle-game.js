import {checked, description} from '../util';
import {debugGame} from './debug-game';
import {QuestionTypes, GameTypes} from '../data/game-data';

let questionType = ``;

export const handleGame = (gameType, model, element, level, onAnswer) => {
  const gameContent = element.querySelector(`.game__content`);
  if (model.debugMode) {
    debugGame(gameType, model, element);
  }
  switch (gameType) {
    case GameTypes.TINDER_LIKE:
      element.addEventListener(`change`, () => {
        const value = gameContent.querySelector(`input:checked`).value;
        onAnswer(value === level.answers[0].type);
      });
      break;
    case GameTypes.ONE_OF_THREE:
      gameContent.addEventListener(`click`, (event) => {
        const cardUrl = event.target.querySelector(`img`).getAttribute(`src`);
        questionType = level.question === description ? QuestionTypes.PAINTING : QuestionTypes.PHOTO;
        const correctCard = level.answers.find((answer) => answer.type === questionType).image.url;
        onAnswer(cardUrl === correctCard);
      });
      break;
    case GameTypes.TWO_OF_TWO:
      const questionArray = [...element.querySelectorAll(`[name*='question']`)];
      const questionOneArray = [...element.querySelectorAll(`[name='question1']`)];
      const questionTwoArray = [...element.querySelectorAll(`[name='question2']`)];
      questionArray.forEach((elem) => {
        elem.addEventListener(`change`, () => {
          if (questionOneArray.some(checked) && questionTwoArray.some(checked)) {
            const firstAnswerChecked = questionOneArray.filter((item) => item.checked);
            const secondAnswerChecked = questionTwoArray.filter((item) => item.checked);
            onAnswer(firstAnswerChecked[0].value === level.answers[0].type
              &&
              secondAnswerChecked[0].value === level.answers[1].type);
          }
        });
      });
      break;
    default:
      throw new Error(`Unknown game type`);
  }
};
