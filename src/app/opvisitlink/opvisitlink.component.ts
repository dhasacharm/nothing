import { Component } from '@angular/core';
import { PatientRegisterService } from '../../services/FrontOffice/patient-register.service';
@Component({
  selector: 'app-opvisitlink',
  templateUrl: './opvisitlink.component.html',
  styleUrl: './opvisitlink.component.css'
})
export class OpvisitlinkComponent {
  // fromDate: string = '08/02/2025';
  // toDate: string = '08/02/2025';
  // doctor: string = '';
  // patientSearch: string = '';
  // department: string = '';
  // billingStatus: string = 'Pending';

  tableData = [];

  constructor(private getOpLinkPatientsService: PatientRegisterService) {}

  ngOnInit() {
    this.getOpLinkPatientsService.getPatients().subscribe((data: any) => {
      this.tableData = data;
    });
  }
}
