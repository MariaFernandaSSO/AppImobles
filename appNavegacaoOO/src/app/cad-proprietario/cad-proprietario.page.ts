import { Component, OnInit } from '@angular/core';
import { Cliente } from '../models/Cliente';
import { ClientesService } from '../services/clientes/clientes.service';

@Component({
  selector: 'app-cad-proprietario',
  templateUrl: './cad-proprietario.page.html',
  styleUrls: ['./cad-proprietario.page.scss'],
})
export class CadProprietarioPage implements OnInit {

  cliente: Cliente
  constructor(private clientesService: ClientesService) { 
    this.cliente = new Cliente()
    this.cliente.sexo = 'masculino'
    this.cliente.data_nascimento = new Date('2004-12-29')
    this.cliente.data_cadastro = new Date('2022-11-25')
    this.cliente.orientacao = ''
    this.cliente.nome_social = '' 
    this.cliente.raca = 'branco'
    this.cliente.deficiencia = false
    this.cliente.descricao_deficiencia = ''

  }

  ngOnInit() {
    this.getClientes()
  }

  getClientes() {
    this.clientesService.getClientes().subscribe({
      next: (data) => {
        console.log(data)
      },
      error: (error) => {
        console.error(error)
      }
    })
  }

  cadastrarCliente() {
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
