import {produit} from '../shared/produit';
import { Injectable } from '@angular/core';

@Injectable()
 export class ProduitMockService{

    private PRODUITS: produit[] = [];
    constructor(){
        let p1 : produit = new produit('Livre',50,20);
        let p2 : produit = new produit('Cahier',30,20);
        let p3 : produit = new produit('Stylo',20,20);
        this.PRODUITS.push(p1);
        this.PRODUITS.push(p2);
        this.PRODUITS.push(p3);
    }

    public getProduits(): produit[]{
            return this.PRODUITS;
    }
}