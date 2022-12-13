import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadContratoImobiliariaClientePageRoutingModule } from './cad-contrato-imobiliaria-cliente-routing.module';

import { CadContratoImobiliariaClientePage } from './cad-contrato-imobiliaria-cliente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadContratoImobiliariaClientePageRoutingModule
  ],
  declarations: [CadContratoImobiliariaClientePage]
})
export class CadContratoImobiliariaClientePageModule {}
