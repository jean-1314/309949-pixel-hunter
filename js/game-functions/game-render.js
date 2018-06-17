import {gameState} from '../data/state';
import {getRandomArrayElement} from '../util';
import {gameTypes} from '../data/game-data';
import gameOneElement from '../screens/game-1';
import gameTwoElement from '../screens/game-2';
import gameThreeElement from '../screens/game-3';
import statsElement from '../screens/stats';

export const renderGame = () => {
  const randomGameType = getRandomArrayElement(gameTypes);
  const remainingAnswers = gameState.answersRemaining;
  gameState.currentGameType = randomGameType;
  let gameElement;

  if (remainingAnswers > 0) {
    switch (gameState.currentGameType) {
      case `two-of-two`:
        gameElement = gameOneElement;
        break;
      case `tinder-like`:
        gameElement = gameTwoElement;
        break;
      case `one-of-three`:
        gameElement = gameThreeElement;
        break;
      default:
        throw new Error(`Unknown game type`);
    }
    return gameElement;
  } else {
    return statsElement;
  }
};
