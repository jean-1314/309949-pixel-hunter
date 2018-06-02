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

export {showScreen, createElement, uncheckRadioBtn};
