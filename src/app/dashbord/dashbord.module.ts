import  {NgModule} from '@angular/core';
import { DashbordComponent } from '../dashbord/dashbord.component';
import { MyChartComponent } from '../dashbord/my-chart/my-chart.component';
import { ChartModule } from 'angular2-chartjs';

@NgModule({
    imports: [ChartModule],
    declarations:[
        DashbordComponent,
        MyChartComponent
    ]
})
export class DashbordModule{}