import {createElement, showScreen} from '../util';
import greetingElement from './greeting';
import {header} from "../page-elements/header";
import footer from '../page-elements/footer';
import {gameState} from '../data/state';
import {renderResults} from '../game-functions/render-results';
import {countStats, countScore} from '../game-functions/count-stats';
import {gameConsts} from '../data/game-data';
import {resetState} from '../game-functions/reset-state';

const renderStatsTemplate = () => {
  renderResults();
  return `
    <div class="result">
      <h1>${gameState.victory ? `Победа!` : `Поражение!`}</h1>
      <table class="result__table">
        <tr>
          <td class="result__number">1.</td>
          <td colspan="2">
            <ul class="stats">
              ${gameState.results}
            </ul>
          </td>
          <td class="result__points">
          ${gameState.victory ? `×&nbsp;${gameConsts.CORRECT_ANSWER}` : ``}
          </td>
          <td class="result__total">${gameState.victory ? countStats(gameState.answers) : gameConsts.FAIL}</td>
        </tr>
        ${gameState.fastAnswers ? `<tr>
          <td></td>
          <td class="result__extra">Бонус за скорость:</td>
          <td class="result__extra">${gameState.fastAnswers}&nbsp;<span class="stats__result stats__result--fast"></span></td>
          <td class="result__points">×&nbsp;${gameConsts.BONUS}</td>
          <td class="result__total">${gameState.fastAnswers * gameConsts.BONUS}</td>
        </tr>` : ``}
        ${gameState.victory ? `
          <tr>
          <td></td>
          <td class="result__extra">Бонус за жизни:</td>
          <td class="result__extra">${gameState.lives}&nbsp;<span class="stats__result stats__result--alive"></span></td>
          <td class="result__points">×&nbsp;${gameConsts.BONUS}</td>
          <td class="result__total">${gameState.lives * gameConsts.BONUS}</td>
        </tr>
        ` : ``}
        ${gameState.slowAnswers ? `
          <tr>
          <td></td>
          <td class="result__extra">Штраф за медлительность:</td>
          <td class="result__extra">${gameState.slowAnswers}&nbsp;<span class="stats__result stats__result--slow"></span></td>
          <td class="result__points">×&nbsp;${gameConsts.BONUS}</td>
          <td class="result__total">-${gameState.slowAnswers * gameConsts.BONUS}</td>
        </tr>
        ` : ``}
        ${gameState.victory ? `
          <tr>
          <td colspan="5" class="result__total result__total--final">${countScore(countStats(gameState.answers), gameState.fastAnswers, gameState.slowAnswers, gameState.lives)}</td>
        </tr>
        ` : ``}
      </table>
      <table class="result__table">
        <tr>
          <td class="result__number">2.</td>
          <td>
            <ul class="stats">
              <li class="stats__result stats__result--wrong"></li>
              <li class="stats__result stats__result--slow"></li>
              <li class="stats__result stats__result--fast"></li>
              <li class="stats__result stats__result--correct"></li>
              <li class="stats__result stats__result--wrong"></li>
              <li class="stats__result stats__result--unknown"></li>
              <li class="stats__result stats__result--slow"></li>
              <li class="stats__result stats__result--wrong"></li>
              <li class="stats__result stats__result--fast"></li>
              <li class="stats__result stats__result--wrong"></li>
            </ul>
          </td>
          <td class="result__total"></td>
          <td class="result__total  result__total--final">fail</td>
        </tr>
      </table>
      <table class="result__table">
        <tr>
          <td class="result__number">3.</td>
          <td colspan="2">
            <ul class="stats">
              <li class="stats__result stats__result--wrong"></li>
              <li class="stats__result stats__result--slow"></li>
              <li class="stats__result stats__result--fast"></li>
              <li class="stats__result stats__result--correct"></li>
              <li class="stats__result stats__result--wrong"></li>
              <li class="stats__result stats__result--unknown"></li>
              <li class="stats__result stats__result--slow"></li>
              <li class="stats__result stats__result--unknown"></li>
              <li class="stats__result stats__result--fast"></li>
              <li class="stats__result stats__result--unknown"></li>
            </ul>
          </td>
          <td class="result__points">×&nbsp;100</td>
          <td class="result__total">900</td>
        </tr>
        <tr>
          <td></td>
          <td class="result__extra">Бонус за жизни:</td>
          <td class="result__extra">2&nbsp;<span class="stats__result stats__result--alive"></span></td>
          <td class="result__points">×&nbsp;50</td>
          <td class="result__total">100</td>
        </tr>
        <tr>
          <td colspan="5" class="result__total  result__total--final">950</td>
        </tr>
      </table>
    </div>
  `;
};

const renderStatsElement = () => {
  const renderedStats = createElement(`
    ${header(false)}
    ${renderStatsTemplate()}
    ${footer}
  `);

  const returnBtn = renderedStats.querySelector(`.back`);
  if (returnBtn) {
    returnBtn.addEventListener(`click`, () => {
      resetState();
      showScreen(greetingElement);
    });
  }

  return (renderedStats);
};

export default renderStatsElement;
