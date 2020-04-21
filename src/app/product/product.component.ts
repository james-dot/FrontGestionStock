import {Component,OnInit} from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {ProductService} from './shared/service/product.service';
import {Product} from './shared/model/product.model';
import {DataModel} from '../shared/data.model';

@Component({
  selector: 'app-produit',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{

  produits: Product[];

  produitForm: FormGroup;

  produit: Product = new Product();

  produitsModel: DataModel[];

  constructor(public productService:ProductService,private fb:FormBuilder,private route:ActivatedRoute){
  }
  ngOnInit(){
    this.produits=this.route.snapshot.data.produits;
    this.produitForm=this.fb.group({
      ref: ['', Validators.required],
      quantite: '',
      prixUnitaire: ''
    });
    this.produitsModel = [
          new DataModel( 'id','ID','number',true,[]),
          new DataModel( 'ref','Référence','string',false,[]),
          new DataModel( 'quantite','Quantité','number',false,[]),
          new DataModel( 'prixUnitaire','Prix Unitaire','number',false,[])
    ]
}
}

                    
                    
                  
                    