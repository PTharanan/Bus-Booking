import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-table',
  imports: [CommonModule],
  templateUrl: './table.html',
  styleUrl: './table.css'
})
export class Table {
  @Input() columns: { key: string; label: string }[] = [];
  @Input() filteredData: any[] = [];

  @Output() editClicked = new EventEmitter<any>();

  onEdit(index: number, row: any) {
    this.editClicked.emit(row); 
    this.editClicked.emit(index);
  }

  deleteRow(index: number) {
    if (confirm('Are you sure you want to delete this row?')) {
      this.filteredData.splice(index, 1);
    }
  }

}
