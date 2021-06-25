import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  username!: String;
  user: User = { username: 'asd', password: "asd123" };

  constructor() { }

  auth(username: String, password: String): boolean {
    if (username === this.user.username && password === this.user.password) {
      //authenticate
      this.username = username;
      return true;
    }
    return false;
  }

  getUsername(): String {
    return this.username;
  }
}
