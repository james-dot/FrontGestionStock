import {Component,OnInit} from '@angular/core';
import {ProduitMockService} from './produit/produit.mock.service';
import {produit} from './shared/produit';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  produits: produit[];
    constructor(private produitService:ProduitMockService){}
    
    ngOnInit(){
        this.produits = this.produitService.getProduits();
    }
}
