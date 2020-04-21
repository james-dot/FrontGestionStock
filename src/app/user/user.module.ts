import  {NgModule} from '@angular/core';
import { UserComponent } from '../user/user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';


@NgModule({
    imports: [ReactiveFormsModule,SharedModule],
    declarations:[
        UserComponent
    ]
})
export class UserModule{}