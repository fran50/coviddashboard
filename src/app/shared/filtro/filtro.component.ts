import { formatDate } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.css']
})
export class FiltroComponent implements OnInit {
  Nfecha=Date.now();
  fecha: string;
  fecha2:string;
  semana = 1000 * 60 * 60 * 24 * 6;
  dia=1000*60*60*24;
  listadoF={
    fechaAnterior:"",
    fechaPosterior:"",
    lista:[]
  }
 
  @Output() fechas: EventEmitter<any> = new EventEmitter();
  constructor() {
  
    this.fecha= formatDate(this.Nfecha,'yyyy-MM-dd','en-US');
    this.Nfecha -= this.semana;
    this.fecha2= formatDate(this.Nfecha,'yyyy-MM-dd','en-US');
   }
    wiki;
 mandarfecha(fechaA:string, fechaP:string){
   this.listadoF.fechaAnterior=fechaA;
   this.listadoF.fechaPosterior=fechaP
    this.funcionArrayFecha(fechaA,fechaP);
     this.wiki=this.listadoF.lista;
    this.fechas.emit(this.listadoF);
 }

 funcionArrayFecha(fechaA:string, fechaP:string){
   this.listadoF.lista=[];

   let newDate = Date.parse(fechaA);
   //let cnewDate = newDate.getMilliseconds();
   let oldDate = Date.parse(fechaP);
   //let coldDate =oldDate.getMilliseconds();
   oldDate += this.dia;
   while( newDate != oldDate){
     let cambio=formatDate(newDate,'yyyy-MM-dd','en-US')
    this.listadoF.lista.push(cambio);
    //this.listadoF.lista.push(oldDate);
   newDate += this.dia;
 }

   }

   
   

 
  ngOnInit(): void {
  }

}
