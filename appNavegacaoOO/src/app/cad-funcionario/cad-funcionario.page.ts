import { Component, OnInit } from '@angular/core';
import { Funcionario } from '../models/Funcionario';
import { FuncionariosService } from '../services/funcionarios/funcionarios.service';

@Component({
  selector: 'app-cad-funcionario',
  templateUrl: './cad-funcionario.page.html',
  styleUrls: ['./cad-funcionario.page.scss'],
})
export class CadFuncionarioPage implements OnInit {

  funcionario: Funcionario
  constructor(
    private funcionariosService: FuncionariosService
  ) {
    this.funcionario = new Funcionario()
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


  cadastrarFuncionario(): void {
    this.funcionariosService.postFuncionario(this.funcionario).subscribe({
      next: (data) => {
        console.log(data)
      },
      error: (error) => {
        console.error(error)
      }
    })
  }


  ngOnInit() {
    this.getFuncionarios()
  }

}
