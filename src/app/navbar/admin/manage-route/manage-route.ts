import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ROUTE_DATA } from '../../../data/route-data'
import { Table } from '../../../reusable/table/table';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-manage-route',
  imports: [CommonModule, Table, ReactiveFormsModule],
  templateUrl: './manage-route.html',
  styleUrl: './manage-route.css'
})
export class ManageRoute {
  showFormBox = false;

  toggleAddRoute() {
    this.showFormBox = !this.showFormBox;
  }

  routes = ROUTE_DATA;

  columns = [
    { key: 'routeId', label: 'Route ID' },
    { key: 'from', label: 'From' },
    { key: 'to', label: 'To' },
    { key: 'travalTime', label: 'Traval Time' },
    { key: 'price', label: 'Price' }
  ];

  selectedRow: any = null;

  handleRouteEdit(row: any) {
    this.selectedRow = row;
    this.routeForm.patchValue(row);
    this.showFormBox = true;
  }

  @Input() formData: any;

  routeForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.routeForm = this.fb.group({
      routeId: [''],
      from: [''],
      to: [''],
      travalTime: [''],
      price: ['']
    });
  }

}
