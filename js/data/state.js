import {initialState, gameConsts} from './game-data';

export const gameState = {
  victory: false,
  lives: initialState.LIVES,
  time: initialState.TIME,
  gameScore: 0,
  slowAnswers: 0,
  fastAnswers: 0,
  answers: Array(gameConsts.MIN_ANSWERS).fill(`unknown`)
};
