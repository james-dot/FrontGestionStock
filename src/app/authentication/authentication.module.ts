import  {NgModule} from '@angular/core';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [ReactiveFormsModule,SharedModule],
    declarations:[
        LoginComponent
    ]
})
export class AuthenticationModule{}