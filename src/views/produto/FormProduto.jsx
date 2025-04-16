import InputMask from 'comigo-tech-react-input-mask';
import React from "react";
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';

export default function FormProduto() {
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
                <Form.TextArea
                  label='Título'
                  placeholder='Informe o título do produto'
                />
                <Form.TextArea
                  label='Código do Produto'
                  placeholder='Informe o código do produto'
                />
              </Form.Group>

              <Form.Group widths='equal'>
                <Form.TextArea
                  label='Descrição'
                  placeholder='Informe descrição do produto'
                />
              </Form.Group>

              <Form.Group widths='equal'>
                <Form.Input
                  required
                  fluid
                  label='Valor Unitário'
                  maxLength="100"
                />
              </Form.Group>

              <Form.Group widths='equal'>
                <Form.Input
                  type="number"
                  label='Tempo de Entrega Mínimo (em Minutos)'
                  placeholder='30'
                />
              </Form.Group>

              <Form.Group widths='equal'>
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
