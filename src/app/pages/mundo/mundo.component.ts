import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { bindCallback } from 'rxjs';
import { CoviService } from 'src/app/core/servicio/covi.service';
import { Imundo } from 'src/app/core/servicio/interfaces/imundo';

@Component({
  selector: 'app-mundo',
  templateUrl: './mundo.component.html',
  styleUrls: ['./mundo.component.css']
})
export class MundoComponent implements OnInit {
  Nfecha=Date();
  fecha: string;

  constructor( private coviService: CoviService) {
    this.fecha= formatDate(this.Nfecha,'yyyy-MM-dd','en-US');
   }

  ngOnInit(): void {
    this.devuelveMundo();
  }


  Total:Imundo;

  devuelveMundo(){
    this.coviService.getAllMundo(this.fecha)
    .subscribe(datosmundo =>{
      this.Total = datosmundo.total;
    })
  }
/// graficas ///
lineChartData: ChartDataSets[]=[
  { data: [100,72,57,77,75,43],
    label: 'Numero de Recuperados'}
  ];

lineChartLabels: Label[] = ['Enero','Febrero','Marzo','Abril','Mayo','Junio'];

lineChartOptions = {
  responsive:true,};

lineChartColors: Color[] =[
  {
    borderColor:'black',
    backgroundColor:'rgba(255,255,0,1)',
  },
];

lineChartLegend= true;
lineChartPlugins=[];
lineChartType= 'line';



}
