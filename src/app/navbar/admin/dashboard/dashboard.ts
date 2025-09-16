import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {
  availableBuses: number = 10;
  availableRoutes: number = 4;
  runningBuses: number = 8;
  repairBuses: number = 2;
}
