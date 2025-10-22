import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bus-book-card',
  imports: [],
  templateUrl: './bus-book-card.html',
  styleUrls: ['./bus-book-card.css']
})
export class BusBookCard {
  @Input() from: string = '';
  @Input() to: string = '';
  @Input() date: string = '';
  @Input() closeDate: string = '';
  @Input() closeTime: string = '16:00';
  @Input() price: string = '1,527.00';
  @Input() freeSeats: number = 37;

  @Input() Depaturetime: string = '17:00';
  @Input() Duration: string = '5:30';  // <-- இந்த பத்தியை @Input() சேர்க்க வேண்டும்

  constructor(private router: Router) { }

  seatbook() {
    this.router.navigate(['seats'], {
      queryParams: {
        from: this.from,
        to: this.to,
        date: this.date,
        closeDate: this.closeDate,
        closeTime: this.closeTime,
        price: this.price,
        Depaturetime: this.Depaturetime,
        freeSeats: this.freeSeats,
        Duration: this.Duration
      }
    });
  }
}
