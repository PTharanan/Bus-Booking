import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Table } from '../../../reusable/table/table';
import { BUS_DATA } from '../../../data/bus-data';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';



@Component({
  selector: 'app-manage-bus',
  imports: [CommonModule, Table, ReactiveFormsModule],
  templateUrl: './manage-bus.html',
  styleUrl: './manage-bus.css'
})
export class ManageBus {
  showFormBox = false;
  Title: any = "";

  toggleFormBox() {
    this.showFormBox = !this.showFormBox;
    this.Title = "Add Bus Deatils";
  }

  buses = BUS_DATA

  columns = [
    { key: 'busNo', label: 'Bus No' },
    { key: 'contactNo', label: 'Contact No' },
    { key: 'conductorNo', label: 'Conductor' },
    { key: 'seatsNo', label: 'Seats' },
    { key: 'available', label: 'Available' }
  ];
  selectedRow: any = null;

  handleBusEdit(row: any) {
    this.selectedRow = row;
    this.busForm.patchValue(row);
    this.showFormBox = true;
    this.Title = "Edit Bus Deatils";
  }

  @Input() formData: any;

  busForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.busForm = this.fb.group({
      busNo: [''],
      contactNo: [''],
      conductorNo: [''],
      seatsNo: [''],
      available: ['']
    });
  }

}
