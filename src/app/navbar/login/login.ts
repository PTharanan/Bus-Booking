import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from '../../auth';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  adminName: string = "Admin";
  adminPassword: string = "Admin";

  constructor(private authService: Auth, private router: Router) { }

  adminData(User: string, Password: string) {
    if (User === this.adminName && Password === this.adminPassword) {
      this.authService.login(); // ✅ triggers UI update
      this.router.navigate(['admin/dashboard']);
    } else {
      alert('Invalid Data');
    }

  }
}
