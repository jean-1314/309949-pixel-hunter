import {GameConsts} from '../data/game-data';
import {mapAnswers} from './map-answers';

export const renderIngameStats = (answers) => {
  const gameResults = mapAnswers(answers);
  let item = gameResults.reduce((acc, currentValue) => acc + `<li class="stats__result stats__result--${currentValue}"></li>`, ``);

  if (gameResults.length < GameConsts.MIN_ANSWERS) {
    for (let i = 0; i < GameConsts.MIN_ANSWERS - answers.length; i++) {
      item += `<li class="stats__result stats__result--unknown"></li>`;
    }
  }

  return item;
};
