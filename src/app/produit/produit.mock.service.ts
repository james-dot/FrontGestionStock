import {Produit} from '../shared/produit.model';
import { Injectable } from '@angular/core';
import { CrudService } from '../shared/crud.service';
import {Observable, of} from 'rxjs';

@Injectable()
 export class ProduitMockService implements CrudService{
    private PRODUITS: Produit[] = [];
    constructor(){
        let p1  = new Produit(1,'Livre',50,20);
        let p2  = new Produit(2,'Cahier',30,20);
        let p3 = new Produit(3,'Stylo',20,20);
        this.PRODUITS.push(p1);
        this.PRODUITS.push(p2);
        this.PRODUITS.push(p3);
    }

    getAll(): Observable <any> {
          return of(this.PRODUITS);
    }

    add(produit): Observable<any>{
        return of('success');
    }

    update(produit): Observable<any>{
        return of('success');
    }

    delete(id): Observable<any>{
        return of('success');
    }

    addAll(list): Observable<any>{//.....fichier
        return of('success');
    }

   

   
}