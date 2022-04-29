import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadProprietarioPage } from './cad-proprietario.page';

const routes: Routes = [
  {
    path: '',
    component: CadProprietarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadProprietarioPageRoutingModule {}
