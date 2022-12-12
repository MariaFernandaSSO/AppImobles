import { Component, OnInit } from '@angular/core';
import { ContratoProprietario } from '../models/ContratoProprietario';
import { ContratoProprietarioService } from '../services/contrato-proprietario/contrato-proprietario.service';

@Component({
  selector: 'app-cad-contrato-proprietario',
  templateUrl: './cad-contrato-proprietario.page.html',
  styleUrls: ['./cad-contrato-proprietario.page.scss'],
})
export class CadContratoProprietarioPage implements OnInit {

  contrato: ContratoProprietario
  constructor(private contratosService: ContratoProprietarioService) { 
    this.contrato = new ContratoProprietario()
  }

  ngOnInit() {
    this.exibirContratosProprietario()
  }

  exibirContratosProprietario(): void {
    this.contrato.id_imobiliaria = 3
    this.contrato.id_imovel = 12
    this.contratosService.getContratosProprietario().subscribe({
      next: (data) => {
        console.log(data)
      },
      error: (error) => {
        console.error(error)
      }
    })
  }

  cadastrarContrato(): void {
    this.contratosService.postContratosProprietario(this.contrato).subscribe({
      next: (data) => {
        console.log(data)
      },
      error: (error) => {
        console.error(error)
      }
    })
  }

}
