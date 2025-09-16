import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-table',
  imports: [CommonModule],
  templateUrl: './table.html',
  styleUrl: './table.css'
})
export class Table {
  @Input() columns: { key: string; label: string }[] = [];
  @Input() data: any[] = [];

  deleteRow(index: number) {
    if (confirm('Are you sure you want to delete this row?')) {
      this.data.splice(index, 1);
    }
  }

}
