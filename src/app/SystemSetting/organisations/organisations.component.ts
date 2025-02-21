import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-organisations',
  templateUrl: './organisations.component.html',
  styleUrl: './organisations.component.css'
})

export class OrganisationsComponent {
constructor (private router: Router,) {}

  navigateTo() {
    console.log("nav")
    this.router.navigate(['/dashboard/addorgs']);
  }
}
