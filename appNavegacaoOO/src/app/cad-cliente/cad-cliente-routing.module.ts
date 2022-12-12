import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadClientePage } from './cad-cliente.page';

const routes: Routes = [
  {
    path: '',
    component: CadClientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadClientePageRoutingModule {}
