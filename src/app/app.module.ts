import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ProduitComponent} from './produit/produit.component';

import { AppComponent } from './app.component';
import { ProduitMockService } from './produit/produit.mock.service';

@NgModule({
  declarations: [
    AppComponent,
    ProduitComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    ProduitMockService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
