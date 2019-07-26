import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HomeService {

  constructor(private http:HttpClient) { }
  configUrl = 'http://localhost:3000/api/main';
  getItems() {
    return this.http.get(this.configUrl);
  }

}
