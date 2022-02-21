export default class Card {
  constructor(card, template, handleCardClick, currentUser, handleCardDelete, activeLike, deactiveLike) {
    this._card = card
    this._cardLink = card.link
    this._cardName = card.name
    this._userId = card.owner._id
    this._currentUserId = currentUser
    this._cardTemplate = template
    this._cardElement = this._getTemplate()
    this._handleCardClick = handleCardClick
    this._handleCardDelete = handleCardDelete
    this._activeLike = activeLike
    this._deactiveLike = deactiveLike
    this._countLike = card.likes
    this._cardLikeButton = this._cardElement.querySelector('.cards__like-button')
    this._cardLikeNumber = this._cardElement.querySelector('.cards__like-number')
  }

  _getTemplate() {
    const cardElement = this._cardTemplate.content
      .querySelector('.cards__list_element')
      .cloneNode(true)
    return cardElement
  }

  generateCard() {
    this._cardElement.querySelector('.cards__image').src = this._cardLink
    this._cardElement.querySelector('.cards__image').alt = this._cardName
    this._cardElement.querySelector('.cards__name').textContent = this._cardName
    this._cardElement.querySelector('.cards__like-number').textContent = this._countLike.length
    this._cardDeleteButton = this._cardElement.querySelector('.cards__delete-button')
    if (this._userId === this._currentUserId) {
      this._cardDeleteButton.classList.remove('hide_delete-button')
    }
    this._setEventListeners()
    return this._cardElement
  }

  _likeCard() {
    this._cardLikeButton = this._cardElement.querySelector('.cards__like-button')
    this._cardLikeButton.addEventListener('click', () => {
      if(this._cardLikeButton.classList.contains('cards__like-button_active')) {
        this._deactiveLike()
      } else {
        this._activeLike()
      }
    })
  }

  likesNumber(data) {
    return String(data.likes.length)
  }

  activeLike(data) {
    this._cardLikeButton.classList.add('cards__like-button_active')
    this._cardLikeNumber.textContent = this.likesNumber(data)
  }

  deactiveLike(data) {
    this._cardLikeButton.classList.remove('cards__like-button_active')
    this._cardLikeNumber.textContent = this.likesNumber(data)
  }

  _currentUserLike() {
    this._countLike.forEach((like) => {
      if(like._id === this._currentUserId) {
        this._cardLikeButton.classList.add('cards__like-button_active')
      }
    })
  }


  deleteCard() {
    this._cardElement.remove();
  }

  _openImageCard() {
    this._cardElement.querySelector('.cards__image')
      .addEventListener('click', (evt) => {
        this._handleCardClick(evt)
      })
  }

  _setEventListeners() {
    this._currentUserLike()
    this._likeCard()
    this._openImageCard()
    this._cardDeleteButton.addEventListener('click', (evt) => {
      this._handleCardDelete()
    })
  }
}

export { Card }