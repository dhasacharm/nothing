import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';  // Import ReactiveFormsModule
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';  // Import MatExpansionModule
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import { ReferralModalComponent } from './referral-modal/referral-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { OpvisitlinkComponent } from './opvisitlink/opvisitlink.component';
import { FrontOfficeDashboardComponent } from './front-office-dashboard/front-office-dashboard.component';
import { FullregisterComponent } from './fullregister/fullregister.component';
import { BulkCheckOutComponent } from './bulk-check-out/bulk-check-out.component';
import { PatientRegisteredComponent } from './patient-registered/patient-registered.component';
import { A11yModule } from '@angular/cdk/a11y';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { PortalModule } from '@angular/cdk/portal';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { CdkTableModule } from '@angular/cdk/table';
import { CdkTreeModule } from '@angular/cdk/tree';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTreeModule } from '@angular/material/tree';
import { TableComponent } from './shared/table/table.component';
import { FooterComponent } from './footer/footer.component';
import { ToasterComponent } from './shared/toaster/toaster.component';
import { SimpleRegisterComponent } from './FrontOffice/simple-register/simple-register.component';
import { AddOrganizationComponent } from './SystemSetting/add-organization/add-organization.component';
import { OrganisationsComponent } from './SystemSetting/organisations/organisations.component';
import { HospitalsComponent } from './SystemSetting/hospitals/hospitals.component';
import { AddHospitalsComponent } from './SystemSetting/add-hospitals/add-hospitals.component';
import { DepartmentsComponent } from './SystemSetting/departments/departments.component';
import { AddDepartmentsComponent } from './SystemSetting/add-departments/add-departments.component';
import { PrivilegesComponent } from './SystemSetting/privileges/privileges.component';
import { AddPrivilegesComponent } from './SystemSetting/add-privileges/add-privileges.component';
import { AddGroupsComponent } from './SystemSetting/add-groups/add-groups.component';
import { GroupsComponent } from './SystemSetting/groups/groups.component';
import { ReferralDoctorComponent } from './SystemSetting/referral-doctor/referral-doctor.component';
import { MetaDataComponent } from './SystemSetting/meta-data/meta-data.component';
import { AddMetaDataComponent } from './SystemSetting/add-meta-data/add-meta-data.component';
import { AuditLogComponent } from './SystemSetting/audit-log/audit-log.component';
import { ReferenceNumberComponent } from './SystemSetting/reference-number/reference-number.component';
import { DoctorpaymentComponent } from './SystemSetting/doctorpayment/doctorpayment.component';
import { RouterModule } from '@angular/router';
import { FrontofficeRegisterComponent } from './FrontOffice/frontoffice-register/frontoffice-register.component';
import { LoginViewHomeComponent } from './utills/login-view-home/login-view-home.component';

@NgModule({
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],

  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    SidebarComponent,
    DashboardComponent,
    ReferralModalComponent,
    OpvisitlinkComponent,
    FrontOfficeDashboardComponent,
    FullregisterComponent,
    BulkCheckOutComponent,
    PatientRegisteredComponent,
    TableComponent,
    FooterComponent,
    ToasterComponent,
    SimpleRegisterComponent,
    AddOrganizationComponent,
    OrganisationsComponent,
    HospitalsComponent,
    AddHospitalsComponent,
    DepartmentsComponent,
    AddDepartmentsComponent,
    PrivilegesComponent,
    AddPrivilegesComponent,
    AddGroupsComponent,
    GroupsComponent,
    ReferralDoctorComponent,
    MetaDataComponent,
    AddMetaDataComponent,
    AuditLogComponent,
    ReferenceNumberComponent,
    DoctorpaymentComponent,
    FrontofficeRegisterComponent,
    LoginViewHomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatExpansionModule,
    MatMenuModule,
    MatCardModule,
    MatFormFieldModule,
    HttpClientModule,
    MatDialogModule,
    A11yModule,
    ClipboardModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    PortalModule,
    ScrollingModule,
    FormsModule,
    RouterModule // Add RouterModule here
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }