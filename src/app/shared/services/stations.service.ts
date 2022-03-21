import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface stations {
  name: string;
  comment: string;
}
@Injectable({
  providedIn: 'root',
})
export class StationsService {
  url = 'https://piar.meew.me/';

  constructor(private http: HttpClient) {}

  getstations() {
    return this.http.get(this.url + 'stations');
  }

  creatStations(data: stations) {
    return this.http.post(this.url + 'stations', data);
  }

  updateStations(id: string, data: stations) {
    return this.http.patch(this.url + `stations/${id}`, data);
  }

  deleteStations(id: string) {
    console.log('id :', id);
    return this.http.delete(this.url + `stations/${id}`);
  }
}
