import { Segment } from 'semantic-ui-react';
import './App.css';
import Home from './views/home/Home';
import FormProduto from './views/produto/FormProduto';

import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

import FormCliente from './views/cliente/FormCliente';

function App() {

  return (

    <div className="App">
      
      <FormProduto />

      <div style={{marginTop: '6%'}}>
        <Segment vertical color='grey' size='tiny' textAlign='center'>
          &copy; 2025.1 - Projeto WEB III - IFPE Jaboatão dos Guararapes
        </Segment>
      </div>

    </div>
  );
}

export default App;

