import {gameState} from '../data/state';
import {gameConsts} from '../data/game-data';

export const updateState = (isCorrect) => {
  let answer = {};
  if (isCorrect) {
    answer = {
      correct: true,
      time: 15,
    };
    if (answer.time < gameConsts.FAST_ANSWER) {
      ++gameState.fastAnswers;
    }
    if (answer.time > gameConsts.SLOW_ANSWER) {
      ++gameState.slowAnswers;
    }
  } else {
    --gameState.lives;
    answer = {
      correct: false,
    };
  }
  return answer;
};
