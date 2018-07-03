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

const QuestionTypes = Object.freeze({
  PAINTING: `painting`,
  PHOTO: `photo`,
});

const AnswerTypes = Object.freeze({
  NORMAL: `correct`,
  FAST: `fast`,
  SLOW: `slow`,
  WRONG: `wrong`,
  UNKNOWN: `unknown`
});

const GameTypes = Object.freeze({
  TINDER_LIKE: `tinder-like`,
  TWO_OF_TWO: `two-of-two`,
  ONE_OF_THREE: `one-of-three`,
});

export {INITIAL_STATE, GameConsts, QuestionTypes, AnswerTypes, GameTypes};
