import {answerTypes} from '../data/game-data';

export const alterAnswers = (answers) => {
  const score = answers.map((item) => {
    let answer = ``;
    if (item.correct) {
      if (item.time > 20) {
        answer = answerTypes.SLOW;
      } else if (item.time < 10) {
        answer = answerTypes.FAST;
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
