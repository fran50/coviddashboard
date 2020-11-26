import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MundoRoutingModule } from './mundo-routing.module';
import { MundoComponent } from './mundo.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [MundoComponent],
  imports: [
    CommonModule,
    MundoRoutingModule,
    SharedModule,
    ChartsModule
  ]
})
export class MundoModule { }
