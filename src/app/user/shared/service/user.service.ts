import { Injectable } from '@angular/core';
import { CrudService } from '../../../shared/crud.service';

@Injectable({
    providedIn: 'root' //en a pas besion de declarer cette class dans app.module.ts
  })
export class UserService extends CrudService{
    url='/crud_user';

   /*  constructor(private http: HttpClient){ }

    getAll(): Observable <any> {
        
        return this.http.get(API_URLS.USER_CRUD_URL);
    }

    add(user): Observable<any>{
        return this.http.post(API_URLS.USER_CRUD_URL,user);
    }

    update(user): Observable<any>{
        return this.http.put(API_URLS.USER_CRUD_URL,user);
    }

    delete(id): Observable<any>{
        return this.http.delete(API_URLS.USER_CRUD_URL + '/${id}');
    }

    addAll(list): Observable<any>{//.....fichier
        return this.http.post(API_URLS.USER_CRUD_URL + '/all',list);
    } */
}