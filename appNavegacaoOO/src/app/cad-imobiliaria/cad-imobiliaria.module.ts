import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadImobiliariaPageRoutingModule } from './cad-imobiliaria-routing.module';

import { CadImobiliariaPage } from './cad-imobiliaria.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadImobiliariaPageRoutingModule
  ],
  declarations: [CadImobiliariaPage]
})
export class CadImobiliariaPageModule {}
