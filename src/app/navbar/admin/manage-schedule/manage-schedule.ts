import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SCHEDULE_DATA } from '../../../data/schedule-data'
import { Table } from '../../../table/table';

@Component({
  selector: 'app-manage-schedule',
  imports: [CommonModule, Table],
  templateUrl: './manage-schedule.html',
  styleUrl: './manage-schedule.css'
})
export class ManageSchedule {
  showAddSchedule = false;

  toggleAddSchedule() {
    this.showAddSchedule = !this.showAddSchedule;
  }

  schedules = SCHEDULE_DATA;

  columns = [
    { key: 'scheduleId', label: 'Schedule ID' },
    { key: 'busNo', label: 'Bus No' },
    { key: 'date', label: 'Date' },
    { key: 'startTime', label: 'Start Time' },
    { key: 'routeId', label: 'Route ID' }
  ];
}
