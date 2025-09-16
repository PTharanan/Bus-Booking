import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Table } from '../../../table/table';
import { BUS_DATA } from '../../../data/bus-data'

@Component({
  selector: 'app-manage-bus',
  imports: [CommonModule, Table],
  templateUrl: './manage-bus.html',
  styleUrl: './manage-bus.css'
})
export class ManageBus {
  showAddBox = false;

  toggleAddBox() {
    this.showAddBox = !this.showAddBox;
  }

  buses = BUS_DATA

  columns = [
    { key: 'busNo', label: 'Bus No' },
    { key: 'contactNo', label: 'Contact No' },
    { key: 'conductorNo', label: 'Conductor' },
    { key: 'seatsNo', label: 'Seats' },
    { key: 'available', label: 'Available' }
  ];

}
