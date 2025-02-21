import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrl: './departments.component.css'
})
export class DepartmentsComponent {
constructor (private router: Router,) {}

  navigateTo() {
    console.log("nav")
    this.router.navigate(['/dashboard/addfacilitys']);
  }
}
