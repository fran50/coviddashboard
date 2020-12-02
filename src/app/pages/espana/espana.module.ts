import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EspanaRoutingModule } from './espana-routing.module';
import { EspanaComponent } from './espana.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [EspanaComponent],
  imports: [
    CommonModule,
    EspanaRoutingModule,
    SharedModule,
    ChartsModule
  ]
})
export class EspanaModule { }
