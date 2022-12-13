import { Component, OnInit } from '@angular/core';
import { PessoasService } from '../services/pessoas/pessoas.service';

@Component({
  selector: 'app-cad-pessoa',
  templateUrl: './cad-pessoa.page.html',
  styleUrls: ['./cad-pessoa.page.scss'],
})
export class CadPessoaPage implements OnInit {

  constructor(
    private pessoasService: PessoasService
  ) {
    this.getPessoas()
  }

  getPessoas(){
    this.pessoasService.buscarPessoas().subscribe(
      (data) => {
        console.log(data)
      },
      (error) => {
        console.error(error)
      }
    )
  }

  ngOnInit() {
  }

}
