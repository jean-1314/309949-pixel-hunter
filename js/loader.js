import Application from './application';

const SERVER_URL = `https://es.dump.academy/pixel-hunter`;
const DEFAULT_NAME = `YetAnotherDefaultName`;
const APP_ID = 22101985;

const checkStatus = (response) => {
  if (response.status >= 200 || response.status < 300) {
    return response;
  } else {
    throw new Error(`${response.status}: ${response.statusText}`);
  }
};

const toJSON = (res) => res.json();

export default class Loader {
  static loadData() {
    return fetch(`${SERVER_URL}/questions`).then(checkStatus).then(toJSON);
  }

  static saveResults(state, data, name = DEFAULT_NAME) {
    data = Object.assign({name},
        {
          answers: data,
          state,
        });
    const requestSettings = {
      body: JSON.stringify(data),
      headers: {
        'Content-Type': `application/json`
      },
      method: `POST`,
    };
    return fetch(`${SERVER_URL}/stats/${APP_ID}-${name}`, requestSettings).then(checkStatus);
  }

  static loadResults(name = DEFAULT_NAME) {
    return fetch(`${SERVER_URL}/stats/${APP_ID}-${name}`).then(checkStatus).then(toJSON);
  }

  static preloadImages(data) {
    const imageArray = [];
    const successArray = [];
    for (let item of data) {
      item.answers.forEach((answer) => {
        imageArray.push(answer.image.url);
      });
    }
    const preloadImage = (url) => {
      const asterisk = document.querySelector(`.intro__asterisk`);
      asterisk.classList.add(`intro__asterisk--rotate`);
      const image = new Image();
      image.src = url;
      image.onload = () => {
        successArray.push(``);
        if (imageArray.length === successArray.length) {
          asterisk.classList.remove(`intro__asterisk--rotate`);
          Application.showInitialGreeting();
        }
      };

    };
    for (let imageUrl of imageArray) {
      preloadImage(imageUrl);
    }
  }
}

