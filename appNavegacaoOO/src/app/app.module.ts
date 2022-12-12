import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ImoveisService } from './services/imoveis/imoveis.service';
import { ClientesService } from './services/clientes/clientes.service';
import { ContratoProprietarioService } from './services/contrato-proprietario/contrato-proprietario.service';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    ClientesService,
    ImoveisService,
    ContratoProprietarioService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
