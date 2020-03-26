import {Component,OnInit} from '@angular/core';
import {ProduitMockService} from '../produit/produit.mock.service';
import {produit} from '../shared/produit';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit{
  produits: produit[];
    constructor(private produitService:ProduitMockService){}
    
    ngOnInit(){
        this.produits = this.produitService.getProduits();
    }
}
