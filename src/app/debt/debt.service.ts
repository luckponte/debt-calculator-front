import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Debt } from '../debt.type';

@Injectable({
  providedIn: 'root'
})
export class DebtService {

  constructor(private http:HttpClient) { }
  private apiURL = "https://localhost:5001/api/";

  getDebts():Observable<Debt[]>
  {
    return this.http.get<Debt[]>(this.apiURL+'Debts/1');
  }
}