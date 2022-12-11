import { Component, OnInit } from '@angular/core';
import { FuncionariosService } from '../services/funcionarios/funcionarios.service';

@Component({
  selector: 'app-cad-funcionario',
  templateUrl: './cad-funcionario.page.html',
  styleUrls: ['./cad-funcionario.page.scss'],
})
export class CadFuncionarioPage implements OnInit {

  constructor(
    private funcionariosService: FuncionariosService
  ) {
    this.getFuncionarios()
   }

  getFuncionarios(){
    this.funcionariosService.buscarFuncionarios().subscribe(
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
