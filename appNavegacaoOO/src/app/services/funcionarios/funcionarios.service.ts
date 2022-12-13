import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Funcionario } from 'src/app/models/Funcionario';

@Injectable({
  providedIn: 'root'
})
export class FuncionariosService {
  private readonly URL_E = ""
  private readonly URL_M = "https://3000-mariafernan-3egbapi0810-qik0ephtjvn.ws-us78.gitpod.io/"
  private readonly URL = this.URL_M

  constructor(private httpClient: HttpClient) { }

  buscarFuncionarios():Observable<any>{
    return this.httpClient.get<any>(`${this.URL}funcionarios`)
  }

  postFuncionario(funcionario: Funcionario): Observable<any> {
    return this.httpClient.post<Funcionario>(`${this.URL}funcionario/usuario`, funcionario)
  }

}