import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HowItWorksComponent } from './how-it-works.component';
import { HowItWorksRoutingModule } from './howItWorks-routing.module';

@NgModule({
    imports: [
        CommonModule,
        HowItWorksRoutingModule
    ],
    declarations: [
        HowItWorksComponent
    ],
    providers: []
})
export class HowItWorksModule { }