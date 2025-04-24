import React from "react";
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';
import '../../App.css';
import { BrowserRouter } from "react-router-dom";
import Rotas from './Rotas';



export default function FormProduto() {
   
  const [titulo, setTitulo] = useState();
  const [codigo, setCodigo] = useState();
  const [descricao, setDescricao] = useState();
  const [valorUnitário, setValorUnitário] = useState();
  const [tempodeEntregaMinimoemMinutos, setTempodeEntregaMaximoemMinutos] = useState();
  const [tempodeEntregaMaximoemMinutos, setTempodeEntregaMinimoemMinutos] = useState();
  const [foneCelular, setFoneCelular] = useState();
  return (
    <div>
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
                  
                />
                <Form.Input
                  required
                  fluid
                  label='Codigo do Produto'
                  maxLength="100"
                />
              </Form.Group>

              <Form.Group widths='equal'>
                
                <Form.TextArea
                  label='descricao'
                  placeholder='Informe descricao do produto'
                />
              </Form.Group>

              <Form.Group widths='equal'>
                <Form.Input
                  required
                  fluid
                  label='Valor Unitário'
                  maxLength="10"
                />
          
        
                <Form.Input
                  type="number"
                  label='Tempo de Entrega Mínimo (em Minutos)'
                  placeholder='30'
                />
            
                <Form.Input
                  type="number"
                  label='Tempo de Entrega Máximo (em Minutos)'
                  placeholder='40'
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
