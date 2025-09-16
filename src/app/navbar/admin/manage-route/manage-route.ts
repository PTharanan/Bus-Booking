import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ROUTE_DATA } from '../../../data/route-data'
import { Table } from '../../../table/table';

@Component({
  selector: 'app-manage-route',
  imports: [CommonModule, Table],
  templateUrl: './manage-route.html',
  styleUrl: './manage-route.css'
})
export class ManageRoute {
  showAddRoute = false;

  toggleAddRoute() {
    this.showAddRoute = !this.showAddRoute;
  }

  routes = ROUTE_DATA;

  columns = [
    { key: 'routeId', label: 'Route ID' },
    { key: 'from', label: 'From' },
    { key: 'to', label: 'To' },
    { key: 'travalTime', label: 'Traval Time' },
    { key: 'price', label: 'Price' }
  ];
}
