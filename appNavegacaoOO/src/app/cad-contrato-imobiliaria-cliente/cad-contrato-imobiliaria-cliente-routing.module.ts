import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadContratoImobiliariaClientePage } from './cad-contrato-imobiliaria-cliente.page';

const routes: Routes = [
  {
    path: '',
    component: CadContratoImobiliariaClientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadContratoImobiliariaClientePageRoutingModule {}
