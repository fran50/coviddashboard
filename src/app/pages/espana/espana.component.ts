
import { formatDate } from '@angular/common';
import { Component, OnInit} from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { Color, Label } from 'ng2-charts';
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
  entrefechas: Imundo[]=[];
 
  listado=[];

  listado2=["2","3","5"];

  datos=[0,2,3,4,5,6];

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
    devuelveFechas(fechas: any){
      
      this.coviService.getAllFechas(fechas.fechaAnterior,fechas.fechaPosterior,'Spain')
      .subscribe(datosmundo =>{
        //let fecha="2020-11-25";
       // let listado= Array;
        this.listado = datosmundo.dates;
        for (let x=0; x<fechas.lista.length;x++){
        this.entrefechas[x]=this.listado[fechas.lista[x]].countries.Spain;
         // console.log(this.listado[fechas.lista[x]].countries.Spain);  
        }
     //   console.log(this.entrefechas);
      
        this.cargaGraficas();
      })
  }
  //datos: Array<number>=[];
    cargaGraficas(){
      let longitud = this.datos.length;
      this.datos.splice(0,longitud);
      for (let x=0; x<this.entrefechas.length;x++){
        this.datos.push(this.entrefechas[x].today_new_deaths);
        
      }
     console.log(this.datos);
    }
  /// graficas ///
lineChartData: ChartDataSets[]=[
  { data: this.datos,
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


