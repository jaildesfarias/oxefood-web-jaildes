import logo from './logo.svg';
import './App.css';
import Home from './views/home/Home';
import FormCliente from './views/cliente/FormCliente';
import FormProduto from './views/produto/FormProduto';
import FormEntregador from './views/entregador/FormEntregador';
import FormCategoriaProduto from './views/categoriaProduto/FormCategoriaProduto';

import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

import { Segment } from 'semantic-ui-react';
import Rotas from './Rotas';


function App() {
 return (
   <div className="App">
       <Rotas />

     <div style={{marginTop: '6%'}}>
        <Segment vertical color='grey' size='tiny' textAlign='center'>
          &copy; 2023 - Projeto WEB III - IFPE Jaboatão dos Guararapes
        </Segment>
      </div>

   </div>
 );
 
}

export default App;
