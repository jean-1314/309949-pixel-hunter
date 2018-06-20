import {initialState} from './game-data';

export const gameState = {
  victory: initialState.VICTORY,
  lives: initialState.LIVES,
  time: initialState.TIME,
  gameScore: initialState.GAME_SCORE,
  slowAnswers: initialState.SLOW_ANSWERS,
  fastAnswers: initialState.FAST_ANSWERS,
  answers: [],
  answersRemaining: initialState.ANSWERS_REMAINING,
  currentGameType: initialState.CURRENT_GAME_TYPE,
  currentLevel: initialState.CURRENT_LEVEL,
  results: initialState.RESULTS,
};
