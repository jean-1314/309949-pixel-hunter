import ModalConfirmView from '../views/modal-confirm-view';
import Application from '../application';

export default class ModalConfirmScreen {
  constructor(model) {
    this.content = new ModalConfirmView();
    this.model = model;
    this.root = document.createElement(`div`);
    this.root.appendChild(this.content.element);
    this.init();
  }

  get element() {
    return this.root;
  }

  init() {
    this.content.onConfirm = this.confirm.bind(this);
    this.content.onClose = this.close.bind(this);
  }

  confirm() {
    this.model.shouldTick = false;
    clearInterval(this.model.interval);
    this.root.removeChild(this.content.element);
    Application.showGreeting();
  }

  close() {
    this.root.removeChild(this.content.element);
  }
}
