import React, { useState } from "react";
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';
import MenuSistema from '../../MenuSistema';

import '../../App.css';
import { BrowserRouter } from "react-router-dom";
import Rotas from './Rotas';
import axios from "axios";

export default function FormProduto() {
   
  const [titulo, setTitulo] = useState();
  const [codigo, setCodigo] = useState();
  const [descricao, setDescricao] = useState();
  const [valorUnitario, setValorUnitario] = useState();
  const [tempodeEntregaMinimoemMinutos, setTempodeEntregaMaximoemMinutos] = useState();
  const [tempodeEntregaMaximoemMinutos, setTempodeEntregaMinimoemMinutos] = useState();

      function salvar() {

		let clienteRequest = {
		     titulo: titulo,
		     codigo: codigo,
		     descricao: descricao,
		     valorUnitario: valorUnitario,
		     tempodeEntregaMinimoemMinutos: tempodeEntregaMinimoemMinutos,
		     tempodeEntregaMaximoemMinutos:tempodeEntregaMaximoemMinutos,
            
		}
	
		axios.post("http://localhost:8080/api/produto", produtoRequest)
		.then((response) => {
		     console.log('Produto cadastrado com sucesso.')
		})
		.catch((error) => {
		     console.log('Erro ao incluir o um produto.')
		})
	}

  return (
    <div>
	 <MenuSistema tela={'produto'} />
      <div style={{ marginTop: '3%' }}>
        <Container textAlign='justified'>
          <h2>
            <span style={{ color: 'darkgray' }}>
              Cliente &nbsp;<Icon name='angle double right' size="small" />
            </span>
            Produto
          </h2>

          <Divider />

          <div style={{ marginTop: '4%' }}>
            <Form>
              {/* Grupo: Título e Código do Produto */}
              <Form.Group widths='equal'>
              <Form.Input
                  required
                  fluid
                  label='Titulo'
                  maxLength="100"
                  placeholder="informe o título do produto"
                 value={titulo}
		         	onChange={e => setTitulo(e.target.value)}
                  
                />
                <Form.Input
                  required
                  fluid
                  label='Codigo do Produto'
                  maxLength="100"
                  value={codigodoProduto}
		            onChange={e => setCodigodoProduto(e.target.value)}
                />
              </Form.Group>

              <Form.Group widths='equal'>
                
                <Form.TextArea
                  label='descricao'
                  placeholder='Informe descricao do produto'
                   value={descricao}
		             onChange={e => setDescricao(e.target.value)}
                />
              </Form.Group>

              <Form.Group widths='equal'>
                <Form.Input
                  required
                  fluid
                  label='Valor Unitário'
                  maxLength="10"
                    value={valorUnitario}
		             onChange={e => setValorUnitario(e.target.value)}
                />
          
                <Form.Input
                  type="number"
                  label='Tempo de Entrega Mínimo em Minutos'
                  placeholder='30'
                   value={tempodeEntregaMínimoemMinutos}
		             onChange={e => setTempodeEntregaMínimoemMinutos(e.target.value)}
                />
            
                <Form.Input
                  type="number"
                  label='Tempo de Entrega Máximo em Minutos'
                  placeholder='40'
                  value={tempodeEntregaMáximoemMinutos)
                  onChange={e => setTempodeEntregaMáximoemMinutos(e.target.value)}
                />
              </Form.Group>

              <div style={{ marginTop: '4%' }}>
                <Button
                  type="button"
                  inverted
                  circular
                  icon
                  labelPosition='left'
                  color='orange'
                   onClick={() => listar()}
                >
                  <Icon name='arrow left' />
                  Listar
                </Button>

                <Button
                  inverted
                  circular
                  icon
                  labelPosition='left'
                  color='blue'
                  floated='right'
                    onClick={() => salvar()}
                >
                  <Icon name='check' />
                  Salvar
                </Button>
              </div>
            </Form>
          </div>
        </Container>
      </div>
    </div>
  );
}
