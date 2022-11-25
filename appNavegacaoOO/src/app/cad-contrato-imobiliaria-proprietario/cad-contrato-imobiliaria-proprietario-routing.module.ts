import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadContratoImobiliariaProprietarioPage } from './cad-contrato-imobiliaria-proprietario.page';

const routes: Routes = [
  {
    path: '',
    component: CadContratoImobiliariaProprietarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadContratoImobiliariaProprietarioPageRoutingModule {}
