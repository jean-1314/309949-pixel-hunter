const APP_ID = 22101985;

const mainCentral = document.querySelector(`.central`);

const description = `Найдите рисунок среди изображений`;

const showScreen = (screen, force = true) => {
  if (force) {
    mainCentral.innerHTML = ``;
  }
  mainCentral.appendChild(screen);
};

const showModal = (screen) => {
  document.body.appendChild(screen);
};

const checked = (elem) => elem.checked;

export {APP_ID, showScreen, showModal, mainCentral, checked, description};
