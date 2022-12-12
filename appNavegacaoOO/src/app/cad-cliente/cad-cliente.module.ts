import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadClientePageRoutingModule } from './cad-cliente-routing.module';

import { CadClientePage } from './cad-cliente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadClientePageRoutingModule
  ],
  declarations: [CadClientePage]
})
export class CadClientePageModule {}
