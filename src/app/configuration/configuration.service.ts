import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  constructor(private http:HttpClient) { }
  private apiRoute = environment.apiURL+"Configs"

  getConf():Observable<Object[]>
  {
    return this.http.get<Object[]>(this.apiRoute);
  }

  updateConf(obj):Observable<Object[]>
  {
    return this.http.put<Object[]>(this.apiRoute+'/1',obj);
  }
}
