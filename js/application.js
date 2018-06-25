import {mainCentral, showScreen} from './util';
import GameModel from './data/game-model';
import IntroScreen from './presenters/intro-screen';
import GreetingScreen from './presenters/greeting-screen';
import RulesScreen from './presenters/rules-screen';
import GameScreen from './presenters/game-screen';
import StatsScreen from './presenters/stats-screen';
import ModalConfirmScreen from './presenters/modal-confirm-screen';
import ErrorView from './views/modal-error-view';

const checkStatus = (response) => {
  if (response.status >= 200 || response.status < 300) {
    return response;
  } else {
    throw new Error(`${response.status}: ${response.statusText}`);
  }
};
let gameData;
export default class Application {

  static start() {
    const introScreen = new IntroScreen();
    showScreen(introScreen.element);
    window.fetch(`https://es.dump.academy/pixel-hunter/questions`).
      then(checkStatus).
      then((response) => response.json()).
      then((data) => {
        gameData = data;
      }).
      then(() => Application.showGreeting()).
      catch(Application.showError);
  }

  static showGreeting() {
    const greetingScreen = new GreetingScreen();
    showScreen(greetingScreen.element);
  }

  static showRules() {
    const rulesScreen = new RulesScreen();
    showScreen(rulesScreen.element);
  }

  static showGame() {
    const gameScreen = new GameScreen(new GameModel(gameData));
    showScreen(gameScreen.element);
    gameScreen.start();
  }

  static showStats(state, answers) {
    const statsScreen = new StatsScreen(state, answers);
    showScreen(statsScreen.element);
  }

  static showModalConfirm() {
    const modalConfirm = new ModalConfirmScreen();
    mainCentral.appendChild(modalConfirm.element);
  }

  static showError(error) {
    const modalError = new ErrorView(error);
    mainCentral.appendChild(modalError.element);
  }
}
