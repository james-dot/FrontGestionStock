import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-my-chart',
  templateUrl: './my-chart.component.html',
  styleUrls: ['./my-chart.component.css']
})
export class MyChartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  type : string = 'bar'; //et bar .....

  @Input()
  title: string ='Titre';

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
  options ={
    responsive: true,
    maintainAspectRatio: false,
  };

}
