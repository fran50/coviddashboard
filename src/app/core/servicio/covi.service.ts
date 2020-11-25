import { Injectable } from '@angular/core';
import {Imundo} from './interfaces/imundo';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoviService {

  constructor(private http: HttpClient) { }

  getAllMundo(){
    return this.http.get<any>('https://api.covid19tracking.narrativa.com/api/2020-11-25/country/spain');

  }
}
