const mainCentral = document.querySelector(`.central`);

const createElement = (template) => {
  const outer = document.createElement(`div`);
  outer.innerHTML = template;
  return outer;
};

const showScreen = (screen) => {
  mainCentral.innerHTML = ``;
  mainCentral.appendChild(screen);
};

const uncheckRadioBtn = (buttons) => {
  buttons.forEach((button) => {
    button.checked = false;
  });
};

const getRandomArrayElement = (arr) => arr[Math.floor(Math.random() * arr.length)];

export {showScreen, createElement, uncheckRadioBtn, getRandomArrayElement};
