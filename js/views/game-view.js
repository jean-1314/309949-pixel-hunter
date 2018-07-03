import {renderGame} from '../game-functions/render-game';
import {inGameStats} from '../page-elements/ingame-stats';
import AbstractView from './abstract-view';
import footer from '../page-elements/footer';
import {GameTypes} from '../data/game-data';
import {handleGame} from '../game-functions/handle-game';

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
    switch (this.level.type) {
      case GameTypes.TINDER_LIKE:
        handleGame(GameTypes.TINDER_LIKE, this.model, this.element, this.level, this.onAnswer);
        break;
      case GameTypes.ONE_OF_THREE:
        handleGame(GameTypes.ONE_OF_THREE, this.model, this.element, this.level, this.onAnswer);
        break;
      case GameTypes.TWO_OF_TWO:
        handleGame(GameTypes.TWO_OF_TWO, this.model, this.element, this.level, this.onAnswer);
        break;
      default:
        throw new Error(`Unknown game type`);
    }
  }

  onAnswer(answer) {
    return answer;
  }
}
