import {mainCentral} from '../util';

export const removeIntro = () => {
  const introWrapper = document.querySelector(`.intro__wrapper`);
  if (introWrapper) {
    const greetingWrapper = document.querySelector(`.greeting__wrapper`);
    mainCentral.removeChild(introWrapper);
    greetingWrapper.classList.remove(`greeting__wrapper`, `greeting__wrapper--fadein`);
  }
};
