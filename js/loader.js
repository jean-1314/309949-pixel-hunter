import {APP_ID} from './util';

const SERVER_URL = `https://es.dump.academy/pixel-hunter`;
const DEFAULT_NAME = `YetAnotherDefaultName`;

const checkStatus = (response) => {
  if (response.status >= 200 || response.status < 300) {
    return response;
  }
  throw new Error(`${response.status}: ${response.statusText}`);
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
    const promise = [];
    const imageArray = [];

    for (const item of data) {
      item.answers.forEach((answer) => imageArray.push(answer.image.url));
    }

    const preloadImage = (url) => {
      return new Promise((resolve, reject) => {
        const image = new Image();

        image.src = url;

        image.onload = () => {
          resolve(url);
        };

        image.onerror = () => {
          reject(new Error(`Image not loaded: ${url}`));
        };
      });
    };

    for (const imageUrl of imageArray) {
      promise.push(preloadImage(imageUrl));
    }

    return Promise.all(promise);
  }
}
