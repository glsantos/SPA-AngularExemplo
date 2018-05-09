import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resumo',
  templateUrl: './resumo.component.html',
  styleUrls: ['./resumo.component.css']
})
export class ResumoComponent implements OnInit {

  //Simulando uma API
  resumo = {

    consultas : {
      consultas_30dias_anteriores : 87,
      consultas_30dias_posteriores : 79
    },
    faturamento : {
      anterior : {
        valor : 100000,
        comparativo : 2
      },
      previsao : {
        valor : 150000,
        comparativo : 19
      }
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
