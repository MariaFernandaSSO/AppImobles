import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadProprietarioPageRoutingModule } from './cad-proprietario-routing.module';

import { CadProprietarioPage } from './cad-proprietario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadProprietarioPageRoutingModule
  ],
  declarations: [CadProprietarioPage]
})
export class CadProprietarioPageModule {}
