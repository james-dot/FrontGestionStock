import {Component,OnInit} from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';

import {ProduitMockService} from '../produit/produit.mock.service';
import {produit} from '../shared/produit';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit{

  produits: produit[];

  produitForm: FormGroup;
  
    constructor(private produitService:ProduitMockService,
                private fb:FormBuilder){
                  this.produitForm=this.fb.group({
                    ref: ['', Validators.required],
                    quantie: '',
                    prixUnitaire: ''
                  });
                }
    
    ngOnInit(){
        this.produits = this.produitService.getProduits();
    }
}
