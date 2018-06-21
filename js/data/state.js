import {initialState} from './game-data';

export const gameState = {
  victory: initialState.VICTORY,
  lives: initialState.LIVES,
  time: initialState.TIME,
  slowAnswers: initialState.SLOW_ANSWERS,
  fastAnswers: initialState.FAST_ANSWERS,
  currentLevel: initialState.CURRENT_LEVEL,
  results: initialState.RESULTS,
};

export const playerAnswers = [];
