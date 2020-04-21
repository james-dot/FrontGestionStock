import { Injectable } from '@angular/core';
import { CrudService } from '../../../shared/crud.service';

@Injectable({
    providedIn: 'root' //en a pas besion de declarer cette class dans app.module.ts
  })
export class ProductService extends CrudService{
    url='/produit';
} 
/* constructor(private http: HttpClient){ }

    getAll(): Observable <any> {
        
        return this.http.get(API_URLS.PRODUITS_URL);
    }

    add(produit): Observable<any>{
        return this.http.post(API_URLS.PRODUITS_URL,produit);
    }

    update(produit): Observable<any>{
        return this.http.put(API_URLS.PRODUITS_URL,produit);
    }

    delete(id): Observable<any>{
        return this.http.delete(API_URLS.PRODUITS_URL + '/${id}');
    }

    addAll(list): Observable<any>{//......fichier
        return this.http.post(API_URLS.PRODUITS_URL + '/all',list);
    } */