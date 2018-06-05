import countScore from './count-score.js';
import {assert} from 'chai';

const PLAYER_ANSWERS = [
  {
    answer: `incorrect`,
    time: 15
  },
  {
    answer: `correct`,
    time: 15
  },
  {
    answer: `correct`,
    time: 8
  },
  {
    answer: `incorrect`,
    time: 15
  },
  {
    answer: `correct`,
    time: 5
  },
  {
    answer: `correct`,
    time: 26
  },
  {
    answer: `incorrect`,
    time: 3
  },
  {
    answer: `correct`,
    time: 26
  },
  {
    answer: `incorrect`,
    time: 1
  },
  {
    answer: `correct`,
    time: 26
  }
];

let playerLives = 1;


describe(`Calculate Score Function Test`, () => {

  it(`should return negative if fewer answers`, () => {
    assert(countScore(PLAYER_ANSWERS, playerLives) === -1);
  });

  it(`should return 1150 if all answers are correct and neither slow nor fast`, () => {
    assert(countScore(PLAYER_ANSWERS, playerLives) === 1150);
  });

  it(`should return 700 if 4 answers are incorrect, 3 slow, 4 fast, 1 life`, () => {
    assert(countScore(PLAYER_ANSWERS, playerLives) === 700);
  });

});
