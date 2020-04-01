import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { NgModule } from '@angular/core';
import {ProduitComponent} from './produit/produit.component';
import {ProduitService} from './produit/produit.service';

import { AppComponent } from './app.component';
import { ProduitMockService } from './produit/produit.mock.service';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import {AppRoutingModule} from './app.routing.module';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import {AppService} from './app.service';

@NgModule({
  declarations: [
    AppComponent,
    ProduitComponent,
    NavbarComponent,
    SidebarComponent,
    ContentComponent,
    DashbordComponent,
    LoginComponent,
    HomeComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
      ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'})
    
  ],
  providers: [
    ProduitMockService,
    ProduitService,
    AppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
