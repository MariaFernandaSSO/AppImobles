import { Component } from '@angular/core';
import { PessoasService } from '../services/pessoas/pessoas.service';

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


  constructor(
    private pessoasService: PessoasService
  ) {

    this.pessoasService.buscarPessoas2().subscribe(
      (data) => {
        console.log(data)
      },
      (error) => {
        console.error(error)
      }
    )
    
  }

}
