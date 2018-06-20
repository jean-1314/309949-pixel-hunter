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

const checked = (elem) => {
  return elem.checked;
};

export {showScreen, createElement, checked};
