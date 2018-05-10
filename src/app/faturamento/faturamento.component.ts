import { Component, OnInit } from '@angular/core';
import { FaturamentoService } from './faturamento.service';

@Component({
  selector: 'app-faturamento',
  templateUrl: './faturamento.component.html',
  styleUrls: ['./faturamento.component.css']
})
export class FaturamentoComponent implements OnInit {

  faturamento;
  faturamentoInscricao;

  constructor(private FaturamentoService:FaturamentoService) { }

  ngOnInit() {

      this.faturamentoInscricao = this.FaturamentoService.getFaturamento()
      .subscribe( dados => this.faturamento = dados)
  }

  ngOnDestroy(){

      this.faturamentoInscricao.unsubscribe();
  }

}
