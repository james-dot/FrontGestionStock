import {NgModule} from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import {ProductComponent} from './product/product.component';
import {DashbordComponent} from './dashbord/dashbord.component';
import {ProductResolver} from './product/shared/service/product.resolver.service';
import {UserResolver} from './user/shared/service/user.resolver.service';
import {LoginComponent} from './authentication/login/login.component';
import {HomeComponent} from './home/home.component';
import {UserComponent} from './user/user.component';

export const appRoutes: Routes=[
    {path : 'login',component: LoginComponent}, 
    {path : 'home',component: HomeComponent},
    {path: '', redirectTo: '/home', pathMatch: 'full'}, 
    {path : 'produit',component: ProductComponent,
       resolve:{
           produits: ProductResolver
       }
    },
    {path : 'dashbord',component: DashbordComponent}, 
    {path : 'user',component: UserComponent,
        resolve:{
            users: UserResolver
        }
   }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
                        appRoutes,
                        {enableTracing:false}
                        )
    ],
    exports: [RouterModule],
    providers:[ProductResolver,UserResolver]
})
export class AppRoutingModule{}