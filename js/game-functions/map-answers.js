import {AnswerTypes, GameConsts} from '../data/game-data';

export const mapAnswers = (answers) => {
  return answers.map((item) => {
    let answer = ``;
    if (item.correct) {
      if (item.time > GameConsts.FAST_ANSWER) {
        answer = AnswerTypes.FAST;
      } else if (item.time < GameConsts.SLOW_ANSWER) {
        answer = AnswerTypes.SLOW;
      } else {
        answer = AnswerTypes.NORMAL;
      }
    } else {
      answer = AnswerTypes.WRONG;
    }
    return answer;
  });
};
