import { Component, OnInit } from '@angular/core';
import { ImobiliariasService } from '../services/imobiliarias/imobiliarias.service';

@Component({
  selector: 'app-cad-imobiliaria',
  templateUrl: './cad-imobiliaria.page.html',
  styleUrls: ['./cad-imobiliaria.page.scss'],
})
export class CadImobiliariaPage implements OnInit {

  constructor(
    private imobiliariaService: ImobiliariasService
  ) {
    this.getImobiliarias()
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

  ngOnInit() {
  }

}
