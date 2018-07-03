import footer from '../page-elements/footer';
import AbstractView from './abstract-view';

export default class IntroView extends AbstractView {
  get template() {
    return `
      <div id="main" class="central__content">
      <div id="intro" class="intro">
        <h1 class="intro__asterisk intro__asterisk--rotate">*</h1>
        <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
      </div>
    </div>
    ${footer}
    `;
  }

  bind() {
    const asterisk = this.element.querySelector(`.intro__asterisk`);
    asterisk.addEventListener(`click`, () => this.onEvent());
  }

  onEvent() {

  }
}
