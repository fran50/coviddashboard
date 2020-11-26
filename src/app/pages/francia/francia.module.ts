import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FranciaRoutingModule } from './francia-routing.module';
import { FranciaComponent } from './francia.component';


@NgModule({
  declarations: [FranciaComponent],
  imports: [
    CommonModule,
    FranciaRoutingModule
  ]
})
export class FranciaModule { }
