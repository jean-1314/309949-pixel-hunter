'use strict';
(function () {
  const Arrows = {
    LEFT: 37,
    RIGHT: 39
  };

  const mainCentral = document.querySelector(`.central`);

  const templateScreens = [`#greeting`, `#rules`, `#game-1`, `#game-2`, `#game-3`, `#stats`];

  const gameScreens = templateScreens.map((template) => document.querySelector(template));

  const screensCount = gameScreens.length;
  let counter = 1;

  const arrowsTemplate = () => {
    return `
    <div class="arrows__wrap">
      <style>
        .arrows__wrap {
          position: absolute;
          top: 95px;
          left: 50%;
          margin-left: -56px;
        }
        .arrows__btn {
          background: none;
          border: 2px solid black;
          padding: 5px 20px;
        }
      </style>
      <button id="leftArrow" class="arrows__btn"><-</button>
      <button id="rightArrow" class="arrows__btn">-></button>
    </div>
  `;
  };

  const createElement = (template) => {
    const outer = document.createElement(`div`);
    outer.innerHTML = template.innerHTML;
    return outer;
  };

  const changeView = (view) => {
    mainCentral.innerHTML = ``;
    mainCentral.appendChild(view);
  };

  const showScreen = (screen) => {
    const newElement = createElement(screen);
    changeView(newElement);
  };

  const showNextScreen = () => {
    if (screensCount !== counter) {
      showScreen(gameScreens[counter]);
      counter++;
    }
  };

  const showPrevScreen = () => {
    counter--;
    if (counter >= 0 && counter <= screensCount) {
      if (counter === 0) {
        counter = 1;
      }
      showScreen(gameScreens[counter - 1]);
    }
  };

  document.addEventListener(`keydown`, (evt) => {
    if (counter === 0) {
      counter++;
    }

    if (evt.keyCode === Arrows.RIGHT) {
      showNextScreen();
    }

    if (evt.keyCode === Arrows.LEFT) {
      showPrevScreen();
    }
  });

  const createArrowsElement = (template) => {
    const outer = document.createElement(`template`);
    outer.innerHTML = template;
    return outer.content;
  };
  document.body.appendChild(createArrowsElement(arrowsTemplate()));

  const leftBtn = document.querySelector(`#leftArrow`);
  const rightBtn = document.querySelector(`#rightArrow`);

  if (leftBtn && rightBtn) {
    leftBtn.addEventListener(`click`, () => {
      showPrevScreen();
    });

    rightBtn.addEventListener(`click`, () => {
      showNextScreen();
    });
  }

  showScreen(gameScreens[0]);
}());
