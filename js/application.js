import {showScreen, showModal} from './util';
import GameModel from './data/game-model';
import IntroScreen from './presenters/intro-screen';
import GreetingScreen from './presenters/greeting-screen';
import RulesScreen from './presenters/rules-screen';
import GameScreen from './presenters/game-screen';
import StatsScreen from './presenters/stats-screen';
import ModalConfirmScreen from './presenters/modal-confirm-screen';
import ErrorView from './views/modal-error-view';
import Loader from './loader';
import {removeIntro} from './game-functions/remove-intro';

const TWO_SECONDS = 2000;
let gameData;

export default class Application {

  static start() {
    const introScreen = new IntroScreen();
    showScreen(introScreen.element, false);
    Loader.loadData().
      then((data) => {
        gameData = data;
        return data;
      })
      .then(Loader.preloadImages)
      .then(introScreen.addFadeout)
      .then(Application.showInitialGreeting)
      .catch(Application.showError);
  }

  static showInitialGreeting() {
    const greetingScreen = new GreetingScreen();
    showScreen(greetingScreen.element, false);
    greetingScreen.addFadein();
    setTimeout(removeIntro, TWO_SECONDS);
  }

  static showGreeting() {
    const greetingScreen = new GreetingScreen();
    showScreen(greetingScreen.element);
    greetingScreen.removeWrapper();
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
    statsScreen.addScoreboard();
    Loader.saveResults(state, answers, playerName)
      .then(() => Loader.loadResults(playerName))
      .then((data) => statsScreen.showScore(data))
      .catch(Application.showError);
  }

  static showModalConfirm(model) {
    const modalConfirm = new ModalConfirmScreen(model);
    showModal(modalConfirm.element);
  }

  static showError(error) {
    const modalError = new ErrorView(error);
    showModal(modalError.element);
  }
}
