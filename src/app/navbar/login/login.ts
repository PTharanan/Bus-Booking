import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  adminName: string = "Admin";
  adminPassword: string = "Admin";
  constructor(private router: Router) {}

  adminData(User: string, Password: string) {

    if (User === this.adminName && Password === this.adminPassword) {
      localStorage.setItem('isLogin', 'true');
      //admin-panel 
      this.router.navigate(['admin/dashboard']);
    }
    else {
      alert('Invalid Data');

    }
  }
}
