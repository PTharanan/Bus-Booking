// seats.ts
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-seats',
  imports: [CommonModule],
  templateUrl: './seats.html',
  styleUrls: ['./seats.css']
})
export class Seats {
  from: string = '';
  to: string = '';
  date: string = '';
  closeDate: string = '';
  closeTime: string = '16:00';
  price: string = '1,527.00';
  freeSeats: number = 37;
  Depaturetime: string = '17:00';
  Duration: string = '5:30';

  rows = [
    [1,2,null,3,4,5],
    [6,7,null,8,9,10],
    [11,12,null,13,14,15],
    [16,17,null,18,19,20],
    [21,22,null,23,24,25],
    [26,27,null,28,29,30],
    [31,32,null,33,34,35],
    [36,37,null,38,39,40],
    [41,42,null,43,44,45],
    [46,47,null,48,49,50],
    [51,52,null,53,54,55]
  ];

  seatStatus: { [key:number]: string } = {
    3:'booked',5:'booked',10:'booked',23:'booked',40:'booked',52:'booked'
  };

  maxSelectableSeats = 5;

  constructor(private route: ActivatedRoute, private router: Router){}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.from = params['from'] || '';
      this.to = params['to'] || '';
      this.date = params['date'] || '';
      this.closeDate = params['closeDate'] || '';
      this.closeTime = params['closeTime'] || '16:00';
      this.price = params['price'] || '1,527.00';
      this.Depaturetime = params['Depaturetime'] || '17:00';
      this.freeSeats = params['freeSeats'] ? +params['freeSeats'] : 37;
      this.Duration = params['Duration'] || '5:30';
    });
  }

  toggleSeat(seat: number|null){
    if(!seat) return;
    const status = this.seatStatus[seat];
    if(status==='booked') return;
    const selectedSeats = Object.values(this.seatStatus).filter(s=>s==='processing').length;
    if(!status || status==='available'){
      if(selectedSeats>=this.maxSelectableSeats){ alert('You can only choose a maximum of 5 seats!'); return;}
      this.seatStatus[seat]='processing';
    }else if(status==='processing'){
      this.seatStatus[seat]='available';
    }
  }

  getSeatStatus(seat:number|null): string{
    if(!seat) return '';
    return this.seatStatus[seat] || 'available';
  }

  getSelectedSeats(): number[]{
    return Object.keys(this.seatStatus)
      .filter(seat=>this.seatStatus[+seat]==='processing')
      .map(seat=>+seat);
  }

  proceedBooking(){
    const selectedSeats = this.getSelectedSeats();
    if(selectedSeats.length===0){ alert('Please select at least one seat before proceeding!'); return;}

    this.router.navigate(['passenger'],{
      queryParams:{
        from:this.from,
        to:this.to,
        date:this.date,
        Depaturetime:this.Depaturetime,
        price:this.price,
        seats:selectedSeats.join(','),
        freeSeats:this.freeSeats,
        Duration:this.Duration,
        closeDate:this.closeDate,
        closeTime:this.closeTime
      }
    });
  }

  hideSeatChart(){
    // Pass all data as string
    this.router.navigate(['search'],{
      queryParams:{
        from:this.from,
        to:this.to,
        from_date:this.date,
        closeDate:this.closeDate,
        closeTime:this.closeTime,
        price:this.price,
        Depaturetime:this.Depaturetime,
        freeSeats:this.freeSeats,
        Duration:this.Duration
      }
    });
  }
}
