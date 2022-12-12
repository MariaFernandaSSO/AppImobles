import { Component, OnInit } from '@angular/core';
import { Cliente } from '../models/Cliente';
import { ClientesService } from '../services/clientes/clientes.service';

@Component({
  selector: 'app-cad-cliente',
  templateUrl: './cad-cliente.page.html',
  styleUrls: ['./cad-cliente.page.scss'],
})
export class CadClientePage implements OnInit {

  cliente: Cliente
  constructor(private clientesService: ClientesService) { 
    this.cliente = new Cliente()
  }

  ngOnInit() {
    this.exibirClientes()
  }

  exibirClientes(): void {
    this.clientesService.getClientes().subscribe({
      next: (data) => {
        console.log(data)
      },
      error: (error) => {
        console.error(error)
      }
    })
  }

  cadastrarCliente(): void {
    this.cliente.ativo = true
    this.cliente.data_cadastro = new Date()
    this.clientesService.postCliente(this.cliente).subscribe({
      next: (data) => {
        console.log(data)
      },
      error: (error) => {
        console.error(error)
      }
    })
  }

}
