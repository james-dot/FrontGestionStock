import { Component, AfterViewChecked,Input, ViewChild } from '@angular/core';
import {ChartComponent} from 'angular2-chartjs';

@Component({
  selector: 'app-my-chart',
  templateUrl: './my-chart.component.html',
  styleUrls: ['./my-chart.component.css']
})
export class MyChartComponent implements AfterViewChecked {
  
  @ViewChild('graphElement')
  private graphElement: ChartComponent;

  @Input()
  type : string = 'bar'; //et bar .....

  @Input()
  title: string ='Titre';

  @Input()
  data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "My dataset 1",
        data: [65, 59, 80, 56, 55, 40]
      },
      {
        label: "My dataset 2",
        data: [40, 59, 70, 56, 55, 35]
      }
    ]
  };

  @Input()
  options ={
    responsive: true,
    maintainAspectRatio: false,
  };

  constructor() { }

  ngAfterViewChecked(){
     this.graphElement.chart.update();
  }

}
