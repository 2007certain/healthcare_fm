import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'login', loadChildren: () => import(`../login/login.module`).then(mod => mod.LoginModule) },
  { path: 'search', loadChildren: () => import(`../search/search.module`).then(mod => mod.SearchModule) },
  { path: 'howitworks', loadChildren: () => import(`../how-it-works/howItWorks.module`).then(mod => mod.HowItWorksModule) },
  { path: 'appointmentHistory', loadChildren: () => import(`../appointmet-history/appointmentHistory.module`).then(mod => mod.AppointmentHistoryModule) },
  { path: '', redirectTo: '/appointmentHistory', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
