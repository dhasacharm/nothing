import { Component } from '@angular/core';

@Component({
  selector: 'app-front-office-dashboard',
  templateUrl: './front-office-dashboard.component.html',
  styleUrl: './front-office-dashboard.component.css'
})



export class FrontOfficeDashboardComponent {
  userPermissions = {
    FrontOfficeDashboard: {
      Registration: true,
      Appointments: true,
      OPbilling: true,
      DirectBilling: true,
      LabBilling: true,
      Admissions: true,
      BedTransfer: true,
      CurrentIpPatients: true,
      FrontOfficeReports: true
    }
  };

  registraion() {
    console.log('Navigating to Registration / OP Visit');
  }

  appoinment() {
    console.log('Navigating to Appointments');
  }

  opbillings() {
    console.log('Navigating to OP Billing');
  }

  directbilling() {
    console.log('Navigating to Direct Billing');
  }

  labbilling() {
    console.log('Navigating to Lab Billing');
  }

  admissions() {
    console.log('Navigating to Admissions');
  }

  bedtransfer() {
    console.log('Navigating to Bed Transfer');
  }
  ippatient() {
    console.log('Navigating to Current IP Patients');
  }

  reports() {
    console.log('Navigating to Reports');
  }

  hasAccess(feature:any) {
    // return this.userPermissions.FrontOfficeDashboard[feature];
  }
}
