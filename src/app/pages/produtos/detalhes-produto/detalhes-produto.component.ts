import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IProduto, IProdutoCarrinho } from 'src/app/interfaces/produtos';
import { CarrinhoService } from 'src/app/services/carrinho.service';
import { NotificacaoService } from 'src/app/services/notificacao.service';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-detalhes-produto',
  templateUrl: './detalhes-produto.component.html',
  styleUrls: ['./detalhes-produto.component.css']
})
export class DetalhesProdutoComponent implements OnInit {

  constructor(private produtosService: ProdutosService, private route: ActivatedRoute, private notificacaoService: NotificacaoService, private carrinhoService: CarrinhoService) { }
  produto: IProduto | undefined;
  quantidade: number = 1;

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      //const routeParams = this.route.snapshot.paramMap;
      //const produtId = routeParam.get('id');
      this.produto = this.produtosService.getOne(Number(params.get('id')));
    });
  }

  adicionarAoCarrinho() {
    const produto: IProdutoCarrinho = {
      ...this.produto!,
      quantidadeProduto: this.quantidade
    }

    this.carrinhoService.adicionarAoCarrinho(produto);
    this.notificacaoService.notificar(
      `Foram adicionados ${this.quantidade} do produto ${this.produto?.descricao} ao carrinho.`
    )
  }
}
