import { Component, OnInit } from '@angular/core';
import { CoviService } from 'src/app/core/servicio/covi.service';
import { Imundo } from 'src/app/core/servicio/interfaces/imundo';

@Component({
  selector: 'app-mundo',
  templateUrl: './mundo.component.html',
  styleUrls: ['./mundo.component.css']
})
export class MundoComponent implements OnInit {

  constructor( private coviService: CoviService) { }

  ngOnInit(): void {
    this.devuelveMundo();
  }


  Total:Imundo;

  devuelveMundo(){
    this.coviService.getAllMundo()
    .subscribe(datosmundo =>{
      this.Total = datosmundo.total;
    })
  }

}
