import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HomeService {

  constructor(private http:HttpClient) { }
  configUrlMain = 'http://localhost:3000/api/main';
  configUrlUser = 'http://localhost:3000/api/user';
  getItems() {
    return this.http.get(this.configUrlMain);
  }

  getItemById(id){
    return this.http.get(this.configUrlMain+'/' + id);
  }
 
  getItemByComun(comun){
    return this.http.get(this.configUrlMain+'/comun/' + comun);
  }

  sumCount(detail) {
    return this.http.patch(this.configUrlMain+'/' + detail.id, detail);
  }

  login(user){
    return this.http.post(this.configUrlUser+'/login',{user});
  }

  register(user){
    return this.http.post(this.configUrlUser+'/register',{user});
  }

  edit(id,user){
    return this.http.patch(this.configUrlUser+'/'+id,{user});
  }

  getUsers(){
    return this.http.get(this.configUrlUser+'/');
  }

  getUserById(id){
    return this.http.get(this.configUrlUser+'/'+id);
  }

  uploadCSV(regis){
    return this.http.post(this.configUrlMain+'/uploadCSV',{regis});
  }
}
