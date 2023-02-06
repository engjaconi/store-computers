import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IProduto } from 'src/app/interfaces/produtos';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {
  constructor(private produtosService: ProdutosService, private router: ActivatedRoute) { }
  produtos: IProduto[] = [];

  ngOnInit() {
    let produtos: IProduto[] = this.produtosService.getAll();

    this.router.queryParamMap.subscribe(params => {
      const descricao = params.get('descricao')?.toLowerCase();

      if (descricao) {
        this.produtos = produtos.filter(produto => produto.descricao.toLowerCase().includes(descricao));
        return;
      }
      this.produtos = produtos;
    })
  }
}