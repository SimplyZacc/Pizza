import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JwtService {
  token = 'jwtToken';

  constructor() { }

  getToken(): string {
    return window.localStorage[this.token];
  }

  saveToken(token: string) {
    window.localStorage[this.token] = token;
  }

  destroyToken() {
    window.localStorage.removeItem(this.token);
  }
}
