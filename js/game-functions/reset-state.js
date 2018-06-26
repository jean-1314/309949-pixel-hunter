import {INITIAL_STATE} from '../data/game-data';

export const resetState = () => {
  const state = Object.assign({}, INITIAL_STATE);
  return state;
};
