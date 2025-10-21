import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BusBookCard } from '../../../reusable/bus-book-card/bus-book-card';

@Component({
  selector: 'app-seats',
  imports: [CommonModule, BusBookCard],
  templateUrl: './seats.html',
  styleUrl: './seats.css'
})
export class Seats {
  @Input() from: string = "";
  @Input() to: string = "";
  @Input() date!: Date;
  @Input() closeDate!: Date;
  @Input() closeTime: string = "16:00";
  @Input() price: string = "1,527.00";
  @Input() freeSeats: number = 37;
  Depaturetime: string = "17:00";
  Duration: string = "5:30";

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.from = params['from'];
      this.to = params['to'];
      this.date = params['from_date'];
    });
  }
}
