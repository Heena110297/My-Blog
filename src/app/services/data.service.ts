import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Precaution} from '../models/precaution.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getPrecautions(){
    return this.http.get<Precaution[]>(`api/precautions`);
  }

  addPrecaution(precaution: Precaution){
    return this.http.post<Precaution>(`api/precautions`, precaution);
  }

  updatePrecaution(id: number, precaution: Precaution){
    return this.http.put<Precaution>(`api/precautions/${id}`, precaution);
  }

  deletePrecaution(id: number){
    return this.http.delete<Precaution>(`api/precautions/${id}`);
  }
}
