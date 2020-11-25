import { Component, OnInit, Input } from '@angular/core';
import { Imundo } from 'src/app/core/servicio/interfaces/imundo';

@Component({
  selector: 'app-covidh',
  templateUrl: './covidh.component.html',
  styleUrls: ['./covidh.component.css']
})
export class CovidhComponent implements OnInit {


  @Input() datos:Imundo
  constructor() { }

  ngOnInit(): void {
  }

}
