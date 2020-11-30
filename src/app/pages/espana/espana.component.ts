
import { formatDate } from '@angular/common';
import { Component, OnInit} from '@angular/core';
import { CoviService } from 'src/app/core/servicio/covi.service';
import { Imundo } from 'src/app/core/servicio/interfaces/imundo';

@Component({
  selector: 'app-espana',
  templateUrl: './espana.component.html',
  styleUrls: ['./espana.component.css']
})
export class EspanaComponent implements OnInit {

  Nfecha=Date();
  fecha: string;

  constructor(private coviService: CoviService) {
   
    this.fecha= formatDate(this.Nfecha,'yyyy-MM-dd','en-US');
   }
  
  
  Spain:Imundo;
 
 
  ngOnInit(): void {
    
    this.devuelveSpain();
    
  }
  ngOnChange(){
    
    this.fecha= formatDate(this.Nfecha,'yyyy-MM-dd','en-US');
  }

  devuelveSpain(){
    this.coviService.getAllMundo(this.fecha,'Spain')
    .subscribe(datosmundo =>{
      //let fecha="2020-11-25";
      this.Spain = datosmundo.dates[this.fecha].countries.Spain;
    })
  }
}
