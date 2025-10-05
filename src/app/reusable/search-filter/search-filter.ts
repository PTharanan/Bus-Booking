import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-filter',
  imports: [FormsModule],
  templateUrl: './search-filter.html',
  styleUrl: './search-filter.css'
})
export class SearchFilter {
  Searchdata: string = "";
  @Input() filteredData: string = this.Searchdata;
  @Input() btnName: string = "";
  @Input() placehol: string = "";
  @Output() searchData = new EventEmitter<string>();
  @Output() toggleFormBox = new EventEmitter<void>();

  triggerToggle() {
    this.toggleFormBox.emit();
  }

  onInputChange() {
    this.searchData.emit(this.Searchdata);
  }

}
