import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SCHEDULE_DATA } from '../../../data/schedule-data'
import { Table } from '../../../reusable/table/table';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchFilter } from '../../../reusable/search-filter/search-filter';

@Component({
  selector: 'app-manage-schedule',
  imports: [CommonModule, Table, ReactiveFormsModule, FormsModule, SearchFilter],
  templateUrl: './manage-schedule.html',
  styleUrl: './manage-schedule.css'
})
export class ManageSchedule {
  btnName: string = "Add Schedule";
  placehol: string = "Schedule ID...";
  showFormBox = false;
  Title: any = "";
  Searchdata: string = "";

  handleText(value: string) {
    this.Searchdata = value;
  }

  filtered() {
    if (!this.Searchdata || this.Searchdata.toString().trim() === '') {
      return this.schedules;
    }
    return this.schedules.filter(schedule =>
      schedule.scheduleId.toString().includes(this.Searchdata.toString())
    );
  }

  toggleFormBox() {
    this.showFormBox = !this.showFormBox;
    this.Title = "Add New Schedule";
  }

  schedules = SCHEDULE_DATA;

  columns = [
    { key: 'scheduleId', label: 'Schedule ID' },
    { key: 'busNo', label: 'Bus No' },
    { key: 'date', label: 'Date' },
    { key: 'startTime', label: 'Start Time' },
    { key: 'routeId', label: 'Route ID' }
  ];

  selectedRow: any = null;

  handleScheduleEdit(row: any) {
    this.selectedRow = row;
    this.scheduleForm.patchValue(row);
    this.showFormBox = true;
    this.Title = "Edit Schedule Deatils";
  }

  @Input() formData: any;

  scheduleForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.scheduleForm = this.fb.group({
      scheduleId: [''],
      busNo: [''],
      date: [''],
      startTime: [''],
      routeId: ['']
    });
  }
}
