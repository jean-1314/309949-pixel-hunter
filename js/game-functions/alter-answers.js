import {answerTypes, gameConsts} from '../data/game-data';

export const alterAnswers = (answers) => {
  const score = answers.map((item) => {
    let answer = ``;
    if (item.correct) {
      if (item.time > gameConsts.FAST_ANSWER) {
        answer = answerTypes.FAST;
      } else if (item.time < gameConsts.SLOW_ANSWER) {
        answer = answerTypes.SLOW;
      } else {
        answer = answerTypes.NORMAL;
      }
    } else {
      answer = answerTypes.WRONG;
    }
    return answer;
  });
  return score;
};
