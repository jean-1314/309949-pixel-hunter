const APP_ID = 22101985;

const mainCentral = document.querySelector(`.central`);

const showScreen = (screen) => {
  mainCentral.innerHTML = ``;
  mainCentral.appendChild(screen);
};

const checked = (elem) => {
  return elem.checked;
};

export {APP_ID, showScreen, mainCentral, checked};
