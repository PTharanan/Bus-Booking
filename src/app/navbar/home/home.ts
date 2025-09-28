import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  fromRoute: string = '';
  toRoute: string = '';
  dateData: string = '';

  constructor(private router: Router) { }

  getBusData(from: string, to: string, date: string) {
    this.fromRoute = from;
    this.toRoute = to;
    this.dateData = date;

    const selectedDate = new Date(this.dateData);
    const currentDate = new Date();

    // நேரத்தை 0 பண்ணி, compare பண்ணும் போது நேரம் இடையிலா வரும்
    selectedDate.setHours(0, 0, 0, 0);
    currentDate.setHours(0, 0, 0, 0);

    if (this.fromRoute === this.toRoute) {
      alert('No Route Found - Change Location');
      return;
    }

    else if (selectedDate < currentDate) {
      alert('Past Date Selected - Change Date');
      return;
    }

    else {
      this.router.navigate(['search'], { queryParams: { from: this.fromRoute, to: this.toRoute, from_date: this.dateData } });

    }
  }
}

