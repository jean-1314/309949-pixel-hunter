import {GameConsts} from '../data/game-data';

export const countScore = (answersNum, fast, slow, lives) => {
  const finalScore = answersNum + (fast * GameConsts.BONUS) - (slow * GameConsts.BONUS) + (lives * GameConsts.BONUS);
  return finalScore;
};
