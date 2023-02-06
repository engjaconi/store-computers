import { Injectable } from '@angular/core';

import { IProduto, produtos } from '../interfaces/produtos';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  produtos: IProduto[] = produtos;

  constructor() { }

  getAll() {
    return this.produtos;
  }

  getOne(idProduto: number) {
    return this.produtos.find(produto => produto.id === idProduto);
  }
}