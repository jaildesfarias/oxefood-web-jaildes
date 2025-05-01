 import React from 'react';
import { Route, Routes } from "react-router-dom";

import FormCliente from './views/cliente/FormCliente';
import FormEntregador from './views/entergador/FormEntergador';
import Home from './views/home/Home';
import FormProduto from './views/produto/FormProduto';

import ListCliente from './views/cliente/ListCliente';

function Rotas() {
    return (
        <>
            <Routes>
                <Route path="/" element={ <Home/> } />
                <Route path="form-cliente" element={ <FormCliente/> } />
                <Route path="form-produto" element={ <FormProduto/> } />
                <Route path="form-entregador" element={ <FormEntregador/> } />

                <Route path="list-cliente" element={ <ListCliente/> } />

            </Routes>
        </>
    )
}

export default Rotas;
