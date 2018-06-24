import {mainCentral, showScreen} from './util';
import GameModel from './data/game-model';
import IntroScreen from './presenters/intro-screen';
import GreetingScreen from './presenters/greeting-screen';
import RulesScreen from './presenters/rules-screen';
import GameScreen from './presenters/game-screen';
import StatsScreen from './presenters/stats-screen';
import ModalConfirmScreen from './presenters/modal-confirm-screen';

export default class Application {
  static showIntro() {
    const introScreen = new IntroScreen();
    showScreen(introScreen.element);
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
    const gameScreen = new GameScreen(new GameModel());
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
}
