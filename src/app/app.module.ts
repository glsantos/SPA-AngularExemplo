import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { PainelSimplesComponent } from './painel-simples/painel-simples.component';
import { BarraNavegacaoComponent } from './barra-navegacao/barra-navegacao.component';
import { MenuLateralComponent } from './barra-navegacao/menu-lateral/menu-lateral.component';
import { ResumoComponent } from './resumo/resumo.component';
import { FaturamentoComponent } from './faturamento/faturamento.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { ConsultaPorEspecialidadeComponent } from './consulta/consulta-por-especialidade/consulta-por-especialidade.component';
import { AppRoutingModule } from './app-routing.module';
import { TesteComponenteComponent } from './teste-componente/teste-componente.component';
import { ResumoService } from './resumo/resumo.service';
import { ConsultaService } from './consulta/consulta.service';
import { FaturamentoService } from './faturamento/faturamento.service';
import { FormularioUsuarioComponent } from './formulario-usuario/formulario-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    PainelSimplesComponent,
    BarraNavegacaoComponent,
    MenuLateralComponent,
    ResumoComponent,
    FaturamentoComponent,
    ConsultaComponent,
    ConsultaPorEspecialidadeComponent,
    TesteComponenteComponent,
    FormularioUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ResumoService, ConsultaService, FaturamentoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
