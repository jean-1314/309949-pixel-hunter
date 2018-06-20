import {temporaryImages} from './temp-images';

const gameConsts = Object.freeze({
  IS_GAME_SCREEN: true,
  MIN_ANSWERS: 10,
  CORRECT_ANSWER: 100,
  FAST_ANSWER: 10,
  SLOW_ANSWER: 20,
  BONUS: 50,
  UNIT: 1,
  FAIL: `FAIL`,
});

const initialState = Object.freeze({
  VICTORY: false,
  TIME: 30,
  LIVES: 3,
  GAME_SCORE: 0,
  SLOW_ANSWERS: 0,
  FAST_ANSWERS: 0,
  ANSWERS: [],
  ANSWERS_REMAINING: gameConsts.MIN_ANSWERS,
  CURRENT_GAME_TYPE: ``,
  CURRENT_LEVEL: 0,
  RESULTS: ``,
});

const questions = [
  {
    type: `tinder-like`,
    text: `Угадайте, фото или рисунок?`,
    options: [
      {
        img: temporaryImages.paintings[0],
        answer: `paint`
      },
    ]
  },
  {
    type: `two-of-two`,
    text: `Угадайте для кажого изображения: фото или рисунок?`,
    options: [
      {
        img: temporaryImages.paintings[1],
        answer: `paint`
      },
      {
        img: temporaryImages.photos[0],
        answer: `photo`
      },
    ]
  },
  {
    type: `one-of-three`,
    text: `Найдите рисунок среди изображений.`,
    options: [
      {
        img: temporaryImages.paintings[2],
        answer: `paint`
      },
      {
        img: temporaryImages.photos[1],
        answer: `photo`
      },
      {
        img: temporaryImages.photos[2],
        answer: `photo`
      },
    ]
  },
  {
    type: `tinder-like`,
    text: `Угадайте, фото или рисунок?`,
    options: [
      {
        img: temporaryImages.photos[0],
        answer: `photo`
      },
    ]
  },
  {
    type: `two-of-two`,
    text: `Угадайте для кажого изображения: фото или рисунок?`,
    options: [
      {
        img: temporaryImages.photos[1],
        answer: `photo`
      },
      {
        img: temporaryImages.paintings[0],
        answer: `paint`
      },
    ]
  },
  {
    type: `one-of-three`,
    text: `Найдите рисунок среди изображений.`,
    options: [
      {
        img: temporaryImages.photos[2],
        answer: `photo`
      },
      {
        img: temporaryImages.paintings[1],
        answer: `paint`
      },
      {
        img: temporaryImages.photos[0],
        answer: `photo`
      },
    ]
  },
  {
    type: `tinder-like`,
    text: `Угадайте, фото или рисунок?`,
    options: [
      {
        img: temporaryImages.paintings[2],
        answer: `paint`
      },
    ]
  },
  {
    type: `two-of-two`,
    text: `Угадайте для кажого изображения: фото или рисунок?`,
    options: [
      {
        img: temporaryImages.paintings[0],
        answer: `paint`
      },
      {
        img: temporaryImages.photos[1],
        answer: `photo`
      },
    ]
  },
  {
    type: `one-of-three`,
    text: `Найдите рисунок среди изображений.`,
    options: [
      {
        img: temporaryImages.photos[2],
        answer: `photo`
      },
      {
        img: temporaryImages.photos[0],
        answer: `photo`
      },
      {
        img: temporaryImages.paintings[1],
        answer: `paint`
      },
    ]
  },
  {
    type: `tinder-like`,
    text: `Угадайте, фото или рисунок?`,
    options: [
      {
        img: temporaryImages.photos[2],
        answer: `photo`
      },
    ]
  },
];

const answerTypes = {
  NORMAL: `correct`,
  FAST: `fast`,
  SLOW: `slow`,
  WRONG: `wrong`,
  UNKNOWN: `unknown`
};

export {initialState, gameConsts, questions, answerTypes};
