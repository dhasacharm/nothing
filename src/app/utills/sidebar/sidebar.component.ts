import { Router } from '@angular/router';
import { Component, Input } from '@angular/core';
import { navigation } from '../../data/navigation';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  @Input() isExpanded = true;
  isShowing = false;
  hoveredItem: any = null;
  activeSubMenu: any = null;

  menuItems = [
    { text: 'Dashboard', icon: 'fa fa-home', route: '/dashboard' },
    { 
      text: 'Services', 
      icon: 'fa fa-cog', 
      submenu: [
        { text: 'Web Development', route: '/services/web' },
        { text: 'App Development', route: '/services/app' },
        { text: 'SEO Optimization', route: '/services/seo' }
      ]
    },
    { text: 'Contact', icon: 'fa fa-envelope', route: '/contact' }
  ];
  navigation_list = navigation.map(item => ({ ...item, showSubmenu: false, }));

  ngOnInit() {
    console.log(this.isExpanded)
    this.hoveredItem = this.navigation_list[0]; // Set the first item as default

  }

 

  mouseenter() {
    console.log(this.isExpanded,"++++++muse+++++++++++++",this.isShowing)
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

  openSubMenu(item: any) {
    this.activeSubMenu = item;
  }

  closeSubMenu() {
    this.activeSubMenu = null;
  }

}
