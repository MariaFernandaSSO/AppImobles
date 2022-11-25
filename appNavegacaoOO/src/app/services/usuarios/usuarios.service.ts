import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/models/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private readonly URL_E = "https://3000-mariafernan-3egbapi0810-p73zs3u29op.ws-us74.gitpod.io/"
  private readonly URL_M = ""
  private readonly URL = this.URL_E

  constructor(private httpClient: HttpClient) { }

  getUsuarios(): Observable<any> {
    return this.httpClient.get<Usuario>(`${this.URL}usuario`)
  }

  postUsuario(usuario: Usuario): Observable<any> {
    return this.httpClient.post<Usuario>(`${this.URL}usuario`, usuario)
  }
}

