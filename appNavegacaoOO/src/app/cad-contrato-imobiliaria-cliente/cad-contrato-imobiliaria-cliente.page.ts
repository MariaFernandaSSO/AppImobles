import { Component, OnInit } from '@angular/core';
import { ContratoImobiliariaCliente } from '../models/ContratoImobiliariaClientes';
import { ContratosImobiliariasClientesService } from '../services/contratos_imobiliarias_clientes/contratos-imobiliarias-clientes.service';

@Component({
  selector: 'app-cad-contrato-imobiliaria-cliente',
  templateUrl: './cad-contrato-imobiliaria-cliente.page.html',
  styleUrls: ['./cad-contrato-imobiliaria-cliente.page.scss'],
})
export class CadContratoImobiliariaClientePage implements OnInit {
  contrato: ContratoImobiliariaCliente
  constructor(private contratosService: ContratosImobiliariasClientesService) { 
    this.contrato = new ContratoImobiliariaCliente()
  }

  ngOnInit(): void {
    this.exibirContratos()
  }

  exibirContratos(): void {
    this.contratosService.buscarContratosCliente().subscribe({
      next: (data) => {
        console.log(data)
      },
      error: (error) => {
        console.error(error)
      }
    })
  }

  cadastrarContrato(): void {
    this.contrato.id_contrato_imobiliaria = 2
    this.contrato.id_cliente = 12
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