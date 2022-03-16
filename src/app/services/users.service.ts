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

  creatUsers(data:any){
    return this.http.post(this.url + 'users', data)
  }

  updateUsers(id:any){
    return this.http.patch(this.url + 'users/{id}', id)
  }

  deleteUsers(id:any){
    return this.http.delete(this.url + 'users/{id}', id)
  }
}
