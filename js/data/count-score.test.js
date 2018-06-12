import countScore from './count-score.js';
import {assert} from 'chai';

const setPlayerAnswers = (answers, correct, slow, fast) => {
  const testAnswers = [];
  for (let i = 0; i < answers; i++) {
    testAnswers[i] = {
      correct: false,
      time: 0
    };
    if (correct > i) {
      testAnswers[i].correct = true;
      if (slow > i) {
        testAnswers[i].time = 29;
      } else if (fast > (i - slow)) {
        testAnswers[i].time = 5;
      } else {
        testAnswers[i].time = 15;
      }
    }
  }
  return testAnswers;
};


describe(`Calculate Score Function Test`, () => {

  it(`should return negative if fewer answers`, () => {
    const testAnswers = setPlayerAnswers(6, 0, 0, 0);
    assert.equal(countScore(testAnswers, 1), -1);
  });

  it(`should return 1150 if all answers are correct and neither slow nor fast`, () => {
    const testAnswers = setPlayerAnswers(10, 10, 0, 0);
    assert.equal(countScore(testAnswers, 3), 1150);
  });

  it(`should return 1050 if 9 answers are correct, 3 slow, 4 fast, 2 lives`, () => {
    const testAnswers = setPlayerAnswers(10, 9, 3, 4);
    assert.equal(countScore(testAnswers, 2), 1050);
  });

  it(`should return 850 if 8 answers are correct, 2 slow, 2 fast, 1 life`, () => {
    const testAnswers = setPlayerAnswers(10, 8, 2, 2);
    assert.equal(countScore(testAnswers, 1), 850);
  });

  it(`should return 1350 if all answers are correct, 3 slow, 7 fast, 3 lives`, () => {
    const testAnswers = setPlayerAnswers(10, 10, 3, 7);
    assert.equal(countScore(testAnswers, 3), 1350);
  });

});
