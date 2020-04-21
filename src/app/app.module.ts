import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http';
import { NgModule } from '@angular/core';
import {StoreModule} from '@ngrx/store';
import {ChartModule} from 'angular2-chartjs';
import { AppComponent } from './app.component';
import {AppRoutingModule} from './app.routing.module';
import { HomeComponent } from './home/home.component';
import { XhrInterceptor } from './authentication/xhr.interceptor';
import {CookieService} from 'ngx-cookie-service';
import { principalReducer } from './authentication/shared/principal.reducer';
import {AuthenticationModule} from './authentication/authentication.module';
import {DashbordModule} from './dashbord/dashbord.module';
import {MenuModule} from './menu/menu.module';
import { ProductModule } from './product/product.module';
import { UserModule } from './user/user.module';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
 ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    AuthenticationModule,
    DashbordModule,
    MenuModule,
    ProductModule,
    UserModule,
    SharedModule,
    StoreModule.forRoot({principal: principalReducer}),
    ChartModule //pour dashboard 
  ],
  providers: [
       {provide:HTTP_INTERCEPTORS, useClass: XhrInterceptor, multi: true},
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
