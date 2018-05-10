import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ResumoComponent } from './resumo/resumo.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { TesteComponenteComponent } from './teste-componente/teste-componente.component';
import { FaturamentoComponent } from './faturamento/faturamento.component';


//Criando Rotas no Angular
let routes = [
  { path : "resumo", component: ResumoComponent},
  { path : "consulta", component: ConsultaComponent},
  { path : "teste", component: TesteComponenteComponent},
  { path : "faturamento", component: FaturamentoComponent},
  //Esta deve ser a ultima rota do Array
  //As * significam: qualquer coisa diferente das condições(no caso condições anteriores)
  { path : "**", redirectTo: "/resumo"}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
