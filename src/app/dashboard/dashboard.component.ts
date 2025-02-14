import { Component, HostListener } from '@angular/core';
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
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e: Event) {
    const element = document.querySelector('.footer') as HTMLElement;
    if (window.pageYOffset > 100) {
      element.classList.add('scrolled');
    } else {
      element.classList.remove('scrolled');
    }
  }
}
