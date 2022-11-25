import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadPessoaPageRoutingModule } from './cad-pessoa-routing.module';

import { CadPessoaPage } from './cad-pessoa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadPessoaPageRoutingModule
  ],
  declarations: [CadPessoaPage]
})
export class CadPessoaPageModule {}
