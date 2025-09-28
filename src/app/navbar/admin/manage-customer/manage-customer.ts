import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CUSTOMER_DATA } from '../../../data/customer-data'
import { Table } from '../../../reusable/table/table';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-manage-customer',
  imports: [CommonModule, Table, ReactiveFormsModule, FormsModule],
  templateUrl: './manage-customer.html',
  styleUrl: './manage-customer.css'
})
export class ManageCustomer {
  showFormBox = false;
  TicketCode: string = '';


  filtered() {
    if (!this.TicketCode || this.TicketCode.toString().trim() === '') {
      return this.customer;
    }
    return this.customer.filter(cus =>
      cus.tCode.toString().includes(this.TicketCode.toString())
    );
  }



  toggleAddRoute() {
    this.showFormBox = !this.showFormBox;
  }

  customer = CUSTOMER_DATA;

  columns = [
    { key: 'tCode', label: 'Ticket Code' },
    { key: 'scheduleId', label: 'Schedule ID' },
    { key: 'seatNo', label: 'Seat No' },
    { key: 'cusName', label: 'Name' },
    { key: 'contactNo', label: 'Contact No' }
  ];

  selectedRow: any = null;

  handleRouteEdit(row: any) {
    this.selectedRow = row;
    this.customerForm.patchValue(row);
    this.showFormBox = true;
  }

  @Input() formData: any;

  customerForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.customerForm = this.fb.group({
      scheduleId: [''],
      seatNo: [''],
      cusName: [''],
      contactNo: ['']
    });
  }
}
