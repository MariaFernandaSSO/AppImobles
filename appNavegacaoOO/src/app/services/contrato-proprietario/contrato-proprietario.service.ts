import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ContratoProprietario } from 'src/app/models/ContratoProprietario';

@Injectable({
  providedIn: 'root'
})
export class ContratoProprietarioService {

  private readonly URL_E = "https://3000-mariafernan-3egbapi0810-uhrrqkokn7p.ws-us78.gitpod.io/"
  private readonly URL_R = ""
  private readonly URL = this.URL_E
  constructor(private http: HttpClient) { }

  getContratosProprietario(): Observable<any> {
    return this.http.get<ContratoProprietario>(`${this.URL}contratoimobiliariaproprietario`)
  }

  postContratosProprietario(contrato: ContratoProprietario): Observable<any> {
    return this.http.post<ContratoProprietario>(`${this.URL}contratoimobiliariaproprietario`, contrato)
  }
}
