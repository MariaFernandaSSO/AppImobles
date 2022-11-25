import { Component } from '@angular/core';
import { FuncionariosService } from '../services/funcionarios/funcionarios.service';
import { ImoveisService } from '../services/imoveis/imoveis.service';
import { UsuariosService } from '../services/usuarios/usuarios.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  telas =[
    {
      path: "/cad-imovel",
      text: "Cadastrar Imóvel"
    },
    {
      path: "/cad-imobiliaria",
      text: "Cadastrar Imobiliária"
    },
    {
      path: "/cad-proprietario",
      text: "Cadastrar Proprietário"
    },
    {
      path: "/cad-locador",
      text: "Cadastrar Locador"
    },
  ];

  constructor(private usuariosService: UsuariosService, private imoveisService: ImoveisService, private funcionariosService: FuncionariosService) {
    this.getUsuarios()
    this.getImoveis()
    this.getFuncionarios()
  }
  
  getUsuarios() {
    this.usuariosService.getUsuarios().subscribe(
      (data) => {
        console.log(data)
      },
      (error) => {
        console.error(error)
      }
    )
  }

  getImoveis() {
    this.imoveisService.getImoveis().subscribe(
      (data) => {
        console.log(data)
      },
      (error) => {
        console.error(error)
      }
    )
  }

  getFuncionarios() {
    this.funcionariosService.getFuncionarios().subscribe(
      (data) => {
        console.log(data)
      },
      (error) => {
        console.error(error)
      }
    )
  }

}
