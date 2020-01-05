import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentHistoryComponent } from './appointmentHistory.component';

const routes: Routes = [
    { path: '', component: AppointmentHistoryComponent },
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AppointmentHistoryRoutingModule { }