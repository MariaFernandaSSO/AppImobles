import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'cad-imovel',
    loadChildren: () => import('./cad-imovel/cad-imovel.module').then( m => m.CadImovelPageModule)
  },
  {
    path: 'cad-imobiliaria',
    loadChildren: () => import('./cad-imobiliaria/cad-imobiliaria.module').then( m => m.CadImobiliariaPageModule)
  },
  {
    path: 'cad-proprietario',
    loadChildren: () => import('./cad-proprietario/cad-proprietario.module').then( m => m.CadProprietarioPageModule)
  },
  {
    path: 'cad-locador',
    loadChildren: () => import('./cad-locador/cad-locador.module').then( m => m.CadLocadorPageModule)
  },
  {
    path: 'cad-pessoa',
    loadChildren: () => import('./cad-pessoa/cad-pessoa.module').then( m => m.CadPessoaPageModule)
  },
  {
    path: 'cad-contrato-imobiliaria-cliente',
    loadChildren: () => import('./cad-contrato-imobiliaria-cliente/cad-contrato-imobiliaria-cliente.module').then( m => m.CadContratoImobiliariaClientePageModule)
  },
  {
    path: 'cad-contrato-imobiliaria-proprietario',
    loadChildren: () => import('./cad-contrato-imobiliaria-proprietario/cad-contrato-imobiliaria-proprietario.module').then( m => m.CadContratoImobiliariaProprietarioPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
