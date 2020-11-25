import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltroComponent } from './filtro/filtro.component';
import { CovidhComponent } from './covidh/covidh.component';



@NgModule({
  declarations: [FiltroComponent, CovidhComponent],
  imports: [
    CommonModule
  ],
  exports:[
    FiltroComponent,
    CovidhComponent
    
  ]

  
})
export class SharedModule {
  
 }
