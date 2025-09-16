import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, CommonModule, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
    isLogin: boolean = false;

  ngOnInit() {
    // Login status localStorage-இல் இருந்தா அதை பார்க்கலாம்
    const status = localStorage.getItem('isLogin');
    this.isLogin = status === 'true';
  }

  logout() {
    localStorage.setItem('isLogin', 'false');
    localStorage.removeItem('isLogin');
    this.isLogin = false;
  }
}
