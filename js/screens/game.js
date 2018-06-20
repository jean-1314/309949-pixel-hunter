import {gameConsts, questions} from '../data/game-data';
import {gameState} from '../data/state';
import {createElement, showScreen, checked} from '../util';
import greetingElement from './greeting';
import renderStatsElement from './stats';
import {renderCurrentGame} from '../game-functions/render-game';

let answer;
let correct = false;

const updateState = (isCorrect) => {
  if (isCorrect) {
    answer = {
      correct: true,
      time: 15,
    };
    if (answer.time < gameConsts.FAST_ANSWER) {
      ++gameState.fastAnswers;
    }
    if (answer.time > gameConsts.SLOW_ANSWER) {
      ++gameState.slowAnswers;
    }
  } else {
    --gameState.lives;
    answer = {
      correct: false,
    };
  }
};

export const initGame = () => {
  const level = questions[gameState.currentLevel];

  const el = createElement(renderCurrentGame(level));
  showScreen(el);

  const returnBtn = el.querySelector(`.back`);
  const gameContent = el.querySelector(`.game__content`);
  const questionArray = [...el.querySelectorAll(`[name*='question']`)];
  const questionOneArray = [...el.querySelectorAll(`[name='question1']`)];
  const questionTwoArray = [...el.querySelectorAll(`[name='question2']`)];

  returnBtn.addEventListener(`click`, () => showScreen(greetingElement));

  const showNextScreen = () => {
    if (gameState.currentLevel < gameConsts.MIN_ANSWERS - 1 && gameState.lives > 0) {
      gameState.currentLevel++;
      initGame();
    } else {
      if (gameState.currentLevel === gameConsts.MIN_ANSWERS - 1 && gameState.lives > 0) {
        gameState.victory = true;
      }
      showScreen(renderStatsElement());
    }
  };

  if (gameContent.classList.contains(`game__content--wide`)) {
    el.addEventListener(`input`, () => {
      const value = gameContent.querySelector(`input:checked`).value;
      if (value === level.options[0].answer) {
        correct = true;
        updateState(correct);
      } else {
        updateState();
      }
      gameState.answers.push(answer);
      showNextScreen();
    });
  } else if (gameContent.classList.contains(`game__content--triple`)) {
    gameContent.addEventListener(`click`, (event) => {
      const cardUrl = event.target.querySelector(`img`).getAttribute(`src`);
      const correctCard = level.options.find((question) => question.answer === `paint`).img;
      if (cardUrl === correctCard) {
        correct = true;
        updateState(correct);
      } else {
        updateState();
      }
      gameState.answers.push(answer);
      showNextScreen();
    });
  } else {
    questionArray.forEach((element) => {
      element.addEventListener(`change`, () => {
        if (questionOneArray.some(checked) && questionTwoArray.some(checked)) {
          const firstAnswerChecked = questionOneArray.filter((item) => item.checked);
          const secondAnswerChecked = questionTwoArray.filter((item) => item.checked);
          if (firstAnswerChecked[0].value === level.options[0].answer
              &&
            secondAnswerChecked[0].value === level.options[1].answer
          ) {
            correct = true;
            updateState(correct);
          } else {
            updateState();
          }
          gameState.answers.push(answer);
          showNextScreen();
        }
      });
    });
  }
};
