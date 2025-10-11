import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-admin',
  imports: [RouterLink, RouterOutlet, RouterLinkActive, CommonModule],
  templateUrl: './admin.html',
  styleUrl: './admin.css'
})
export class Admin {
  showSidebar = false;

  toggleSidebar() {
    this.showSidebar = !this.showSidebar;
    console.log("p");
  }

  closeSidebar() {
    this.showSidebar = false;
    console.log("n");
  }
}