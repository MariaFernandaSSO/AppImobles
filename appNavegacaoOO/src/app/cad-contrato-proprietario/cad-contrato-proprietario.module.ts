import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadContratoProprietarioPageRoutingModule } from './cad-contrato-proprietario-routing.module';

import { CadContratoProprietarioPage } from './cad-contrato-proprietario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadContratoProprietarioPageRoutingModule
  ],
  declarations: [CadContratoProprietarioPage]
})
export class CadContratoProprietarioPageModule {}
