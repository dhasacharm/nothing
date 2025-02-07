import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OpregisterComponent } from './opregister/opregister.component';
import { QuickregistrationComponent } from './quickregistration/quickregistration.component';

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
      { path: 'register', component: OpregisterComponent },
      { path: 'quick-reg', component: QuickregistrationComponent }
    ]
  },
  {
    path:"login",
    component: LoginComponent
  },
  {
    path:"op-register",
    component:OpregisterComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
