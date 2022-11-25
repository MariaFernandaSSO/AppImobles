import { Component, OnInit } from '@angular/core';
import { ContratoImobiliariasProprietariosService } from '../services/contratos_imobiliarias_proprietarios/contrato-imobiliarias-proprietarios.service';

@Component({
  selector: 'app-cad-contrato-imobiliaria-proprietario',
  templateUrl: './cad-contrato-imobiliaria-proprietario.page.html',
  styleUrls: ['./cad-contrato-imobiliaria-proprietario.page.scss'],
})
export class CadContratoImobiliariaProprietarioPage implements OnInit {

  constructor(
    private contratoProprietarioService: ContratoImobiliariasProprietariosService
  ) {
    this.getContratos()
  }

  getContratos(){
    this.contratoProprietarioService.buscarContratosProprietario().subscribe(
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
