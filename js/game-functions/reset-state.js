import {gameState} from '../data/state';
import {initialState} from '../data/game-data';

export const resetState = () => {
  gameState.victory = initialState.VICTORY;
  gameState.lives = initialState.LIVES;
  gameState.time = initialState.TIME;
  gameState.gameScore = initialState.GAME_SCORE;
  gameState.slowAnswers = initialState.SLOW_ANSWERS;
  gameState.fastAnswers = initialState.FAST_ANSWERS;
  gameState.answers = [];
  gameState.answersRemaining = initialState.ANSWERS_REMAINING;
  gameState.currentGameType = initialState.CURRENT_GAME_TYPE;
  gameState.currentLevel = initialState.CURRENT_LEVEL;
  gameState.results = initialState.RESULTS;
};
