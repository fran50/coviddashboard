
import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
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

  Nfecha = Date();
  fecha: string;

  constructor(private coviService: CoviService) {

    this.fecha = formatDate(this.Nfecha, 'yyyy-MM-dd', 'en-US');
  }


  Spain: Imundo;
  entrefechas: Imundo[] = [];

  listado = [];

  listado2 = ["2", "3", "5"];

  datos = [0, 2, 3, 4, 5, 6];

  ngOnInit(): void {

    this.devuelveSpain();

  }
  ngOnChange() {

    this.fecha = formatDate(this.Nfecha, 'yyyy-MM-dd', 'en-US');
  }

  devuelveSpain() {
    this.coviService.getAllMundo(this.fecha, 'Spain')
      .subscribe(datosmundo => {
        //let fecha="2020-11-25";
        this.Spain = datosmundo.dates[this.fecha].countries.Spain;
      })
  }
  devuelveFechas(fechas: any) {

    this.coviService.getAllFechas(fechas.fechaAnterior, fechas.fechaPosterior, 'Spain')
      .subscribe(datosmundo => {
        //let fecha="2020-11-25";
        // let listado= Array;
        this.listado = datosmundo.dates;
        this.entrefechas.length = 0;
        for (let x = 0; x < fechas.lista.length; x++) {
          this.entrefechas[x] = this.listado[fechas.lista[x]].countries.Spain;
          // console.log(this.listado[fechas.lista[x]].countries.Spain);  
        }
        //   console.log(this.entrefechas);
        fechas.fe
        let misdatos: Array<any>;
        misdatos = this.cargaGraficas();
        this.actualizarGraficas(fechas.lista, misdatos);
      })
  }
  //datos: Array<number>=[];
  cargaGraficas() {
    // let longitud = this.datos.length;
    // this.datos.splice(0, longitud);
    let misdatos = [{
      misdatosM: [],
      misdatosR: [],
      misdatosI: []
    }]
    //let misdatosM = [];
    //let misdatosR = [];
    //let misdatosI = [];
    for (let x = 0; x < this.entrefechas.length; x++) {
      misdatos[0].misdatosM.push(this.entrefechas[x].today_new_deaths);
      misdatos[0].misdatosR.push(this.entrefechas[x].today_new_recovered);
      misdatos[0].misdatosI.push(this.entrefechas[x].today_new_confirmed);

    }
    console.log(misdatos);
    return misdatos;
    //this.lineChartLabels[0].Label = this.datos;
  }
  actualizarGraficas(fechas: Array<string>, misdatos: Array<any>) {
    this.lineChartLabels = fechas;
    this.lineChartData[2].data = misdatos[0].misdatosM;
    this.lineChartData[0].data = misdatos[0].misdatosR;
    this.lineChartData[1].data = misdatos[0].misdatosI;
  }
  /// graficas ///
  lineChartData: ChartDataSets[] = [
    {
      data: [100, 200, 300, 400, 500, 600, 700],
      label: 'Recuperados'
    },
    {
      data: [10, 20, 30, 40, 50, 60, 70],
      label: 'Infectados'
    },
    {
      data: [30, 20, 500, 300, 200, 200, 500],
      label: 'Muertos'
    }
  ];

  lineChartLabels: Label[] = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];

  lineChartOptions = {
    responsive: true,
  };

  lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,255,0,1)',
    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';



}


