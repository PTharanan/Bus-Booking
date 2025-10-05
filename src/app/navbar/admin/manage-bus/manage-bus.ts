import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Table } from '../../../reusable/table/table';
import { BUS_DATA } from '../../../data/bus-data';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchFilter } from '../../../reusable/search-filter/search-filter';

@Component({
  selector: 'app-manage-bus',
  imports: [CommonModule, Table, ReactiveFormsModule, FormsModule, SearchFilter],
  templateUrl: './manage-bus.html',
  styleUrl: './manage-bus.css'
})
export class ManageBus {
  btnName:string="Add Bus";
  placehol:string="Bus No...";
  showFormBox = false;
  Title: any = "";
  Searchdata: string = "".toLowerCase();

  handleText(value: string) {
    this.Searchdata = value;
    console.log(value);
  }


  filtered() {
    if (!this.Searchdata || this.Searchdata.toString().trim() === '') {
      return this.buses;
    }
    return this.buses.filter(bus =>
      bus.busNo.toString().toLowerCase().includes(this.Searchdata.toString())
    );
  }

  toggleFormBox() {
    this.showFormBox = !this.showFormBox;
    this.Title = "Add Bus Details";
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
