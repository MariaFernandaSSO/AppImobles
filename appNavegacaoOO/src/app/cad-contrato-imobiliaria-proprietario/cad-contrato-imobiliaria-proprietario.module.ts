import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadContratoImobiliariaProprietarioPageRoutingModule } from './cad-contrato-imobiliaria-proprietario-routing.module';

import { CadContratoImobiliariaProprietarioPage } from './cad-contrato-imobiliaria-proprietario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadContratoImobiliariaProprietarioPageRoutingModule
  ],
  declarations: [CadContratoImobiliariaProprietarioPage]
})
export class CadContratoImobiliariaProprietarioPageModule {}
