import { Route, Routes } from "react-router-dom";

// Importações dos formulários e listas
import FormCategoriaProduto from './views/categoriaProduto/FormCategoriaProduto';
import ListCategoriaProduto from './views/categoriaProduto/ListCategoriaProduto';

import FormCliente from './views/cliente/FormCliente';
import ListCliente from './views/cliente/ListCliente';

import FormCupomDesconto from './views/cupomDesconto/FormCupomDesconto';
import ListCupomDesconto from './views/cupomDesconto/ListCupomDesconto';

import FormEntregador from './views/entregador/FormEntregador';
import ListEntregador from './views/entregador/ListEntregador';

import FormProduto from './views/produto/FormProduto';
import ListProduto from './views/produto/ListProduto';

import FormEndereco from './views/enderecoCliente/FormEnderecoCliente';
import ListEndereco from './views/enderecoCliente/ListEnderecoCliente';

import Home from './views/home/Home';

function Rotas() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />

        
        <Route path="form-cliente" element={<FormCliente />} />
        <Route path="list-cliente" element={<ListCliente />} />

        <Route path="form-produto" element={<FormProduto />} />
        <Route path="list-produto" element={<ListProduto />} />

       
        <Route path="form-entregador" element={<FormEntregador />} />
        <Route path="list-entregador" element={<ListEntregador />} />

       
        <Route path="form-cupomDesconto" element={<FormCupomDesconto />} />
        <Route path="list-cupomDesconto" element={<ListCupomDesconto />} />

        <Route path="form-categoriaProduto" element={<FormCategoriaProduto />} />
        <Route path="list-categoriaProduto" element={<ListCategoriaProduto />} />

   
        <Route path="form-enderecoCliente" element={<FormEndereco />} />
        <Route path="list-enderecoCliente" element={<ListEndereco />} />
      </Routes>
    </>
  );
}

export default Rotas;
