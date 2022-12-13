import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadFuncionarioPageRoutingModule } from './cad-funcionario-routing.module';

import { CadFuncionarioPage } from './cad-funcionario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadFuncionarioPageRoutingModule
  ],
  declarations: [CadFuncionarioPage]
})
export class CadFuncionarioPageModule {}
