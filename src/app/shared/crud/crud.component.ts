import { Component, OnInit, Input } from '@angular/core';

import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import {DataModel} from '../data.model';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
 /* en mettre cette component génirique */
  @Input()
  title: string;//Produits ou Utilisateur

  @Input()
  data: any;//Produit[] ou User[]
  
  @Input()
  service: CrudService;//ProduitService ou UserService

  @Input()
  initItem: any; //class produit ou user

  @Input()
  initForm: FormGroup; //creation du formulaire

  @Input()
  dataModelList: DataModel[];

  crudType = 'sample'; //sample or upload 
    
    constructor(){}
    
    ngOnInit(){}
  

    dataChanged($event){
      this.data= this.data.concat($event); //ajouter du nouveau à partir d'un fichier plus les anciens 
    }
}
