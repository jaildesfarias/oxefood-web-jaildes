import axios from "axios";
import React, { useState } from "react";
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';
import '../../App.css';
import MenuSistema from '../../MenuSistema';
import { Link } from "react-router-dom";

export default function FormProduto() {
  const [titulo, setTitulo] = useState('');
  const [codigo, setCodigo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [valorUnitario, setValorUnitario] = useState('');
  const [tempoEntregaMinimo, setTempoEntregaMinimo] = useState('');
  const [tempoEntregaMaximo, setTempoEntregaMaximo] = useState('');

  function salvar() {
    const produtoRequest = {
      titulo,
      codigo,
      descricao,
      valorUnitario,
      tempoEntregaMinimo: tempoEntregaMinimo,
      tempoEntregaMaximo: tempoEntregaMaximo
    };

    axios.post("http://localhost:8080/api/produto", produtoRequest)
      .then((response) => {
        console.log('Produto cadastrado com sucesso.');
      })
      .catch((error) => {
        console.log('Erro ao incluir o produto.');
      });
  }

  // Função listar não implementada
  function listar() {
    console.log("Implementar navegação para listagem de produtos.");
  }

  return (
    <div>
      <MenuSistema tela={'produto'} />
      <div style={{ marginTop: '3%' }}>
        <Container textAlign='justified'>
          <h2>
            <span style={{ color: 'darkgray' }}>
              Produto &nbsp;<Icon name='angle double right' size="small" />
            </span>
            Cadastro
          </h2>

          <Divider />

          <div style={{ marginTop: '4%' }}>
            <Form>
              <Form.Group widths='equal'>
                <Form.Input
                  required
                  fluid
                  label='Título'
                  maxLength="100"
                  placeholder="Informe o título do produto"
                  value={titulo}
                  onChange={e => setTitulo(e.target.value)}
                />
                <Form.Input
                  required
                  fluid
                  label='Código do Produto'
                  maxLength="100"
                  value={codigo}
                  onChange={e => setCodigo(e.target.value)}
                />
              </Form.Group>

              <Form.Group widths='equal'>
                <Form.TextArea
                  label='Descrição'
                  placeholder='Informe a descrição do produto'
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
                  label='Tempo de Entrega Mínimo (minutos)'
                  placeholder='30'
                  value={tempoEntregaMinimo}
                  onChange={e => setTempoEntregaMinimo(e.target.value)}
                />
                <Form.Input
                  type="number"
                  label='Tempo de Entrega Máximo (minutos)'
                  placeholder='40'
                  value={tempoEntregaMaximo}
                  onChange={e => setTempoEntregaMaximo(e.target.value)}
                />
              </Form.Group>

              <div style={{ marginTop: '4%' }}>
                
              <Link to={'/list-cliente'}>
                <Button
                  type="button"
                  inverted
                  circular
                  icon
                  labelPosition='left'
                  color='orange'
                  onClick={listar}
                >
                  <Icon name='arrow left' />
                  Listar
                </Button>
                </Link>


                <Link to={'/list-cliente'}>
                <Button
                  inverted
                  circular
                  icon
                  labelPosition='left'
                  color='blue'
                  floated='right'
                  onClick={salvar}
                >
                  <Icon name='check' />
                  Salvar
                </Button>
                </Link>
              </div>
            </Form>
          </div>
        </Container>
      </div>
    </div>
  );
}
