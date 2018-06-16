import {createElement, showScreen} from '../util';
import greetingElement from './greeting';
import footer from '../page-elements/footer';

const introTemplate = `
  <div id="main" class="central__content">
    <div id="intro" class="intro">
      <h1 class="intro__asterisk">*</h1>
      <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
    </div>
  </div>
`;

const introElement = createElement(`
  ${introTemplate}
  ${footer}
`);

const asterisk = introElement.querySelector(`.intro__asterisk`);

asterisk.addEventListener(`click`, () => showScreen(greetingElement));

export default introElement;
