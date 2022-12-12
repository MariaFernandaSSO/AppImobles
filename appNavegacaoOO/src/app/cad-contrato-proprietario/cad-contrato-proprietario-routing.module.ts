import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadContratoProprietarioPage } from './cad-contrato-proprietario.page';

const routes: Routes = [
  {
    path: '',
    component: CadContratoProprietarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadContratoProprietarioPageRoutingModule {}
