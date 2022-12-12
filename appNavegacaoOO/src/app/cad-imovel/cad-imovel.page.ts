import { Component, OnInit } from '@angular/core';
import { Imovel } from '../models/Imovel';
import { ImoveisService } from '../services/imoveis/imoveis.service';

@Component({
  selector: 'app-cad-imovel',
  templateUrl: './cad-imovel.page.html',
  styleUrls: ['./cad-imovel.page.scss'],
})
export class CadImovelPage implements OnInit {


  imovel: Imovel
  constructor(private imoveisService: ImoveisService) { 
    this.imovel = new Imovel()
  }

  ngOnInit() {
    this.exibirImoveis()
  }

  exibirImoveis(): void {
    this.imoveisService.getImoveis().subscribe({
      next: (data) => {
        console.log(data)
      },
      error: (error) => {
        console.error(error.message)
      }
    })
  }

  cadastrarImovel(): void {
    if(this.imovel.vagas > 0) {
      this.imovel.tem_garagem = true
    } else {
      this.imovel.tem_garagem = false
    }
    this.imovel.id_proprietario = 6
    this.imoveisService.postImovel(this.imovel).subscribe({
      next: (data) => {
        console.log(data)
      },
      error: (error) => {
        console.error(error)
      }
    })
  }

}
