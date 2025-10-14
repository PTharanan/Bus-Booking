import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from '../../auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login implements AfterViewInit {
  adminName: string = "Admin";
  adminPassword: string = "Admin";

  @ViewChild('username', { static: true }) usernameInput!: ElementRef;
  @ViewChild('password', { static: true }) passwordInput!: ElementRef;

  constructor(private authService: Auth, private router: Router) { }

  ngAfterViewInit() {
    // பக்கம் load ஆனவுடன் username input-க்கு focus
    this.usernameInput.nativeElement.focus();
  }

  handleKey(event: Event, field: string) {
    const keyboardEvent = event as KeyboardEvent;
    if (keyboardEvent.key === 'Enter') {
      if (field === 'username') {
        this.passwordInput.nativeElement.focus();
      } else if (field === 'password') {
        this.adminData(
          this.usernameInput.nativeElement.value,
          this.passwordInput.nativeElement.value
        );
      }
    }
  }

  adminData(User: string, Password: string) {
    if (User === this.adminName && Password === this.adminPassword) {
      this.authService.login();
      this.router.navigate(['admin/dashboard']);
    } else {
      alert('Invalid Data');

      this.usernameInput.nativeElement.value = '';
      this.passwordInput.nativeElement.value = '';
      this.usernameInput.nativeElement.focus();
    }
  }

  showPassword = false;

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }
}