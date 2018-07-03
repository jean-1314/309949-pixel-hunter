import {AnswerTypes, GameConsts} from '../data/game-data';

export const mapAnswers = (answers) => answers.map((item) => {
  if (item.correct) {
    if (item.time > GameConsts.FAST_ANSWER) {
      return AnswerTypes.FAST;
    } else if (item.time < GameConsts.SLOW_ANSWER) {
      return AnswerTypes.SLOW;
    }
    return AnswerTypes.NORMAL;
  }
  return AnswerTypes.WRONG;
});
