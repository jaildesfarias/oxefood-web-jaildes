import { Route, Routes } from "react-router-dom";

<<<<<<< HEAD
// Importações dos componentes
=======
import FormCategoriaProduto from './views/categoriaProduto/FormCategoriaProduto';
import ListCategoriaProduto from './views/categoriaProduto/ListCategoriaProduto';
>>>>>>> 1433093612b1cdf2bc906d80acea2d75b7b2801d
import FormCliente from './views/cliente/FormCliente';
import ListCliente from './views/cliente/ListCliente';
import Home from './views/home/Home';

<<<<<<< HEAD
=======
import FormEntregador from './views/entregador/FormEntregador';
import ListEntregador from './views/entregador/ListEntregador';
import Home from './views/home/Home';
import FormProduto from './views/produto/FormProduto';
>>>>>>> 1433093612b1cdf2bc906d80acea2d75b7b2801d
import ListProduto from './views/produto/ListProduto';
import FormEnderecos from "./views/cliente/FormEnderecos";
import ListEnderecos from "./views/cliente/ListEnderecos";

<<<<<<< HEAD
import FormEntregador from './views/entregador/FormEntregador';
import FormProduto from  './views/produto/FormProduto';
import ListEntregador from './views/entregador/ListEntregador';
import DetalheEntregador from './views/home/DetalheEntregador';

function Rotas() {
=======
function Rotas() { 
>>>>>>> 1433093612b1cdf2bc906d80acea2d75b7b2801d
    return (
        <>
            <Routes>
                <Route path="/" element={ <Home/> } /> 
                <Route path="list-cliente" element={ <ListCliente/> } /> 
                <Route path="list-produto" element={ <ListProduto/> } />
                <Route path="list-entregador" element={ <ListEntregador/> } />
              
                <Route path="list-categoriaProduto" element={ <ListCategoriaProduto/> } />
                <Route path="form-cliente" element={ <FormCliente/> } />
                <Route path="form-produto" element={ <FormProduto/> } />
                <Route path="form-entregador" element={ <FormEntregador/> } />
             
                <Route path="form-categoriaProduto" element={ <FormCategoriaProduto/> } />
                <Route path="form-endereco" element={ <FormEnderecos/> } />
                <Route path="list-endereco" element={ <ListEnderecos/> } />
            </Routes>
        </>
    )
}

export default Rotas