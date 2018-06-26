import AbstractView from './abstract-view';
import {renderStats} from '../game-functions/render-stats';

export default class ScoreboardView extends AbstractView {
  get template() {
    return `
      <div class="scoreboard">
        <span>Загружаем результаты...</span>
      </div>
    `;
  }

  bind() {
    this._container = this.element.querySelector(`.scoreboard`);
  }

  emptyContainer() {
    this._container.innerHTML = ``;
  }

  showScore(results) {
    this.emptyContainer();
    if (results.length > 1) {
      results.pop();
      results.reverse();
      this._container.innerHTML = `
        ${results.map((result, index) => renderStats(result.state, result.answers, index + 2)).join(``)}
      `;
    }
  }
}
