import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Store } from '@ngrx/store';
import {PrincipalState} from './shared/principal.state';
//import 'rxjs/add/operator/finally';

import {CookieService} from 'ngx-cookie-service';
import{SAVE_PRINCIPAL} from './shared/save.principal.action';
import { API_URLS} from './config/api.url.config';

@Injectable()
export class AppService {//contenir le code d'authentification

authenticated: boolean = false;
  constructor(private http: HttpClient,
              private cookieService:CookieService,
              private store: Store<PrincipalState>) { }

  authenticate(credentials, callback){
    if(credentials){
      const token = btoa(credentials.username + ':' + credentials.password);
      this.cookieService.set('token', token);
      
        this.http.get(API_URLS.USER_URL).subscribe(response => {
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
        
    }
    else{
      this.authenticated=false;
    }
  
  }
  logout(callback){
    /* const _this=this;
    this.http.post('logout',{}).subscribe(()=>{
      _this.authenticated=false; */
      return callback && callback();
    
  }
}
