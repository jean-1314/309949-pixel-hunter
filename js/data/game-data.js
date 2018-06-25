const gameConsts = Object.freeze({
  MIN_ANSWERS: 10,
  CORRECT_ANSWER: 100,
  FAST_ANSWER: 20,
  SLOW_ANSWER: 10,
  BONUS: 50,
  UNIT: 1,
  FAIL: `FAIL`,
});

const initialState = Object.freeze({
  VICTORY: false,
  TIME: 30,
  LIVES: 3,
  SLOW_ANSWERS: 0,
  FAST_ANSWERS: 0,
  CURRENT_LEVEL: 0,
  CURRENT_ANSWER_STATUS: false,
  RESULTS: ``,
  IS_GAME_SCREEN: false,
});

const QuestionTypes = {
  PAINTING: `painting`,
  PHOTO: `photo`,
};

const answerTypes = {
  NORMAL: `correct`,
  FAST: `fast`,
  SLOW: `slow`,
  WRONG: `wrong`,
  UNKNOWN: `unknown`
};

export {initialState, gameConsts, QuestionTypes, answerTypes};
