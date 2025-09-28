import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  imports: [],
  templateUrl: './search.html',
  styleUrl: './search.css'
})
export class Search {
  from: string = '';
  to: string = '';
  date: Date = new Date();

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.from = params['from'];
      this.to = params['to'];
      this.date = params['from_date'];
    });
  }
}
