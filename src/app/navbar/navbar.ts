import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Auth } from '../auth';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, CommonModule, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  isLogin = false;

  constructor(private authService: Auth) { }

  ngOnInit() {
    this.authService.isLoggedIn$.subscribe(status => {
      this.isLogin = status;
    });
  }

  logout() {
    this.authService.logout();
  }

}
