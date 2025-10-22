import { CommonModule } from '@angular/common';
import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-passenger',
  imports: [CommonModule, FormsModule],
  templateUrl: './passenger.html',
  styleUrls: ['./passenger.css']
})
export class Passenger implements AfterViewInit {
  from = '';
  to = '';
  date = '';
  closeDate = '';
  closeTime = '';
  price = '';
  freeSeats = 0;
  Depaturetime = '';
  Duration = '';
  Seat_no = '';

  fullname = '';
  mobileNo = '';
  NIC = '';

  @ViewChild('nameField') nameField!: ElementRef<HTMLInputElement>;

  constructor(private route: ActivatedRoute, private router: Router) { }

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
      this.Seat_no = params['seats'];
    });
  }

  ngAfterViewInit() {
    this.nameField.nativeElement.focus();
  }

  proceedToBook() {
    // Check each field
    if (!this.fullname.trim()) {
      alert('Please enter your Full Name');
      this.nameField.nativeElement.focus();
      return;
    }

    if (!/^[a-zA-Z\s]+$/.test(this.fullname)) {
      alert('Name must contain letters only!');
      this.nameField.nativeElement.focus();
      return;
    }

    if (!this.mobileNo.trim()) {
      alert('Please enter your Mobile Number');
      const mobileField = document.getElementById('mobileNo') as HTMLInputElement;
      mobileField?.focus();
      return;
    }

    if (!/^\d+$/.test(this.mobileNo)) {
      alert('Mobile number must contain numbers only!');
      const mobileField = document.getElementById('mobileNo') as HTMLInputElement;
      mobileField?.focus();
      return;
    }

    if (!this.NIC.trim()) {
      alert('Please enter your NIC Number');
      const nicField = document.getElementById('NIC') as HTMLInputElement;
      nicField?.focus();
      return;
    }

    // If all valid, navigate
    this.router.navigate(['ticket'], {
      queryParams: {
        from: this.from,
        to: this.to,
        date: this.date,
        closeDate: this.closeDate,
        closeTime: this.closeTime,
        price: this.price,
        Depaturetime: this.Depaturetime,
        Duration: this.Duration,
        Seat_no: this.Seat_no,
        fullname: this.fullname,
        mobileNo: this.mobileNo,
        NIC: this.NIC
      }
    });
  }

  focusNext(event: KeyboardEvent, nextFieldId: string) {
    event.preventDefault();
    const nextField = document.getElementById(nextFieldId) as HTMLInputElement;
    nextField?.focus();
  }

  filterNumbers(event: Event) {
    const input = event.target as HTMLInputElement;
    input.value = input.value.replace(/[^0-9]/g, '');
    this.mobileNo = input.value;
  }
}
