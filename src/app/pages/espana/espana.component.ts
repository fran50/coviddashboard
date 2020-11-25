import { Component, OnInit } from '@angular/core';
import { CoviService } from 'src/app/core/servicio/covi.service';
import { Imundo } from 'src/app/core/servicio/interfaces/imundo';

@Component({
  selector: 'app-espana',
  templateUrl: './espana.component.html',
  styleUrls: ['./espana.component.css']
})
export class EspanaComponent implements OnInit {

  constructor(private coviService: CoviService) { }
  
  
  Spain:Imundo;
 
 
  ngOnInit(): void {
    this.devuelveSpain();
  }


  devuelveSpain(){
    this.coviService.getAllMundo()
    .subscribe(datosmundo =>{
      //let fecha="2020-11-25";
      this.Spain = datosmundo.dates['2020-11-25'].countries.Spain;
    })
  }
}
