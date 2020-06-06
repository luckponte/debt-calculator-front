import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Debt } from '../debt.type';

@Injectable({
  providedIn: 'root'
})
export class DebtService {

  constructor(private http:HttpClient) { }
  private apiURL = "http://www.mocky.io/v2/5edbf7ed320000bd7a5d2855";

  getDebts():Observable<Debt[]>
  {
    return this.http.get<Debt[]>(this.apiURL);
  }
}