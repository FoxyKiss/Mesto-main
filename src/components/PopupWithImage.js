import Popup from "./Popup.js"

export default class PopupWithImage extends Popup {
  constructor(popupElement){
    super(popupElement)
    this._cardPopImage = this._popup.querySelector('.popup__image')
    this._cardPopImageName = this._popup.querySelector('.popup__image-name')
  }

  openPopup(evt) {
    super.openPopup()
    this._cardPopImage.src = evt.target.src
    this._cardPopImage.alt = evt.target.alt
    this._cardPopImageName.textContent = evt.target.alt
  }
}