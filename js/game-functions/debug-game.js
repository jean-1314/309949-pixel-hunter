import {GameConsts, QuestionTypes, GameTypes} from '../data/game-data';
import {description} from '../util';

export const debugGame = (gameType, model, element) => {
  const level = model.data[model.state.currentLevel];
  switch (gameType) {
    case (GameTypes.TINDER_LIKE):
      const correctAnswer = element.querySelector(`.game__answer--${level.answers[0].type}`);
      correctAnswer.classList.add(`game__answer--correct`);
      break;
    case (GameTypes.TWO_OF_TWO):
      const correctAnswerOne = element.querySelector(`.game__option:first-child .game__answer--${level.answers[0].type}`);
      const correctAnswerTwo = element.querySelector(`.game__option:nth-child(2) .game__answer--${level.answers[1].type}`);
      correctAnswerOne.classList.add(`game__answer--correct`);
      correctAnswerTwo.classList.add(`game__answer--correct`);
      break;
    case (GameTypes.ONE_OF_THREE):
      const questions = [];
      const answers = level.answers;
      answers.forEach((answer) => questions.push(answer.type));
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
