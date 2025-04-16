import React, { useState } from 'react';
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';

export default function FormProduto() {
  const [ativo, setAtivo] = useState('');

  const handleAtivoChange = (e, { value }) => {
    setAtivo(value);
  };

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

              {/* Grupo: Nome, Código e Ativo */}
              <Form.Group widths='equal'>
                <Form.Input
                  fluid
                  label='Nome'
                  placeholder='Digite o nome'
                />
                <Form.Input
                  fluid
                  label='Código'
                  placeholder='Digite o código'
                />
                <Form.Field>
                  <label><strong>Ativo</strong></label>
                  <Form.Group inline>
                    <Form.Radio
                      label='Sim'
                      name='ativo'
                      value='sim'
                      checked={ativo === 'sim'}
                      onChange={handleAtivoChange}
                    />
                    <Form.Radio
                      label='Não'
                      name='ativo'
                      value='nao'
                      checked={ativo === 'nao'}
                      onChange={handleAtivoChange}
                    />
                  </Form.Group>
                </Form.Field>
              </Form.Group>

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

              {/* Grupo: Tempo de Entrega Mínimo */}
              <Form.Group widths='equal'>
                <Form.Input
                  type="number"
                  label='Tempo de Entrega Mínimo (em Minutos)'
                  placeholder='30'
                />
              </Form.Group>

              {/* Grupo: Tempo de Entrega Máximo */}
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
                  Voltar
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
