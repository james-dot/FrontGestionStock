import {NgModule} from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import {ProduitComponent} from './produit/produit.component';
import {DashbordComponent} from './dashbord/dashbord.component';
import {ProduitResolver} from './produit/produit.resolver';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';

export const appRoutes: Routes=[
    {
        path : 'login',component: LoginComponent
   }, 
   {
    path : 'home',
    component: HomeComponent,
    children :[
        {
            path : 'produit',
            component: ProduitComponent,
           resolve:{
               produits: ProduitResolver
           }, 
           outlet: 'contentOutlet'
        },
        
         {
             path : 'dashbord',
             component: DashbordComponent,
             outlet: 'contentOutlet'
        }, 
        
    ]
    
    },      

        
        {
            path: '', redirectTo: '/home', pathMatch: 'full'
        }
]

@NgModule({
    imports: [
        RouterModule.forRoot(
                        appRoutes,
                        {enableTracing:false}
                        )


    ],
    exports: [RouterModule],
    providers:[ProduitResolver]
})
export class AppRoutingModule{

}