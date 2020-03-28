import {Component,OnInit} from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';


import {ProduitService} from '../produit/produit.service';

import {produit} from '../shared/produit';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit{

  produits: produit[];

  produitForm: FormGroup;
  
    constructor(private produitService:ProduitService,
                private fb:FormBuilder){
                  this.produitForm=this.fb.group({
                    ref: ['', Validators.required],
                    quantie: '',
                    prixUnitaire: ''
                  });
                }
    
    ngOnInit(){
        this.loadProduits();
    }

    loadProduits(){
      this.produitService.getProduits().subscribe(
        data => {this.produits=data},
        error => {console.log('An error was occured')},
        () => {console.log('loading produits was done...')}
      );
    }
}
