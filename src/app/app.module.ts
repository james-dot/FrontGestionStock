import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import {ProduitComponent} from './produit/produit.component';

import { AppComponent } from './app.component';
import { ProduitMockService } from './produit/produit.mock.service';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import {AppRoutingModule} from './app.routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ProduitComponent,
    NavbarComponent,
    SidebarComponent,
    ContentComponent,
    DashbordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    ProduitMockService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
