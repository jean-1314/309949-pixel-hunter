const INITIAL_STATE = Object.freeze({
  victory: false,
  time: 30,
  lives: 3,
  slowAnswers: 0,
  fastAnswers: 0,
  currentLevel: 0,
  currentAnswerStatus: false,
  results: ``,
});

const GameConsts = Object.freeze({
  MIN_ANSWERS: 10,
  CORRECT_ANSWER: 100,
  FAST_ANSWER: 20,
  SLOW_ANSWER: 10,
  BONUS: 50,
  UNIT: 1,
  FAIL: `FAIL`,
});

const QuestionTypes = {
  PAINTING: `painting`,
  PHOTO: `photo`,
};

const AnswerTypes = {
  NORMAL: `correct`,
  FAST: `fast`,
  SLOW: `slow`,
  WRONG: `wrong`,
  UNKNOWN: `unknown`
};

export {INITIAL_STATE, GameConsts, QuestionTypes, AnswerTypes};
