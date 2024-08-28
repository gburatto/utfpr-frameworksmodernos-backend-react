const produtos = require('express').Router();

const controllerProduto = require('./controller-produto')();

produtos.get('/', controllerProduto.listar);
produtos.get('/:id', controllerProduto.buscarPorId);
produtos.post('/', controllerProduto.salvar);
produtos.delete('/:id', controllerProduto.excluir);

module.exports = produtos;
