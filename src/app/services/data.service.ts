import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Precaution} from '../models/precaution.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  getPrecautions(){
    return this.http.get<Precaution[]>(`api/precautions`);
  }
}
