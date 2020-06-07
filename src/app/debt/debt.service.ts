import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Debt } from '../debt.type';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DebtService {

  constructor(private http:HttpClient) { }
  private apiRoute = environment.apiURL+"Debts/";

  getDebts():Observable<Debt[]>
  {
    return this.http.get<Debt[]>(this.apiRoute+'1');
  }
}