import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Imobiliaria } from 'src/app/models/Imobiliaria';

@Injectable({
  providedIn: 'root'
})
export class ImobiliariasService {

  private readonly URL_E = ""
  private readonly URL_M = "https://3000-mariafernan-3egbapi0810-qik0ephtjvn.ws-us78.gitpod.io/"
  private readonly URL = this.URL_M

  constructor(private httpClient: HttpClient) { }

  buscarImobiliarias():Observable<any>{
    return this.httpClient.get<any>(`${this.URL}imobiliarias`)
  }

  postImobiliaria(imobiliaria: Imobiliaria): Observable<any> {
    return this.httpClient.post<Imobiliaria>(`${this.URL}imobiliaria/pessoa`, imobiliaria)
  }
}
