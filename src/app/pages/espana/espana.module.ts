import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EspanaRoutingModule } from './espana-routing.module';
import { EspanaComponent } from './espana.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [EspanaComponent],
  imports: [
    CommonModule,
    EspanaRoutingModule,
    SharedModule
  ]
})
export class EspanaModule { }
