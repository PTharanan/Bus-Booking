// search.ts
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BusBookCard } from '../../../reusable/bus-book-card/bus-book-card';

@Component({
  selector: 'app-search',
  imports:[BusBookCard, CommonModule],
  templateUrl:'./search.html',
  styleUrls:['./search.css']
})
export class Search{
  from: string='';
  to: string='';
  date: Date = new Date();
  closeDate: Date = new Date();
  closeTime:string='16:00';
  price:string='1,527.00';
  freeSeats:number=37;
  Depaturetime:string='17:00';
  Duration:string='5:30';

  formattedDate:string='';
  formattedCloseDate:string='';

  constructor(private route:ActivatedRoute, private router:Router){}

  ngOnInit(){
    this.route.queryParams.subscribe(params=>{
      this.from = params['from']||'';
      this.to = params['to']||'';
      this.date = params['from_date'] ? new Date(params['from_date']) : new Date();
      this.closeDate = params['closeDate'] ? new Date(params['closeDate']) : new Date();

      this.closeTime = params['closeTime']||this.closeTime;
      this.price = params['price']||this.price;
      this.Depaturetime = params['Depaturetime']||this.Depaturetime;
      this.freeSeats = params['freeSeats']? +params['freeSeats']: this.freeSeats;
      this.Duration = params['Duration']||this.Duration;

      // Format as string for bus-card
      this.formattedDate = this.date.toISOString().slice(0,10);
      this.formattedCloseDate = this.closeDate.toISOString().slice(0,10);
    });
  }

  modify(){
    this.router.navigate([''],{
      queryParams:{
        from:this.from,
        to:this.to,
        from_date:this.date.toISOString().slice(0,10)
      }
    });
  }
}
