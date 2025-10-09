import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { BusBookCard } from './bus-book-card/bus-book-card';

@Component({
  selector: 'app-search',
  imports: [BusBookCard],
  templateUrl: './search.html',
  styleUrl: './search.css'
})
export class Search {
  from: string = '';
  to: string = '';
  date: Date = new Date();
  Duration:string = "5:30 Hours";

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.from = params['from'];
      this.to = params['to'];
      this.date = params['from_date'];
    });
  }
  modify() {
    this.router.navigate([''], { queryParams: { from: this.from, to: this.to, from_date: this.date } });
  }
}
