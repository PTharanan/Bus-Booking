import { Component, AfterViewInit } from '@angular/core';
import Chart from 'chart.js/auto';


@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard  implements AfterViewInit {
  availableBuses: number = 10;
  availableRoutes: number = 4;
  runningBuses: number = 8;
  repairBuses: number = 2;

  ngAfterViewInit() {
    new Chart('busBarChart', {
      type: 'bar',
      data: {
        labels: ['Available Buses', 'Running Buses', 'Repair Buses'],
        datasets: [{
          label: 'Buses Satus',
          data: [this.availableBuses, this.runningBuses, this.repairBuses],
          backgroundColor: ['#38bdf8', '#22c55e', '#f87171'],
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: false },
          title: { display: true, text: 'Buses Satus' }
        }
      }
    });

    new Chart('routePieChart', {
      type: 'pie',
      data: {
        labels: ['Available Buses', 'Repair Buses'],
        datasets: [{
          data: [this.availableBuses, 10 - this. runningBuses],
          backgroundColor: ['#0ea5e9', '#f52044ff'],
        }]
      },
      options: {
        responsive: true,
        plugins: {
          title: { display: true, text: 'Buses' }
        }
      }
    });
  }

}
