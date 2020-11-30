import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FranciaRoutingModule } from './francia-routing.module';
import { FranciaComponent } from './francia.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [FranciaComponent],
  imports: [
    CommonModule,
    FranciaRoutingModule,
    SharedModule
  ]
})
export class FranciaModule { }
