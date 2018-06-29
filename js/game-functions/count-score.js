import {GameConsts} from '../data/game-data';

export const countScore = (answersNum, fast, slow, lives) => {
  return answersNum + (fast * GameConsts.BONUS) - (slow * GameConsts.BONUS) + (lives * GameConsts.BONUS);
};
