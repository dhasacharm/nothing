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

  tableData = [
    { ID: 1, Name: 'John Doe', Age: 30, Country: 'USA' },
    { ID: 2, Name: 'Jane Smith', Age: 25, Country: 'UK' },
    { ID: 3, Name: 'Michael Lee', Age: 35, Country: 'Canada' },
    { ID: 4, Name: 'Lisa Brown', Age: 28, Country: 'Australia' },
    { ID: 5, Name: 'David Wilson', Age: 40, Country: 'Germany' },
  ];
}
