import { Component, OnInit } from '@angular/core';
import { Imobiliaria } from '../models/Imobiliaria';
import { ImobiliariasService } from '../services/imobiliarias/imobiliarias.service';

@Component({
  selector: 'app-cad-imobiliaria',
  templateUrl: './cad-imobiliaria.page.html',
  styleUrls: ['./cad-imobiliaria.page.scss'],
})
export class CadImobiliariaPage implements OnInit {

  imobiliaria : Imobiliaria
  constructor(
    private imobiliariaService: ImobiliariasService
  ) {
    this.imobiliaria = new Imobiliaria()
  }

  getImobiliarias(){
    this.imobiliariaService.buscarImobiliarias().subscribe(
      (data) => {
        console.log(data)
      },
      (error) => {
        console.error(error)
      }
    )
  }

  cadastrarImobiliaria(): void {
    this.imobiliariaService.postImobiliaria(this.imobiliaria).subscribe({
      next: (data) => {
        console.log(data)
      },
      error: (error) => {
        console.error(error)
      }
    })
  }


  ngOnInit() {
    this.getImobiliarias()
  }

}
