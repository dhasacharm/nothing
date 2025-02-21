import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-organization',
  templateUrl: './add-organization.component.html',
  styleUrl: './add-organization.component.css'
})
export class AddOrganizationComponent {
  OrgRegistrationForm!: FormGroup;
  constructor(private fb: FormBuilder, private router:Router) {}

  ngOnInit(): void {
    this.OrgRegistrationForm = this.fb.group({
      Code: ['', Validators.required],
      OrganizationName: ['', Validators.required],
      AddressLine1: ['', Validators.required],
      AddressLine2: [''],
      Area: ['', Validators.required],
      Country: ['', Validators.required],
      State: ['', Validators.required],
      City: ['', Validators.required],
      PostCode: ['', Validators.required],
      IsActive: [false]
    });
  }

  onSubmit() {
    if (this.OrgRegistrationForm.valid) {
      console.log(this.OrgRegistrationForm.value);
    } else {
      console.log('Form is not valid');
    }
  }
  navigateToBack() {
    this.router.navigate(['/dashboard/orgs']);
  }
}
