const initialState = {
  TIME: 30,
  LIVES: 3,
};

const gameConsts = {
  IS_GAME_SCREEN: true,
  MIN_ANSWERS: 10,
  CORRECT_ANSWER: 100,
  BONUS: 50,
};

const gameTypes = [`two-of-two`, `tinder-like`, `one-of-three`];

// const answerTiming = {
//   FAST_ANSWER: 10,
//   SLOW_ANSWER: 20
// };
//
// const answerTypes = {
//   NORMAL: `correct`,
//   FAST: `fast`,
//   SLOW: `slow`,
//   WRONG: `wrong`,
//   UNKNOWN: `unknown`
// };

export {initialState, gameConsts, gameTypes};
