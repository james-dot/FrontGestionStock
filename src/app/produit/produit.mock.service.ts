import {Produit} from '../shared/produit';
import { Injectable } from '@angular/core';

@Injectable()
 export class ProduitMockService{

    private PRODUITS: Produit[] = [];
    constructor(){
        let p1  = new Produit(1,'Livre',50,20);
        let p2  = new Produit(2,'Cahier',30,20);
        let p3 = new Produit(3,'Stylo',20,20);
        this.PRODUITS.push(p1);
        this.PRODUITS.push(p2);
        this.PRODUITS.push(p3);
    }

    public getProduits(): Produit[]{
            return this.PRODUITS;
    }
}