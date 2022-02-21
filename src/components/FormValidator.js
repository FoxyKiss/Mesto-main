const validationConfig = ({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'button_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
});

class FormValidator {
  constructor(validationConfig, formElement) {
    this._validateForm = formElement
    this._inputSelector = validationConfig.inputSelector
    this._submitButtonSelector = validationConfig.submitButtonSelector
    this._inactiveButtonClass = validationConfig.inactiveButtonClass
    this._inputErrorClass = validationConfig.inputErrorClass
    this._errorClass = validationConfig.errorClass
    this._submitButton = this._validateForm.querySelector(this._submitButtonSelector)
    this._inputList = Array.from(this._validateForm.querySelectorAll(this._inputSelector))
  }

  enableValidation() {
    this._validateForm.addEventListener('submit', (evt) => {
      evt.preventDefault()
    })
    this._setEvetnListeners()
  }

  _setEvetnListeners() {
    this._deactiveButton()
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement)
        this._deactiveButton()
      })
    })
  }

  _checkInputValidity(inputElement) {
    this._inputElement = inputElement
    if (!this._inputElement.validity.valid) {
      this._showError()
    } else {
      this._hideError()
    }
  }


  _showError() {
    this._inputElement.classList.add(this._inputErrorClass)
    this._errorElement = this._validateForm.querySelector(`.${this._inputElement.id}-error`)
    this._errorElement.textContent = this._inputElement.validationMessage
    this._errorElement.classList.add(this._errorClass)
  }

  _hideError() {
    this._inputElement.classList.remove(this._inputErrorClass)
    this._errorElement = this._validateForm.querySelector(`.${this._inputElement.id}-error`)
    this._errorElement.textContent = ''
    this._errorElement.classList.remove(this._errorClass)
  }

  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid
    })
  }

  _deactiveButton() {
    if (this._hasInvalidInput()) {
      this._submitButton.classList.add(this._inactiveButtonClass)
      this._submitButton.setAttribute('disabled', true)
    } else {
      this._submitButton.classList.remove(this._inactiveButtonClass)
      this._submitButton.removeAttribute('disabled')
    }
  }


  resetValidation() {
    this._inputList.forEach((inputElement) => {
        this._inputElement = inputElement
      this._hideError() 
    });

    this._deactiveButton();
  }
}

export { validationConfig, FormValidator } 