import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http';
import { NgModule } from '@angular/core';
import {StoreModule} from '@ngrx/store';
import {ChartModule} from 'angular2-chartjs';

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
import { XhrInterceptor } from './xhr.interceptor';
import {CookieService} from 'ngx-cookie-service';
import { UserComponent } from './user/user.component';

import { principalReducer } from './shared/principal.reducer';
import { UserService } from './user/user.service';
import { CrudComponent } from './shared/crud/crud.component';
import { MyChartComponent } from './my-chart/my-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    ProduitComponent,
    NavbarComponent,
    SidebarComponent,
    ContentComponent,
    DashbordComponent,
    LoginComponent,
    HomeComponent,
    UserComponent,
    CrudComponent,
    MyChartComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot({principal: principalReducer}),
      /* ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}) */
      ChartModule //pour dashboard 
  ],
  providers: [
    ProduitMockService,
    ProduitService,
    AppService,
    UserService,
    {provide:HTTP_INTERCEPTORS, useClass: XhrInterceptor, multi: true},
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
