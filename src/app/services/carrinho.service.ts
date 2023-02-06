import { Injectable } from '@angular/core';

import { IProdutoCarrinho } from '../interfaces/produtos';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  constructor() { }

  itensCarrinho: IProdutoCarrinho[] = [];

  obtemCarrinho() {
    this.itensCarrinho = JSON.parse(localStorage.getItem('carrinho') || '[]');
    return this.itensCarrinho;
  }

  adicionarAoCarrinho(produto: IProdutoCarrinho) {
    this.itensCarrinho.push(produto);
    localStorage.setItem('carrinho', JSON.stringify(this.itensCarrinho));
  }

  limparCarrinho() {
    this.itensCarrinho = [];
    localStorage.clear();
  }

  removerProdutoCarrinho(idProduto: number) {
    this.itensCarrinho = this.itensCarrinho.filter(item => item.id != idProduto);
    localStorage.setItem('carrinho', JSON.stringify(this.itensCarrinho));
  }
}
