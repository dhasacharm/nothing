import { Router } from '@angular/router';
import { Component, Input } from '@angular/core';
import { navigation } from '../data/navigation';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  @Input() isExpanded = true;
  isShowing = false;
  navigation_list = navigation.map(item => ({ ...item, showSubmenu: false }));


  toggleSidenav() {
    this.isExpanded = !this.isExpanded;
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

  toggleSubmenu(item: any) {
    item.showSubmenu = !item.showSubmenu;
  }

}
