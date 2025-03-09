import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @Output() sidenavToggle = new EventEmitter<void>();
  constructor(private router: Router) {}

  toggleSidenav() {
    this.sidenavToggle.emit();
  }

  logout() {
    // Implement your logout logic here
    this.router.navigate(['/login']);

  }
}
