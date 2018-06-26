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

let gameData;
export default class Application {

  static start() {
    const introScreen = new IntroScreen();
    showScreen(introScreen.element);
    Loader.loadData().
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

  static showGame(name) {
    const gameScreen = new GameScreen(new GameModel(name, gameData));
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
