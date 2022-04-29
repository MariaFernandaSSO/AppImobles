import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadLocadorPageRoutingModule } from './cad-locador-routing.module';

import { CadLocadorPage } from './cad-locador.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadLocadorPageRoutingModule
  ],
  declarations: [CadLocadorPage]
})
export class CadLocadorPageModule {}
