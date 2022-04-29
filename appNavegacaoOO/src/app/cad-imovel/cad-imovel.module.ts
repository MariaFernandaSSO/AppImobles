import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadImovelPageRoutingModule } from './cad-imovel-routing.module';

import { CadImovelPage } from './cad-imovel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadImovelPageRoutingModule
  ],
  declarations: [CadImovelPage]
})
export class CadImovelPageModule {}
