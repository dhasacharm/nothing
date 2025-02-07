import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { navigation } from '../data/navigation';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  isExpanded = true;

  toggleSidenav() {
    this.isExpanded = !this.isExpanded;
  }
}
