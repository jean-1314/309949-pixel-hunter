const mainCentral = document.querySelector(`.central`);

const showScreen = (screen) => {
  mainCentral.innerHTML = ``;
  mainCentral.appendChild(screen);
};

const checked = (elem) => {
  return elem.checked;
};

export {showScreen, mainCentral, checked};
