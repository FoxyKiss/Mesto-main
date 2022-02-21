import Popup from "./Popup.js";

export default class PopupWithDelete extends Popup {
  constructor(popupElement) {
    super(popupElement)

    this._form= this._popup.querySelector('.popup__form')
  }

  setEventListeners(deleteSubmit) {
    super.setEventListeners()
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._deleteSubmit();
    });
  }

  getSubmit(deleteSubmit) {
    this._deleteSubmit = deleteSubmit
  }
}