import {GameConsts} from '../data/game-data';

export const countStats = (arr) => {
  let sum = 0;
  for (const i of arr) {
    sum += i.correct ? GameConsts.CORRECT_ANSWER : null;
  }
  return sum;
};
