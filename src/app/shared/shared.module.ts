import  {NgModule} from '@angular/core';
import { CrudComponent } from '../shared/crud/crud.component';
import { SampleComponent } from '../shared/crud/sample/sample.component';
import { UploadComponent } from '../shared/crud/upload/upload.component';
import { ReactiveFormsModule } from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
    imports: [ReactiveFormsModule,BrowserModule],
    declarations:[
        CrudComponent,
        SampleComponent,
        UploadComponent
    ]
})
export class SharedModule{

}