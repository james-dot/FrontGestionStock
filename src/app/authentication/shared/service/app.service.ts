import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Store } from '@ngrx/store';
import {PrincipalState} from '../principal.state';
import {CookieService} from 'ngx-cookie-service';
import{SAVE_PRINCIPAL} from '../save.principal.action';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root' //en a pas besion de declarer cette class dans app.module.ts
})
export class AppService {//contenir le code d'authentification

authenticated: boolean = false;
  constructor(private http: HttpClient,
              private cookieService:CookieService,
              private store: Store<PrincipalState>) { }

authenticate(credentials, callback){
    if(credentials){
      const token = btoa(credentials.username + ':' + credentials.password);
      this.cookieService.set('token', token);
      
        this.http.get(environment.api_url + '/user').subscribe(response => {
          if(response && response['name']){
            this.authenticated = true;
            
            this.store.dispatch({
              type: SAVE_PRINCIPAL,
              payload: response
            });
            
          }else{
            this.authenticated=false;
          }
          return callback && callback();
        });
     } else{
      this.authenticated=false;
    }
  }
logout(callback){
         return callback && callback();
    
  }
}
