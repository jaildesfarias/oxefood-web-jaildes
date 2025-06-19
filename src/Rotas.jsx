import { Route, Routes } from "react-router-dom";

// Importações dos componentes
import FormCliente from './views/cliente/FormCliente';
import ListCliente from './views/cliente/ListCliente';
import Home from './views/home/Home';

import FormProduto from './views/produto/FormProduto';
import ListProduto from './views/produto/ListProduto';

import FormEntregador from './views/entregador/FormEntregador';

import ListEntregador from './views/entregador/ListEntregador';
import DetalheEntregador from './views/home/DetalheEntregador';

function Rotas() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="form-cliente" element={<FormCliente />} />
            <Route path="list-cliente" element={<ListCliente />} />
            <Route path="form-produto" element={<FormProduto />} />
            <Route path="list-produto" element={<ListProduto />} />

            <Route path="form-entregador" element={<FormEntregador />} />
            <Route path="list-entregador" element={<ListEntregador />} />
            <Route path="detalhe-entregador/:id" element={<DetalheEntregador />} />
            
        </Routes>
    );
}

export default Rotas;
