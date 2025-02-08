import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OpregisterComponent } from './opregister/opregister.component';
import { QuickregistrationComponent } from './quickregistration/quickregistration.component';
import { OpvisitlinkComponent } from './opvisitlink/opvisitlink.component';
import { FrontOfficeDashboardComponent } from './front-office-dashboard/front-office-dashboard.component';
import { FullregisterComponent } from './fullregister/fullregister.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/dashboard',
  },
  {
    path:"dashboard",
    component: DashboardComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'front-dashboard',
      },
      {
        path:"front-dashboard",
        component:FrontOfficeDashboardComponent
      },
      { path: 'register', component: OpregisterComponent },
      {
        path:"op-vist-link",
        component:OpvisitlinkComponent
      },
      {
        path:"quickregistration",
        component:QuickregistrationComponent
      },
      {path:"full-reg",component:FullregisterComponent}
    ]
  },
  {
    path:"login",
    component: LoginComponent
  },
  {
    path:"op-register",
    component:OpregisterComponent
  },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
