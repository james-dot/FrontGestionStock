import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AppService {//contenir le code d'authentification

authendicated:boolean= false;
  constructor() { }

  authenticate(credentials,callback){
    if(credentials && credentials.username == 'user' && credentials.password == 'password1'){
        this.authendicated = true;
    }else{
      this.authendicated= false;
    }
    return callback & callback();
  }
}
