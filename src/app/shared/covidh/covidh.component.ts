import { Component, OnInit, Input,OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { Imundo } from 'src/app/core/servicio/interfaces/imundo';

@Component({
  selector: 'app-covidh',
  templateUrl: './covidh.component.html',
  styleUrls: ['./covidh.component.css']
})
export class CovidhComponent implements OnChanges{

bandera = false;
//datos:Imundo;
  

  @Input() datos:Imundo
  
  constructor() { }

  
  ngOnChanges(changes: SimpleChanges){
    const cambiodatos: SimpleChange = changes.datos;

    if (cambiodatos.currentValue){
      this.bandera=true;
    }
    
  }
}
