export default class Popup {
  constructor(popupElement) {
    this._popup = popupElement
  }

  openPopup() {
    document.addEventListener('keydown', this._handleEscClose())
    this._popup.classList.add('popup_open')
  }

  closePopup() { 
    document.removeEventListener('keydown', this._handleEscClose)
    this._popup.classList.remove('popup_open')
  }

  _handleEscClose() {
    document.addEventListener('keydown', (evt) => {
      if(evt.key === 'Escape') {
        this.closePopup()
      }
    })
  }

  _handleClickClose() {
    this._popup.addEventListener('click', (evt) => {
      if(evt.target.classList.contains('popup_open')) {
        this.closePopup()
      }
    })
  }

  setEventListeners() {
    this._popup.querySelector('.popup__close-button')
    .addEventListener('click', () => {
      this.closePopup()
    })
    this._handleClickClose()
  }
}
