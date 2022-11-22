import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContratoImobiliariasProprietariosService {

  private readonly URL_E = ""
  private readonly URL_M = "https://8100-mariafernan-3egbpamii04-3onmb8ukhhq.ws-us77.gitpod.io"
  private readonly URL = this.URL_M

  constructor(private httpClient: HttpClient) { }
}
