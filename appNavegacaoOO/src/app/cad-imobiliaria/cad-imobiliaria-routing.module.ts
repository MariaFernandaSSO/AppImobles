import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadImobiliariaPage } from './cad-imobiliaria.page';

const routes: Routes = [
  {
    path: '',
    component: CadImobiliariaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadImobiliariaPageRoutingModule {}
