import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss'],
})
export class LineChartComponent implements OnInit {

  @Input()
  chartDatasets = [
    { data: [], label: '' },
  ];

  @Input()
  chartLabels: Array<string> = [];

  chartType = 'line';

  chartColors = [
    {
      backgroundColor: 'rgb(247 147 26 / 13%)',
      borderColor: 'rgba(200, 99, 132, .7)',
      borderWidth: 2,
    },
    {
      backgroundColor: 'rgba(0, 137, 132, .2)',
      borderColor: 'rgba(0, 10, 130, .7)',
      borderWidth: 2,
    }
  ];

  ngOnInit(): void {
  }

  chartOptions: any = {
    responsive: true
  };

  chartClicked(event: any) {
    console.log(event);
  }

  chartHovered(event: any) {
    console.log(event);
  }
}