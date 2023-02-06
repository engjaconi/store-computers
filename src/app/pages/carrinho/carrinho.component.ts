import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { IProdutoCarrinho } from 'src/app/interfaces/produtos';
import { CarrinhoService } from 'src/app/services/carrinho.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {
  constructor(private carrinhoService: CarrinhoService, private router: Router) { }
  carrinho: IProdutoCarrinho[] | undefined;
  total: number = 0;

  ngOnInit(): void {
    this.buscaItemCarrinho();
  }

  buscaItemCarrinho() {
    this.carrinho = this.carrinhoService.obtemCarrinho();
    this.calculaTotal();
  }

  removerItem(idItem: number) {
    this.carrinhoService.removerProdutoCarrinho(idItem);
    this.buscaItemCarrinho();
  }

  calculaTotal() {
    this.total = Number(this.carrinho?.reduce(
      (prev, curr) => prev + (curr.preco * curr.quantidadeProduto), 0));
  }

  comprar() {
    alert('Parabéns, você finalizou sua compra!');
    this.carrinhoService.limparCarrinho();
    this.buscaItemCarrinho();
    this.router.navigate(['/']);
  }
}
