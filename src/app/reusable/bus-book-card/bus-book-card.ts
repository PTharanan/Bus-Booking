import { Component, Input } from '@angular/core';

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
  @Input() closeTime:string = "16:00";
  @Input() price:string = "1,527.00";
  @Input() freeSeats:number = 37;
  Duration: string = "5:30 Hours";
}
