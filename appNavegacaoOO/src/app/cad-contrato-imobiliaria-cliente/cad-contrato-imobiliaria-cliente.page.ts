import { Component, OnInit } from '@angular/core';
import { ContratosImobiliariasClientesService } from '../services/contratos_imobiliarias_clientes/contratos-imobiliarias-clientes.service';

@Component({
  selector: 'app-cad-contrato-imobiliaria-cliente',
  templateUrl: './cad-contrato-imobiliaria-cliente.page.html',
  styleUrls: ['./cad-contrato-imobiliaria-cliente.page.scss'],
})
export class CadContratoImobiliariaClientePage implements OnInit {

  constructor(
    private contratoClienteService: ContratosImobiliariasClientesService
  ) {
    this.getContratos()
  }

  getContratos(){
    this.contratoClienteService.buscarContratosCliente().subscribe(
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
