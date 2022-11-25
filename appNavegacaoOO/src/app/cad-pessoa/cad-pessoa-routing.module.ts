import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadPessoaPage } from './cad-pessoa.page';

const routes: Routes = [
  {
    path: '',
    component: CadPessoaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadPessoaPageRoutingModule {}
