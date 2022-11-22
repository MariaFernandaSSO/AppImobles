import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PessoasService {

  private readonly URL_E = ""
  private readonly URL_M = "https://3000-mariafernan-3egbapi0810-3lzvq96y7b9.ws-us77.gitpod.io/"
  private readonly URL = this.URL_M

  constructor(private httpClient: HttpClient) { }

  buscarPessoas2(): Observable<any> {
    return this.httpClient.get<any>(`${this.URL}pessoas`)
  }

  buscarPessoas():Observable<any>{
    return this.httpClient.get<any>(`${this.URL}pessoas`)
  }
}
