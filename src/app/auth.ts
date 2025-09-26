import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Auth {
  private loginStatus = new BehaviorSubject<boolean>(this.getInitialStatus());
  isLoggedIn$ = this.loginStatus.asObservable();

  constructor(private router: Router) { }

  login() {
    localStorage.setItem('isLogin', 'true');
    this.loginStatus.next(true);
  }

  logout() {
    localStorage.removeItem('isLogin');
    this.loginStatus.next(false);
    this.router.navigate(['/login']);
  }

  private getInitialStatus(): boolean {
    return localStorage.getItem('isLogin') === 'true';
  }

  canActivate(): boolean {
    const isLogin = this.getInitialStatus();

    if (isLogin) {
      return true;
    } else {
      alert('Access Denied. Please login.');
      this.router.navigate(['/login']);
      return false;
    }
  }

}
