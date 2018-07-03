import {GameConsts} from '../data/game-data';

export const countScore = (answersNum, fast, slow, lives) => answersNum + (fast * GameConsts.BONUS) - (slow * GameConsts.BONUS) + (lives * GameConsts.BONUS);
