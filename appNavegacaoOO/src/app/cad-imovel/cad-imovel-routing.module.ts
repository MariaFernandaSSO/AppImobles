import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadImovelPage } from './cad-imovel.page';

const routes: Routes = [
  {
    path: '',
    component: CadImovelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadImovelPageRoutingModule {}
