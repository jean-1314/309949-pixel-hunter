import {AnswerTypes, GameConsts} from '../data/game-data';
import {alterAnswers} from './alter-answers';

let ingameStatsItem = `<li class="stats__result stats__result--${AnswerTypes.UNKNOWN}"></li>`;
let ingameStatsTemplate = ``;

export const renderResults = (state, answers) => {
  const gameResults = alterAnswers(answers);
  if (answers.length === 0) {
    ingameStatsTemplate = ``;
    for (let i = 0; i < GameConsts.MIN_ANSWERS; i++) {
      ingameStatsTemplate += ingameStatsItem;
    }
  } else {
    const stats = document.querySelector(`ul.stats`);
    const ingameStatsList = document.querySelectorAll(`.stats__result`);
    ingameStatsList.forEach((item, index) => {
      if (index === gameResults.length - 1) {
        item.classList.remove(`stats__result--${AnswerTypes.UNKNOWN}`);
        item.classList.add(`stats__result--${gameResults[index]}`);
        ingameStatsTemplate = stats.innerHTML;
        state.results = ingameStatsTemplate;
      }
    });
  }
  return ingameStatsTemplate;
};
