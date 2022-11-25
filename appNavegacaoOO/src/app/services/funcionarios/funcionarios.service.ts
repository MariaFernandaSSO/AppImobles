import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Funcionario } from 'src/app/models/Funcionario';

@Injectable({
  providedIn: 'root'
})
export class FuncionariosService {

  private readonly URL_E = "https://3000-mariafernan-3egbapi0810-p73zs3u29op.ws-us74.gitpod.io/"
  private readonly URL_M = ""
  private readonly URL = this.URL_E

  constructor(private httpClient: HttpClient) { }

  getFuncionarios(): Observable<any> {
    return this.httpClient.get<Funcionario>(`${URL}funcionarios`)
  }

  postFuncionario(funcionario: Funcionario): Observable<any> {
    return this.httpClient.post<Funcionario>(`${URL}funcionarios`, funcionario)
  }
}
