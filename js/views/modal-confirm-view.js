import AbstractView from './abstract-view';

export default class ModalConfirmView extends AbstractView {
  get template() {
    return `
      <section class="modal-confirm modal-confirm__wrap">
        <form class="modal-confirm__inner">
          <button class="modal-confirm__close" type="button">Закрыть</button>
          <h2 class="modal-confirm__title">Подтверждение</h2>
          <p class="modal-confirm__text">Вы уверены что хотите начать игру заново?</p>
          <div class="modal-confirm__btn-wrap">
            <button class="modal-confirm__btn">Ок</button>
            <button class="modal-confirm__btn">Отмена</button>
          </div>
        </form>
      </section>
    `;
  }

  bind() {
    const confirmBtn = this.element.querySelector(`.modal-confirm__btn:first-child`);
    const cancelBtn = this.element.querySelector(`.modal-confirm__btn:last-child`);
    const closeBtn = this.element.querySelector(`.modal-confirm__close`);

    const closeModal = (event) => {
      event.preventDefault();
      this.onClose();
    };
    cancelBtn.addEventListener(`click`, closeModal);
    closeBtn.addEventListener(`click`, closeModal);
    confirmBtn.addEventListener(`click`, (event) => {
      event.preventDefault();
      this.onConfirm();
    });
  }

  onConfirm() {

  }

  onClose() {

  }
}
