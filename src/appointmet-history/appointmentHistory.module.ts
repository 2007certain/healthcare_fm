import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppointmentHistoryComponent } from './appointmentHistory.component';
import { CommonModule } from '@angular/common';
import { AppointmentHistoryRoutingModule } from './appointmentHistory-routing.module';

@NgModule({
    declarations: [
        AppointmentHistoryComponent
    ],
    imports: [
        CommonModule,
        FormsModule, 
        AppointmentHistoryRoutingModule,
    ]
})
export class AppointmentHistoryModule { }