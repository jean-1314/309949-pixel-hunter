import {GameTypes} from '../data/game-data';

export const renderGame = (level) => {
  switch (level.type) {
    case GameTypes.TINDER_LIKE:
      return `
        <p class="game__task">${level.question}</p>
        <form class="game__content  game__content--wide">
          <div class="game__option">
            <img src="${level.answers[0].image.url}" alt="Option 1" width="705" height="455">
            <label class="game__answer  game__answer--photo">
              <input name="question1" type="radio" value="photo">
              <span>Фото</span>
            </label>
            <label class="game__answer  game__answer--wide  game__answer--painting">
              <input name="question1" type="radio" value="painting">
              <span>Рисунок</span>
            </label>
          </div>
        </form>
      `;
    case GameTypes.TWO_OF_TWO:
      return `
        <p class="game__task">${level.question}</p>
        <form class="game__content">
          <div class="game__option">
            <img src="${level.answers[0].image.url}" alt="Option 1" width="468" height="458">
            <label class="game__answer game__answer--photo">
              <input name="question1" type="radio" value="photo">
              <span>Фото</span>
            </label>
            <label class="game__answer game__answer--painting">
              <input name="question1" type="radio" value="painting">
              <span>Рисунок</span>
            </label>
          </div>
          <div class="game__option">
            <img src="${level.answers[1].image.url}" alt="Option 2" width="468" height="458">
            <label class="game__answer  game__answer--photo">
              <input name="question2" type="radio" value="photo">
              <span>Фото</span>
            </label>
            <label class="game__answer  game__answer--painting">
              <input name="question2" type="radio" value="painting">
              <span>Рисунок</span>
            </label>
          </div>
        </form>
      `;
    case GameTypes.ONE_OF_THREE:
      return `
        <p class="game__task">${level.question}</p>
        <form class="game__content  game__content--triple">
          <div class="game__option">
            <img src="${level.answers[0].image.url}" alt="Option 1" width="304" height="455">
          </div>
          <div class="game__option  game__option--selected">
            <img src="${level.answers[1].image.url}" alt="Option 1" width="304" height="455">
          </div>
          <div class="game__option">
            <img src="${level.answers[2].image.url}" alt="Option 1" width="304" height="455">
          </div>
        </form>
      `;
    default: throw new Error(`Unknown game type`);
  }
};
