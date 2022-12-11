import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PessoasService } from './services/pessoas/pessoas.service';
import { ImobiliariasService } from './services/imobiliarias/imobiliarias.service';
import { ContratoImobiliariasProprietariosService } from './services/contratos_imobiliarias_proprietarios/contrato-imobiliarias-proprietarios.service';
import { ContratosImobiliariasClientesService } from './services/contratos_imobiliarias_clientes/contratos-imobiliarias-clientes.service';
import { FuncionariosService } from './services/funcionarios/funcionarios.service';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  PessoasService,
  ImobiliariasService,
  ContratoImobiliariasProprietariosService,
  ContratosImobiliariasClientesService,
  FuncionariosService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
