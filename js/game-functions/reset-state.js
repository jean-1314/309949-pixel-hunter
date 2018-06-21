import {gameState, playerAnswers} from '../data/state';
import {initialState} from '../data/game-data';

export const resetState = () => {
  playerAnswers.length = 0;
  gameState.victory = initialState.VICTORY;
  gameState.lives = initialState.LIVES;
  gameState.time = initialState.TIME;
  gameState.slowAnswers = initialState.SLOW_ANSWERS;
  gameState.fastAnswers = initialState.FAST_ANSWERS;
  gameState.currentLevel = initialState.CURRENT_LEVEL;
  gameState.results = initialState.RESULTS;
};
