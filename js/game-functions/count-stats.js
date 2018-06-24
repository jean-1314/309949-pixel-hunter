import {gameConsts} from '../data/game-data';

export const countStats = (arr) => {
  let sum = 0;
  for (let i of arr) {
    sum += i.correct ? gameConsts.CORRECT_ANSWER : null;
  }
  return sum;
};
