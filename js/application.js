import {mainCentral, showScreen} from './util';
import GameModel from './data/game-model';
import IntroScreen from './presenters/intro-screen';
import GreetingScreen from './presenters/greeting-screen';
import RulesScreen from './presenters/rules-screen';
import GameScreen from './presenters/game-screen';
import StatsScreen from './presenters/stats-screen';
import ModalConfirmScreen from './presenters/modal-confirm-screen';
import ErrorView from './views/modal-error-view';
import Loader from './loader';
import ScoreboardView from './views/scoreboard-view';

const TWO_SECONDS = 2000;
let gameData;

const removeIntroScreen = () => {
  const introWrapper = document.querySelector(`.intro__wrapper`);
  if (introWrapper) {
    const greetingWrapper = document.querySelector(`.greeting__wrapper`);
    mainCentral.removeChild(introWrapper);
    greetingWrapper.classList.remove(`greeting__wrapper`, `greeting__wrapper--fadein`);
  }
};

export default class Application {

  static start() {
    const introScreen = new IntroScreen();
    mainCentral.appendChild(introScreen.element);
    Loader.loadData().
      then((data) => {
        gameData = data;
      })
      .then(() => Loader.preloadImages(gameData))
      .catch(Application.showError);
  }

  static showInitialGreeting() {
    const greetingScreen = new GreetingScreen();
    const intro = document.querySelector(`.intro__wrapper`);
    mainCentral.appendChild(greetingScreen.element);
    greetingScreen.element.classList.add(`greeting__wrapper--fadein`);
    intro.classList.add(`intro__wrapper--fadeout`);
    setTimeout(removeIntroScreen, TWO_SECONDS);
  }

  static showGreeting() {
    const greetingScreen = new GreetingScreen();
    showScreen(greetingScreen.element);
    greetingScreen.element.classList.remove(`greeting__wrapper`);
  }

  static showRules() {
    const rulesScreen = new RulesScreen();
    showScreen(rulesScreen.element);
  }

  static showGame(name) {
    const gameScreen = new GameScreen(new GameModel(name, gameData));
    showScreen(gameScreen.element);
    gameScreen.start();
  }

  static showStats(state, answers, name) {
    const statsScreen = new StatsScreen(state, answers);
    showScreen(statsScreen.element);
    const playerName = name;
    const scoreBoard = new ScoreboardView(name);
    const container = document.querySelector(`.result`);
    container.appendChild(scoreBoard.element);
    Loader.saveResults(state, answers, playerName)
      .then(() => Loader.loadResults(playerName))
      .then((data) => scoreBoard.showScore(data))
      .catch(Application.showError);
  }

  static showModalConfirm(model) {
    const modalConfirm = new ModalConfirmScreen(model);
    mainCentral.appendChild(modalConfirm.element);
  }

  static showError(error) {
    const modalError = new ErrorView(error);
    mainCentral.appendChild(modalError.element);
  }
}
