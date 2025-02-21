import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OpregisterComponent } from './opregister/opregister.component';
import { OpvisitlinkComponent } from './opvisitlink/opvisitlink.component';
import { FrontOfficeDashboardComponent } from './front-office-dashboard/front-office-dashboard.component';
import { FullregisterComponent } from './fullregister/fullregister.component';
import { BulkCheckOutComponent } from './bulk-check-out/bulk-check-out.component';
import { PatientRegisteredComponent } from './patient-registered/patient-registered.component';
import { SimpleRegisterComponent } from './simple-register/simple-register.component';
import { OrganisationsComponent } from './SystemSetting/organisations/organisations.component';
import { AddOrganizationComponent } from './SystemSetting/add-organization/add-organization.component';
import { HospitalsComponent } from './SystemSetting/hospitals/hospitals.component';
import { DepartmentsComponent } from './SystemSetting/departments/departments.component';
import { GroupsComponent } from './SystemSetting/groups/groups.component';
import { ReferralDoctorComponent } from './SystemSetting/referral-doctor/referral-doctor.component';
import { ReferenceNumberComponent } from './SystemSetting/reference-number/reference-number.component';
import { DoctorpaymentComponent } from './SystemSetting/doctorpayment/doctorpayment.component';
import { AddHospitalsComponent } from './SystemSetting/add-hospitals/add-hospitals.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/dashboard',
  },
  {
    path: "dashboard",
    component: DashboardComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'front-dashboard',
      },
      {
        path: "orgs",
        component: OrganisationsComponent
      },
      {
        path: "addorgs",
        component: AddOrganizationComponent
      },
      {
        path: "facilitys",
        component: HospitalsComponent
      },
      {
        path: "addfacilitys",
        component: AddHospitalsComponent
      },
      {
        path: "depts",
        component: DepartmentsComponent
      },
      {
        path: "groups",
        component: GroupsComponent
      },
      {
        path: "encdocupdate",
        component: ReferralDoctorComponent
      },
      {
        path: "sequencemasters",
        component: ReferenceNumberComponent
      },
      {
        path: "docpayment",
        component: DoctorpaymentComponent
      },
      {
        path: "front-dashboard",
        component: FrontOfficeDashboardComponent
      },
      { path: 'register', component: OpregisterComponent },
      {
        path: "op-vist-link",
        component: OpvisitlinkComponent
      },
      {
        path: "quickregistration",
        component: SimpleRegisterComponent
      },
      { path: "full-reg", component: FullregisterComponent },
      { path: "BulkCheckOut", component: BulkCheckOutComponent }
      , { path: "PatientRegistered", component: PatientRegisteredComponent }
    ]
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "op-register",
    component: OpregisterComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
