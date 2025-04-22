import InputMask from 'react-input-mask';
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';
import React, { useState } from "react";



export default function FormProduto() {
  
  const [nome, setNome] = useState();
   const [cpf, setCpf] = useState();
   const [rg, setRg] = useState();
   const [dataNascimento, setDataNascimento] = useState();
   const [foneCelular, setFoneCelular] = useState();
   const [foneFixo, setFoneFixo] = useState();

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
              Entrgador &nbsp;<Icon name='angle double right' size="small" />
            </span>
            Cadastro
          </h2>

          <Divider />

          <div style={{ marginTop: '4%' }}>
            <Form>
              <Form.Group widths='equal'> {/* Grupo: Nome, Cpf e Rg */}
                <Form.Input
                  fluid
                  label='Nome'
                  placeholder
                  value={nome}
		            	onChange={e => 
                  setNome(e.target.value)} 
                />
                <Form.Input
                  fluid
                  label='CFP'
                  placeholder=''
                />
                <Form.Input
                  fluid
                  label='rg'
                  placeholder=''
                />
              </Form.Group>
              
              <Form.Group widths='equal'>
                <Form.Input
                  fluid
                  label='DTNascimento'
                  placeholder='20/03/1985'
                />
                <Form.Input
                  fluid
                  label='Fone Celular'
                  placeholder=''
                />
                <Form.Input
                  fluid
                  label='Fone Fixo'
                  placeholder=''
                />
               <Form.Input
                  fluid
                  label='QTD Entregas Realizadas'
                  placeholder=''
                />
                <Form.Input
                  fluid
                  label='Valor Por Frete'
                  placeholder=''
                />
             </Form.Group>
                
              <Form.Group widths='equal'>
                <Form.Input
                  fluid
                  label='Rua '
                  placeholder=''
                />
                <Form.TextArea
                  label='Número '
                  placeholder=''
                />
              </Form.Group>

              <Form.Group widths='equal'>
                <Form.Input
                  required
                  fluid
                  label='Bairro'
                  maxLength=""
                />
                 <Form.Input
                  required
                  fluid
                  label='Cidade'
                  maxLength=""
                />
              </Form.Group>

              <Form.Group widths='equal'>
                 <Form.Input
                  required
                  fluid
                  label='UP'
                  placeholder='Selecione'
                />
              </Form.Group>

              <Form.Group widths='equal'>
                 <Form.Input
                  fluid
                  label='Complemento'
                  placeholder=''
                />
              </Form.Group>
               <Form.Group widths='equal'>
                   <Form.Field>
                
                <Form.Group inline>
                  <Form.Radio
                    label='Ativo'
                    value='Ativo'
                    checked={ativo === 'Ativo'}
                    onChange={handleAtivoChange}
                  /> 
                    <Form.Radio
                      label='Sim'
                      value='sim'
                      checked={ativo === 'Sim'}
                      onChange={handleAtivoChange}
                    />
                    <Form.Radio
                      label='Não'
                      value='nao'
                      checked === 'Não'}
                      onChange={handleAtivoChange}
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

                     
              

            
