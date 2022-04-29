import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadLocadorPage } from './cad-locador.page';

const routes: Routes = [
  {
    path: '',
    component: CadLocadorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadLocadorPageRoutingModule {}
