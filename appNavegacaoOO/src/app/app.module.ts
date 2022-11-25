import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { UsuariosService } from './services/usuarios/usuarios.service';
import { ImoveisService } from './services/imoveis/imoveis.service';
import { ClientesService } from './services/clientes/clientes.service';
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
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    ClientesService,
    FuncionariosService,
    ImoveisService,
    UsuariosService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
