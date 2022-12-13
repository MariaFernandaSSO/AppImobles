import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadFuncionarioPage } from './cad-funcionario.page';

const routes: Routes = [
  {
    path: '',
    component: CadFuncionarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadFuncionarioPageRoutingModule {}
