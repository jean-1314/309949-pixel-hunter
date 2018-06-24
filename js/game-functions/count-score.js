import {gameConsts} from '../data/game-data';

export const countScore = (answersNum, fast, slow, lives) => {
  const finalScore = answersNum + (fast * gameConsts.BONUS) - (slow * gameConsts.BONUS) + (lives * gameConsts.BONUS);
  return finalScore;
};
