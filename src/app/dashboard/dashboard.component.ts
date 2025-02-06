import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { navigation } from '../data/navigation';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  navigation_list = navigation.map(item => ({ ...item, showSubmenu: false }));
  isExpanded = true;
  isShowing = false;

  constructor(private router: Router) {}

  mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }

  toggleSubmenu(item: { showSubmenu: boolean; }) {
    item.showSubmenu = !item.showSubmenu;
  }

  toggleSidenav() {
    this.isExpanded = !this.isExpanded;
  }

  logout() {
    // Implement your logout logic here
    // For example, clear user session and navigate to the login page
    this.router.navigate(['/login']);
  }
}
