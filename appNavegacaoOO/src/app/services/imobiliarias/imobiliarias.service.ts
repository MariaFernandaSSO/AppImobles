import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImobiliariasService {

  private readonly URL_E = ""
  private readonly URL_M = "https://3000-mariafernan-3egbapi0810-qik0ephtjvn.ws-us77.gitpod.io/"
  private readonly URL = this.URL_M

  constructor(private httpClient: HttpClient) { }

  buscarImobiliarias():Observable<any>{
    return this.httpClient.get<any>(`${this.URL}imobiliarias`)
  }
  
}
