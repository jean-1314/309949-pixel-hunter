import {GameConsts} from '../data/game-data';
import {alterAnswers} from './alter-answers';

export const renderIngameStats = (answers) => {
  const gameResults = alterAnswers(answers);
  let item = gameResults.reduce((acc, currentValue) => {
    return acc + `<li class="stats__result stats__result--${currentValue}"></li>`;
  }, ``);

  if (gameResults.length < GameConsts.MIN_ANSWERS) {
    for (let i = 0; i < GameConsts.MIN_ANSWERS - answers.length; i++) {
      item += `<li class="stats__result stats__result--unknown"></li>`;
    }
  }

  return item;
};
