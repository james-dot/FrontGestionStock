import  {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';

import { NavbarComponent } from '../menu/navbar/navbar.component';
import { SidebarComponent } from '../menu/sidebar/sidebar.component';

@NgModule({
    imports: [RouterModule,BrowserModule],
    declarations:[
        NavbarComponent,
        SidebarComponent
    ],
    exports: [
        NavbarComponent,
        SidebarComponent,
  ]
})
export class MenuModule{}