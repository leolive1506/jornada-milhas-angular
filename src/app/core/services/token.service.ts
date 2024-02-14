import { Injectable } from '@angular/core';

const KEY = 'token'
@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private _token: string
  constructor() { }

  remove() {
    return localStorage.removeItem(KEY)
  }

  set token(token: string) {
    localStorage.setItem(KEY, token)
  }

  get token() {
    return localStorage.getItem(KEY) ?? ""
  }

  hasToken() {
    return !!this.token
  }
}
