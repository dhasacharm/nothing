import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hospitals',
  templateUrl: './hospitals.component.html',
  styleUrl: './hospitals.component.css'
})
export class HospitalsComponent {
constructor (private router: Router,) {}

  navigateTo() {
    console.log("nav")
    this.router.navigate(['/dashboard/addfacilitys']);
  }
}
