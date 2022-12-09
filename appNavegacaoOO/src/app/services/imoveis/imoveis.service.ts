import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Imovel } from 'src/app/models/Imovel';

@Injectable({
  providedIn: 'root'
})
export class ImoveisService {

  private readonly URL_E = "https://3000-mariafernan-3egbapi0810-uhrrqkokn7p.ws-us78.gitpod.io/"
  private readonly URL_M = ""
  private readonly URL = this.URL_E

  constructor(private httpClient: HttpClient) { }

  getImoveis(): Observable<any> {
    return this.httpClient.get<Imovel>(`${this.URL}imovel`)
  }

  postImovel(imovel: Imovel): Observable<any> {
    return this.httpClient.post<Imovel>(`${this.URL}imovel`, imovel)
  }
}
