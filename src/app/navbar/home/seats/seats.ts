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
  rows = [
    [1, 2, null, 3, 4, 5],
    [6, 7, null, 8, 9, 10],
    [11, 12, null, 13, 14, 15],
    [16, 17, null, 18, 19, 20],
    [21, 22, null, 23, 24, 25],
    [26, 27, null, 28, 29, 30],
    [31, 32, null, 33, 34, 35],
    [36, 37, null, 38, 39, 40],
    [41, 42, null, 43, 44, 45],
    [46, 47, null, 48, 49, 50],
    [51, 52, null, 53, 54, 55]
  ];

  seatStatus: { [key: number]: string } = {
    3: 'booked',
    5: 'booked',
    10: 'booked',
    16: 'processing',
    23: 'booked',
    31: 'processing',
    40: 'booked',
    52: 'booked',
  };

  toggleSeat(seat: number | null) {
    if (!seat) return;
    const status = this.seatStatus[seat];
    if (status === 'booked') return;
    this.seatStatus[seat] = status === 'processing' ? 'available' : 'processing';
  }

  getSeatStatus(seat: number | null): string {
    if (!seat) return '';
    return this.seatStatus[seat] || 'available';
  }
}
