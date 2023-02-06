import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-barra-pesquisa',
  templateUrl: './barra-pesquisa.component.html',
  styleUrls: ['./barra-pesquisa.component.css']
})
export class BarraPesquisaComponent {
  constructor(private router: Router) { }

  descricao = '';

  pesquisar() {
    if (this.descricao) {
      this.router.navigate(['produtos'], { queryParams: { 'descricao': this.descricao } });
      return;
    }
    this.router.navigate(['produtos']);
  }
}
