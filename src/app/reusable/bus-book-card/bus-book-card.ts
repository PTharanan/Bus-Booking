import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bus-book-card',
  imports: [],
  templateUrl: './bus-book-card.html',
  styleUrl: './bus-book-card.css'
})
export class BusBookCard {
  @Input() from: string = "";
  @Input() to: string = "";
  @Input() date!: Date;
  @Input() closeDate!: Date;
  @Input() closeTime: string = "16:00";
  @Input() price: string = "1,527.00";
  @Input() freeSeats: number = 37;
  Depaturetime: string = "17:00";
  Duration: string = "5:30";

  constructor(private router: Router) { }

  seatbook() {

    this.router.navigate(['seats'], {});
  }


}
