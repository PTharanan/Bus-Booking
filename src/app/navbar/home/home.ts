import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  fromRoute: string = '';
  toRoute: string = '';
  dateData: string = '';

  @ViewChild('fromRef') fromRef!: ElementRef;
  @ViewChild('toRef') toRef!: ElementRef;
  @ViewChild('dateRef') dateRef!: ElementRef;

  constructor(private router: Router, private route: ActivatedRoute) { }

  getBusData() {
    if (!this.fromRoute) {
      alert('Please select From location');
      this.fromRef.nativeElement.focus();
      return;
    }

    if (!this.toRoute) {
      alert('Please select To location');
      this.toRef.nativeElement.focus();
      return;
    }

    if (!this.dateData) {
      alert('Please select a Date');
      this.dateRef.nativeElement.focus();
      return;
    }

    const selectedDate = new Date(this.dateData);
    const currentDate = new Date();
    selectedDate.setHours(0, 0, 0, 0);
    currentDate.setHours(0, 0, 0, 0);

    if (this.fromRoute === this.toRoute) {
      alert('No Route Found - Change Location');
      this.toRef.nativeElement.focus();
      return;
    }

    if (selectedDate < currentDate) {
      alert('Past Date Selected - Change Date');
      this.dateRef.nativeElement.focus();
      return;
    }

    this.router.navigate(['search'], {
      queryParams: {
        from: this.fromRoute,
        to: this.toRoute,
        from_date: this.dateData
      }
    });
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.fromRoute = params['from'];
      this.toRoute = params['to'];
      this.dateData = params['from_date'];
    });
  }
}