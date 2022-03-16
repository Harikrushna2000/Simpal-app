import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StationsService {

  url = 'https://piar.meew.me/';

  constructor(private http:HttpClient) { }

  getstations(){
    return this.http.get(this.url + 'stations')
  }
  
  creatstations(data:any){
    return this.http.post(this.url + 'stations', data)
  }

  updatestations(id:any){
    return this.http.patch(this.url + 'stations/{id}', id)
  }

  deletestations(id:any){
    return this.http.delete(this.url + 'stations/{id}', id)
  }
}
