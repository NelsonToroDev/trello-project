import { Injectable } from '@angular/core';
import { getCookie, setCookie, removeCookie } from 'typescript-cookie'

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  saveToken (token: string) {
    localStorage.setItem('token', token);
    // Create a cookie that will expire in 365 days and will be available for the whole application defined by the roor path '/'
    // This coockie contains a value which represents a JWT token which has an expiration date by itself and defined by the server
    setCookie('token-trello', token, { expires: 365, path: '/' });
  }

  getToken () {
    const token = getCookie('token-trello');
    return token;
  }

  removeToken () {
    removeCookie('token-trello');
  }
}
