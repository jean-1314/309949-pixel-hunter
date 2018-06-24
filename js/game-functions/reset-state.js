import {initialState} from '../data/game-data';

export const resetState = () => {
  const state = {
    victory: initialState.VICTORY,
    lives: initialState.LIVES,
    time: initialState.TIME,
    slowAnswers: initialState.SLOW_ANSWERS,
    fastAnswers: initialState.FAST_ANSWERS,
    currentLevel: initialState.CURRENT_LEVEL,
    currentAnswerStatus: initialState.CURRENT_ANSWER_STATUS,
    results: initialState.RESULTS,
  };
  return state;
};
