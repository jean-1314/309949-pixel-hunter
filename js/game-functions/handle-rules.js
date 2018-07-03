import Application from '../application';

export const handleRules = (element) => {
  const nextBtn = element.querySelector(`.continue`);
  const form = element.querySelector(`.rules__form`);
  const nameInput = element.querySelector(`.rules__input`);
  const returnBtn = element.querySelector(`.back`);

  nameInput.addEventListener(`input`, () => {
    nextBtn.disabled = nameInput.value === ``;
  });

  const clearInput = () => {
    nameInput.value = ``;
    nextBtn.disabled = true;
  };

  form.addEventListener(`submit`, (event) => {
    event.preventDefault();
    const name = nameInput.value;
    Application.showGame(name);
    clearInput();
  });

  returnBtn.addEventListener(`click`, () => Application.showGreeting());
};
