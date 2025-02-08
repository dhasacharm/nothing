import { Component } from '@angular/core';

@Component({
  selector: 'app-opvisitlink',
  templateUrl: './opvisitlink.component.html',
  styleUrl: './opvisitlink.component.css'
})
export class OpvisitlinkComponent {
  fromDate: string = '08/02/2025';
  toDate: string = '08/02/2025';
  doctor: string = '';
  patientSearch: string = '';
  department: string = '';
  billingStatus: string = 'Pending';
}
