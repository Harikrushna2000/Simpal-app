import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  url = 'https://piar.meew.me/';

  constructor(private http: HttpClient) {}

  getUserList() {
    return this.http.get(this.url + 'users');
  }
}
