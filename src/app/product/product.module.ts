import  {NgModule} from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';


@NgModule({
    imports: [ReactiveFormsModule,SharedModule],
    declarations:[
        ProductComponent
    ]
})
export class ProductModule{}