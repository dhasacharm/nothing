import { Component } from '@angular/core';
import { navigation } from '../data/navigation';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  constructor(private router: Router) {}

  navigation_list = navigation.map(item => ({ ...item, showSubmenu: false }));;
  isExpanded = true;
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;

  logout() {
    // Implement your logout logic here
    // For example, clear user session and navigate to the login page
    this.router.navigate(['/login']);
  }
  toggleSubmenu(item: any) {
    // Toggle the submenu visibility when the parent is clicked
    item.showSubmenu = !item.showSubmenu;
  }

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
}
