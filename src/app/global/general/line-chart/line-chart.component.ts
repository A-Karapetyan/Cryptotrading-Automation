import { Component } from '@angular/core';

@Component({
  selector: 'line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss'],
})
export class LineChartComponent {
  chartType = 'line';

  chartDatasets = [
    { data: [39402, 39303, 39346, 39354, 39437, 39404, 39467], label: 'BTC' },
  ];

  chartLabels = ['16-04-2022', '17-04-2022', '18-04-2022', '19-04-2022', '20-04-2022', '21-04-2022', '2022-04-2022'];

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