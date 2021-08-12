import {makeAutoObservable} from "mobx"

export default class UserStore {
  constructor() {
    this._isAuth = false
    this._user = {}
    makeAutoObservable(this)//следит за компонентами
  }

  setIsAuth(bool) {
    this._isAuth = bool
  }

  setUser(user) { //изменение пользователя
    this._user = user
  }

  get isAuth() {
    return this._isAuth
  }

  get user() {
    return this._user
  }
}