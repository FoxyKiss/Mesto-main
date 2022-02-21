export default class UserInfo {
  constructor(name, about, avatar) {
    this._name = name
    this._about = about
    this._avatar = avatar
  }

  getUserInfo() {
    const user = {
      name: this._name.textContent,
      about: this._about.textContent,
    }
    return user
  }

  setUserInfo(data) {
    this._name.textContent = data.name
    this._about.textContent = data.about
    this._avatar.src = data.avatar
  }

  setUserAvatar(data) {
    this._avatar.src = data._avatar
  }
}