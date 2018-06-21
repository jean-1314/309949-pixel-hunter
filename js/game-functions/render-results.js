import {answerTypes, gameConsts} from '../data/game-data';
import {gameState, playerAnswers} from '../data/state';
import {alterAnswers} from './alter-answers';

let ingameStatsItem = `<li class="stats__result stats__result--${answerTypes.UNKNOWN}"></li>`;
let ingameStatsTemplate = ``;

export const renderResults = () => {
  const gameResults = alterAnswers(playerAnswers);
  if (playerAnswers.length === 0) {
    ingameStatsTemplate = ``;
    for (let i = 0; i < gameConsts.MIN_ANSWERS; i++) {
      ingameStatsTemplate += ingameStatsItem;
    }
  } else {
    const stats = document.querySelector(`ul.stats`);
    const ingameStatsList = document.querySelectorAll(`.stats__result`);
    ingameStatsList.forEach((item, index) => {
      if (index === gameResults.length - 1) {
        item.classList.remove(`stats__result--${answerTypes.UNKNOWN}`);
        item.classList.add(`stats__result--${gameResults[index]}`);
        ingameStatsTemplate = stats.innerHTML;
        gameState.results = ingameStatsTemplate;
      }
    });
  }
  return ingameStatsTemplate;
};
