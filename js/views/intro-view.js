import footer from '../page-elements/footer';
import AbstractView from './abstract-view';
import {gameConsts} from '../data/game-data';

const enterKey = gameConsts.ENTER_KEY_CODE;

export default class IntroView extends AbstractView {
  get template() {
    return `
      <div id="main" class="central__content">
      <div id="intro" class="intro">
        <h1 class="intro__asterisk" tabindex="0">*</h1>
        <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
      </div>
    </div>
    ${footer}
    `;
  }

  bind() {
    const asterisk = this.element.querySelector(`.intro__asterisk`);

    asterisk.addEventListener(`click`, () => {
      this.onEvent();
    });

    asterisk.addEventListener(`keydown`, ({keyCode}) => {
      if (keyCode === enterKey) {
        this.onEvent();
      }
    });
  }

  onEvent() {

  }
}
