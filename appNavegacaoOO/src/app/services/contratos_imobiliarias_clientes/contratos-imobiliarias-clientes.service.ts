import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ContratoImobiliariaCliente } from 'src/app/models/ContratoImobiliariaClientes';

@Injectable({
  providedIn: 'root'
})
export class ContratosImobiliariasClientesService {

  private readonly URL_E = ""
  private readonly URL_M = "https://3000-mariafernan-3egbapi0810-peii3qn6wau.ws-us79.gitpod.io/"
  private readonly URL = this.URL_M

  constructor(private httpClient: HttpClient) { }

  buscarContratosCliente():Observable<any>{
    return this.httpClient.get<any>(`${this.URL}contratoimobiliariacliente`)
  }

  postContratosProprietario(contrato: ContratoImobiliariaCliente): Observable<any> {
    return this.httpClient.post<ContratoImobiliariaCliente>(`${this.URL}contratoimobiliariacliente`, contrato)
  }
}
