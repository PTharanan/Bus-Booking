import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ROUTE_DATA } from '../../../data/route-data'
import { Table } from '../../../reusable/table/table';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchFilter } from '../../../reusable/search-filter/search-filter';

@Component({
  selector: 'app-manage-route',
  imports: [CommonModule, Table, ReactiveFormsModule, FormsModule, SearchFilter],
  templateUrl: './manage-route.html',
  styleUrl: './manage-route.css'
})
export class ManageRoute {
  btnName: string = "Add Route";
  placehol: string = "Route ID...";
  showFormBox = false;
  Title: any = "";
  Searchdata: string = "";

  handleText(value: string) {
    this.Searchdata = value;
  }

  filtered() {
    if (!this.Searchdata || this.Searchdata.toString().trim() === '') {
      return this.routes;
    }
    return this.routes.filter(route =>
      route.routeId.toString().includes(this.Searchdata.toString())
    );
  }

  toggleFormBox() {
    this.showFormBox = !this.showFormBox;
    this.Title = "Add New Route";
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
    this.Title = "Edit Route Deatils";
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
