import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from 'src/app/models/Cliente';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  private readonly URL_E = "https://3000-mariafernan-3egbapi0810-uhrrqkokn7p.ws-us78.gitpod.io/"
  private readonly URL_M = ""
  private readonly URL = this.URL_E

  constructor(private httpClient: HttpClient) { }

  getClientes(): Observable<any> {
    return this.httpClient.get<Cliente>(`${this.URL}cliente`)
  }

  postCliente(cliente: Cliente): Observable<any> {
    return this.httpClient.post<Cliente>(`${this.URL}cliente/usuario`, cliente)
  }
}
