import IntroView from './views/intro-view';
import GreetingView from './views/greeting-view';
import RulesView from './views/rules-view';
import {resetState} from './game-functions/reset-state';
import {showScreen} from './util';
import {gameState, playerAnswers} from './data/state';
import {updateState} from './game-functions/update-state';
import {renderResults} from './game-functions/render-results';
import {gameConsts} from './data/game-data';
import StatsView from './views/stats-view';
import GameView from './views/game-view';

let introScreen = new IntroView();
let greetingScreen = new GreetingView();
let rulesScreen = new RulesView();

showScreen(introScreen.element);

introScreen.onEvent = () => {
  showScreen(greetingScreen.element);
};

greetingScreen.onEvent = () => {
  showScreen(rulesScreen.element);
};

rulesScreen.onSubmit = () => {
  changeGameView();
};

rulesScreen.onReturn = () => {
  showScreen(greetingScreen.element);
};

const changeGameView = () => {
  let gameScreen = new GameView();
  showScreen(gameScreen.element);
  gameScreen.onAnswer = () => {
    showNextScreen(gameScreen.element);
  };
  gameScreen.onReturn = () => {
    resetState();
    showScreen(greetingScreen.element);
  };
};

export const showNextScreen = () => {
  let statsScreen = new StatsView(gameState, playerAnswers);
  playerAnswers.push(updateState(gameState.currentAnswerStatus));
  gameState.currentAnswerStatus = false;
  if (gameState.currentLevel < gameConsts.MIN_ANSWERS - 1 && gameState.lives > 0) {
    gameState.currentLevel++;
    changeGameView();
  } else {
    if (gameState.currentLevel === gameConsts.MIN_ANSWERS - 1 && gameState.lives > 0) {
      gameState.victory = true;
    }
    renderResults();
    showScreen(statsScreen.element);
    statsScreen.onReturn = () => {
      resetState();
      showScreen(greetingScreen.element);
    };
  }
};


