import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CoviService } from 'src/app/core/servicio/covi.service';
import { Imundo } from 'src/app/core/servicio/interfaces/imundo';

@Component({
  selector: 'app-francia',
  templateUrl: './francia.component.html',
  styleUrls: ['./francia.component.css']
})
export class FranciaComponent implements OnInit {

  Nfecha=Date();
  fecha: string;
  bandera = false;
  constructor(private coviService: CoviService) {
   
    this.fecha= formatDate(this.Nfecha,'yyyy-MM-dd','en-US');
   }
  
  
  France:Imundo;
 
 
  ngOnInit(): void {
    
    this.devuelve();
    
  }
  ngOnChange(){
    
    //this.fecha= formatDate(this.Nfecha,'yyyy-MM-dd','en-US');
  }

  devuelve(){
    this.coviService.getAllMundo(this.fecha,'France')
    .subscribe(datosmundo =>{
      //let fecha="2020-11-25";
      this.France = datosmundo.dates[this.fecha].countries.France;
      this.bandera=true;
    })
  }

}
