import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SCHEDULE_DATA } from '../../../data/schedule-data'
import { Table } from '../../../reusable/table/table';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-manage-schedule',
  imports: [CommonModule, Table, ReactiveFormsModule],
  templateUrl: './manage-schedule.html',
  styleUrl: './manage-schedule.css'
})
export class ManageSchedule {
  showFormBox = false;

  toggleAddSchedule() {
    this.showFormBox = !this.showFormBox;
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
