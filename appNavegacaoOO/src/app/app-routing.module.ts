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
    path: 'cad-locador',
    loadChildren: () => import('./cad-locador/cad-locador.module').then( m => m.CadLocadorPageModule)
  },
  {
    path: 'cad-cliente',
    loadChildren: () => import('./cad-cliente/cad-cliente.module').then( m => m.CadClientePageModule)
  },
  {
    path: 'cad-contrato-proprietario',
    loadChildren: () => import('./cad-contrato-proprietario/cad-contrato-proprietario.module').then( m => m.CadContratoProprietarioPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
