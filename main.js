(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__save-button",inactiveButtonClass:"button_inactive",inputErrorClass:"popup__input_type_error",errorClass:"popup__input-error_active"},n=function(){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._validateForm=n,this._inputSelector=e.inputSelector,this._submitButtonSelector=e.submitButtonSelector,this._inactiveButtonClass=e.inactiveButtonClass,this._inputErrorClass=e.inputErrorClass,this._errorClass=e.errorClass,this._submitButton=this._validateForm.querySelector(this._submitButtonSelector),this._inputList=Array.from(this._validateForm.querySelectorAll(this._inputSelector))}var n,r;return n=t,(r=[{key:"enableValidation",value:function(){this._validateForm.addEventListener("submit",(function(e){e.preventDefault()})),this._setEvetnListeners()}},{key:"_setEvetnListeners",value:function(){var e=this;this._deactiveButton(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._deactiveButton()}))}))}},{key:"_checkInputValidity",value:function(e){this._inputElement=e,this._inputElement.validity.valid?this._hideError():this._showError()}},{key:"_showError",value:function(){this._inputElement.classList.add(this._inputErrorClass),this._errorElement=this._validateForm.querySelector(".".concat(this._inputElement.id,"-error")),this._errorElement.textContent=this._inputElement.validationMessage,this._errorElement.classList.add(this._errorClass)}},{key:"_hideError",value:function(){this._inputElement.classList.remove(this._inputErrorClass),this._errorElement=this._validateForm.querySelector(".".concat(this._inputElement.id,"-error")),this._errorElement.textContent="",this._errorElement.classList.remove(this._errorClass)}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_deactiveButton",value:function(){this._hasInvalidInput()?(this._submitButton.classList.add(this._inactiveButtonClass),this._submitButton.setAttribute("disabled",!0)):(this._submitButton.classList.remove(this._inactiveButtonClass),this._submitButton.removeAttribute("disabled"))}},{key:"resetValidation",value:function(){var e=this;this._inputList.forEach((function(t){e._inputElement=t,e._hideError()})),this._deactiveButton()}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var o=function(){function e(t,n,r,o,i,a,c){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._card=t,this._cardLink=t.link,this._cardName=t.name,this._userId=t.owner._id,this._currentUserId=o,this._cardTemplate=n,this._cardElement=this._getTemplate(),this._handleCardClick=r,this._handleCardDelete=i,this._activeLike=a,this._deactiveLike=c,this._countLike=t.likes,this._cardLikeButton=this._cardElement.querySelector(".cards__like-button"),this._cardLikeNumber=this._cardElement.querySelector(".cards__like-number")}var t,n;return t=e,(n=[{key:"_getTemplate",value:function(){return this._cardTemplate.content.querySelector(".cards__list_element").cloneNode(!0)}},{key:"generateCard",value:function(){return this._cardElement.querySelector(".cards__image").src=this._cardLink,this._cardElement.querySelector(".cards__image").alt=this._cardName,this._cardElement.querySelector(".cards__name").textContent=this._cardName,this._cardElement.querySelector(".cards__like-number").textContent=this._countLike.length,this._cardDeleteButton=this._cardElement.querySelector(".cards__delete-button"),this._userId===this._currentUserId&&this._cardDeleteButton.classList.remove("hide_delete-button"),this._setEventListeners(),this._cardElement}},{key:"_likeCard",value:function(){var e=this;this._cardLikeButton=this._cardElement.querySelector(".cards__like-button"),this._cardLikeButton.addEventListener("click",(function(){e._cardLikeButton.classList.contains("cards__like-button_active")?e._deactiveLike():e._activeLike()}))}},{key:"likesNumber",value:function(e){return String(e.likes.length)}},{key:"activeLike",value:function(e){this._cardLikeButton.classList.add("cards__like-button_active"),this._cardLikeNumber.textContent=this.likesNumber(e)}},{key:"deactiveLike",value:function(e){this._cardLikeButton.classList.remove("cards__like-button_active"),this._cardLikeNumber.textContent=this.likesNumber(e)}},{key:"_currentUserLike",value:function(){var e=this;this._countLike.forEach((function(t){t._id===e._currentUserId&&e._cardLikeButton.classList.add("cards__like-button_active")}))}},{key:"deleteCard",value:function(){this._cardElement.remove()}},{key:"_openImageCard",value:function(){var e=this;this._cardElement.querySelector(".cards__image").addEventListener("click",(function(t){e._handleCardClick(t)}))}},{key:"_setEventListeners",value:function(){var e=this;this._currentUserLike(),this._likeCard(),this._openImageCard(),this._cardDeleteButton.addEventListener("click",(function(t){e._handleCardDelete()}))}}])&&r(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var a=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=t,this._about=n,this._avatar=r}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._name.textContent,about:this._about.textContent}}},{key:"setUserInfo",value:function(e){this._name.textContent=e.name,this._about.textContent=e.about,this._avatar.src=e.avatar}},{key:"setUserAvatar",value:function(e){this._avatar.src=e._avatar}}])&&i(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var u=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=t}var t,n;return t=e,(n=[{key:"openPopup",value:function(){document.addEventListener("keydown",this._handleEscClose()),this._popup.classList.add("popup_open")}},{key:"closePopup",value:function(){document.removeEventListener("keydown",this._handleEscClose),this._popup.classList.remove("popup_open")}},{key:"_handleEscClose",value:function(){var e=this;document.addEventListener("keydown",(function(t){"Escape"===t.key&&e.closePopup()}))}},{key:"_handleClickClose",value:function(){var e=this;this._popup.addEventListener("click",(function(t){t.target.classList.contains("popup_open")&&e.closePopup()}))}},{key:"setEventListeners",value:function(){var e=this;this._popup.querySelector(".popup__close-button").addEventListener("click",(function(){e.closePopup()})),this._handleClickClose()}}])&&c(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(){return p="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=f(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},p.apply(this,arguments)}function f(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=_(e)););return e}function h(e,t){return h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},h(e,t)}function d(e,t){if(t&&("object"===s(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function _(e){return _=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},_(e)}var y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&h(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=_(r);if(o){var n=_(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return d(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._cardPopImage=t._popup.querySelector(".popup__image"),t._cardPopImageName=t._popup.querySelector(".popup__image-name"),t}return t=a,(n=[{key:"openPopup",value:function(e){p(_(a.prototype),"openPopup",this).call(this),this._cardPopImage.src=e.target.src,this._cardPopImage.alt=e.target.alt,this._cardPopImageName.textContent=e.target.alt}}])&&l(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(u);function v(e){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(e)}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(){return b="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=k(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},b.apply(this,arguments)}function k(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=w(e)););return e}function E(e,t){return E=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},E(e,t)}function g(e,t){if(t&&("object"===v(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function w(e){return w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},w(e)}var S=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&E(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=w(r);if(o){var n=w(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return g(this,e)});function a(e,t){var n,r=t.submitForm;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._submitForm=r,n._form=n._popup.querySelector(".popup__form"),n}return t=a,(n=[{key:"_getInputValues",value:function(){this._inputList=this._form.querySelectorAll(".popup__input");var e={};return this._inputList.forEach((function(t){e[t.name]=t.value})),e}},{key:"closePopup",value:function(){b(w(a.prototype),"closePopup",this).call(this),this._form.reset()}},{key:"setEventListeners",value:function(){var e=this;b(w(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._submitForm(e._getInputValues())}))}}])&&m(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(u);function L(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var C=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._container=n}var t,n;return t=e,(n=[{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){t._renderer(e)}))}},{key:"appendItem",value:function(e){this._container.append(e)}},{key:"prependItem",value:function(e){this._container.prepend(e)}}])&&L(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function P(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var O=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=t,this._token=n}var t,n;return t=e,(n=[{key:"_checkResponse",value:function(e){return e?e.json():Promise.reject("Ошибка: ".concat(e.status))}},{key:"getInfo",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{method:"GET",headers:{authorization:this._token}}).then(this._checkResponse)}},{key:"setInfo",value:function(e){return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:e.name,about:e.about})}).then(this._checkResponse)}},{key:"getStartCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{method:"GET",headers:{authorization:this._token}}).then(this._checkResponse)}},{key:"postCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:e.name,link:e.link})}).then(this._checkResponse)}},{key:"deleteCard",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:{authorization:this._token,"Content-Type":"application/json"}}).then((function(){t._checkResponse}))}},{key:"activeLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e._id),{method:"PUT",headers:{authorization:this._token,"Content-Type":"application/json"}}).then(this._checkResponse)}},{key:"deactiveLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e._id),{method:"DELETE",headers:{authorization:this._token,"Content-Type":"application/json"}}).then(this._checkResponse)}},{key:"setAvatar",value:function(e){return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({avatar:e.avatar})}).then(this._parseResponse)}}])&&P(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),j=document.querySelector(".profile__title"),q=document.querySelector(".profile__subtitle"),I=document.querySelector(".profile__avatar"),R=document.querySelector(".profile__edit-button"),B=document.querySelector(".popup_edit-profile"),T=B.querySelector("#profileForm"),U=T.querySelector("#profileName"),x=T.querySelector("#profileAbout"),A=document.querySelector(".cards__list"),N=document.querySelector(".profile__add-button"),D=document.querySelector(".popup_create-cards"),F=D.querySelector("#cardForm"),V=(F.querySelector("#cardName"),F.querySelector("#cardLink"),document.querySelector("#cardTemplate")),z=document.querySelector(".popup_images"),J=(z.querySelector(".popup__image"),z.querySelector(".popup__image-name"),document.querySelector(".popup_delete_card")),G=(document.querySelector("#deleteSubmitButton"),document.querySelector(".popup_change-avatar")),H=document.querySelector(".profile__avatar-edit"),M=document.querySelector("#avatarForm");function $(e){return $="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},$(e)}function K(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Q(){return Q="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=W(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},Q.apply(this,arguments)}function W(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=Z(e)););return e}function X(e,t){return X=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},X(e,t)}function Y(e,t){if(t&&("object"===$(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function Z(e){return Z=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},Z(e)}var ee=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&X(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=Z(r);if(o){var n=Z(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return Y(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._form=t._popup.querySelector(".popup__form"),t}return t=a,(n=[{key:"setEventListeners",value:function(e){var t=this;Q(Z(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){e.preventDefault(),t._deleteSubmit()}))}},{key:"getSubmit",value:function(e){this._deleteSubmit=e}}])&&K(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(u);function te(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var ne=new O("https://mesto.nomoreparties.co/v1/cohort-34","89a2c951-8971-4216-9141-16ef211258eb"),re="",oe=new S(D,{submitForm:function(e){ne.postCard(e).then((function(e){var t=pe(e);le.prependItem(t),oe.closePopup()})).catch((function(e){console.log("Ошибка: ".concat(e.status))}))}}),ie=new S(B,{submitForm:function(e){ne.setInfo(e).then((function(e){se.setUserInfo(e),ie.closePopup()}))}}),ae=new S(G,{submitForm:function(e){ne.setAvatar(e).then((function(e){se.setUserAvatar(e),ae.closePopup()}))}}),ce=new y(z);ce.setEventListeners();var ue=new ee(J),se=new a(j,q,I),le=new C({renderer:function(e){var t=pe(e);le.appendItem(t)}},A);function pe(e){var t=new o(e,V,fe,re,(function(){ue.openPopup(),ue.getSubmit((function(){ne.deleteCard(e._id).then((function(){t.deleteCard(),ue.closePopup()}))}))}),(function(){ne.activeLike(t._card).then((function(e){t.activeLike(e)}))}),(function(){ne.deactiveLike(t._card).then((function(e){t.deactiveLike(e)}))}));return t.generateCard()}function fe(e){ce.openPopup(e)}var he=new n(t,T);he.enableValidation();var de=new n(t,F);de.enableValidation(),new n(t,M).enableValidation(),Promise.all([ne.getInfo(),ne.getStartCards()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,c=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){c=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(c)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return te(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?te(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];re=o._id,se.setUserInfo(o),le.renderItems(i)})).catch((function(e){console.log("Ошибка: ".concat(e.status))})),R.addEventListener("click",(function(){var e=se.getUserInfo();U.value=e.name,x.value=e.about,he.resetValidation(),ie.openPopup()})),ie.setEventListeners(),N.addEventListener("click",(function(){oe.openPopup(),de.resetValidation()})),oe.setEventListeners(),H.addEventListener("click",(function(){ae.openPopup()})),ue.setEventListeners(),ae.setEventListeners()})();