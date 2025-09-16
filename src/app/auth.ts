import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class Auth {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const isLogin = localStorage.getItem('isLogin');
    
    if (isLogin === 'true') {
      return true; // Access allowed
    } else {
      alert('Access Denied. Please login.');
      this.router.navigate(['/login']);
      return false; //Block access
    }
  }
}
