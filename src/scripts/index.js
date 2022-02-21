import '../pages/style.css';

import { validationConfig, FormValidator } from '../components/FormValidator.js'
import Card from '../components/Card.js'
import UserInfo from '../components/Userinfo.js'
import PopupWithImage from '../components/PopupWithImage.js'
import PopupWithForm from '../components/PopupWithForm.js'
import Section from '../components/Section.js'
import Api from '../components/Api.js';
import {
  profileName, profileAbout, profileEditButton, profilePopup, profileForm, profileInputName, profileInputAbout,
  cardsList, cardCreateButton, cardPopup, cardForm, cardInputName, cardInputLink, imagesPopup, cardPopImage, cardPopImageName,
  cardTemplate, deletePopup, deleteSubmitButton, avatarPopup, profileAvatar, avatarEditButton, avatarForm
} from '../utils/constants.js'
import PopupWithDelete from '../components/popupWithDelete.js';


//Создание Классов\\
//Api
const api = new Api('https://mesto.nomoreparties.co/v1/cohort-34', '89a2c951-8971-4216-9141-16ef211258eb')
let currentUserId = ''
//PopupWithForm для Карточек ,Профиля и Аватара
const popupWithCard = new PopupWithForm(cardPopup,
  {
    submitForm: (data) => {
      api.postCard(data)
        .then((data) => {
          const cardElement = createCard(data)
          cardsSection.prependItem(cardElement)
          popupWithCard.closePopup()
        })
        .catch((err) => {
          console.log(`Ошибка: ${err.status}`)
        });
    }
  })

const popupWithProfile = new PopupWithForm(profilePopup,
  {
    submitForm: (data) => {
      api.setInfo(data)
        .then((data) => {
          userInfo.setUserInfo(data)
          popupWithProfile.closePopup()
        })
    }
  })

const popupWithAvatar = new PopupWithForm(avatarPopup, {
  submitForm: (data) => {
    api.setAvatar(data)
      .then((res) => {
        userInfo.setUserAvatar(res)
        popupWithAvatar.closePopup()
      })
  }
})

//PopupWithImage
const popupWithImage = new PopupWithImage(imagesPopup)
popupWithImage.setEventListeners()

//PopupWithDelete
const popupWithDelete = new PopupWithDelete(deletePopup)


//UserInfo
const userInfo = new UserInfo(profileName, profileAbout, profileAvatar)

//Section
const cardsSection = new Section({
  renderer: (item) => {
    const cardElement = createCard(item)
    cardsSection.appendItem(cardElement)
  }
}, cardsList)
//Класс Card и функция создания карточек
function createCard(item) {
  const card = new Card(item, cardTemplate, handleCardClick, currentUserId,
    () => {
      popupWithDelete.openPopup()
      popupWithDelete.getSubmit(() => {
        api.deleteCard(item._id)
          .then(() => {
            card.deleteCard()
            popupWithDelete.closePopup()
          })
      })
    },

    () => {
      api.activeLike(card._card)
        .then((data) => {
          card.activeLike(data)
        })
    },
    () => {
      api.deactiveLike(card._card)
        .then((data) => {
          card.deactiveLike(data)
        })

    }
  )
  const cardElement = card.generateCard()

  return cardElement
}

//Функции\\

//Открытие и закрытие Popup
function openProfilePopup() {
  const userData = userInfo.getUserInfo()
  profileInputName.value = userData.name
  profileInputAbout.value = userData.about
  profileFormValidation.resetValidation()
  popupWithProfile.openPopup()
}

function openCardPopup() {
  popupWithCard.openPopup()
  cardFormValidation.resetValidation()
}

function openAvatarPopup() {
  popupWithAvatar.openPopup()
}

function handleCardClick(evt) {
  popupWithImage.openPopup(evt)
}


//Валидация\\
const profileFormValidation = new FormValidator(validationConfig, profileForm)
profileFormValidation.enableValidation()
const cardFormValidation = new FormValidator(validationConfig, cardForm)
cardFormValidation.enableValidation()
const avatarFormValidation = new FormValidator(validationConfig, avatarForm)
avatarFormValidation.enableValidation()

//Начальная информация о пользователе и Карточки с сервера

Promise.all([api.getInfo(), api.getStartCards()])
  .then(([userData, cards]) => {
    currentUserId = userData._id
    userInfo.setUserInfo(userData)
    cardsSection.renderItems(cards)
  })
  .catch((err) => {
    console.log(`Ошибка: ${err.status}`)
  });
//
profileEditButton.addEventListener('click', openProfilePopup)
popupWithProfile.setEventListeners()

cardCreateButton.addEventListener('click', openCardPopup)
popupWithCard.setEventListeners()

avatarEditButton.addEventListener('click', openAvatarPopup)
popupWithDelete.setEventListeners()
popupWithAvatar.setEventListeners()
