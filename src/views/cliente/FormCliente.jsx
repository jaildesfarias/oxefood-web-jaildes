import InputMask from 'comigo-tech-react-input-mask';

import React, { useState } from "react";
import { Button, Container, Divider, Form, Icon, Segment } from 'semantic-ui-react';
import '../../App.css';

export default function FormCliente () {
    
   const [nome, setNome] = useState();
   const [cpf, setCpf] = useState();
   const [dataNascimento, setDataNascimento] = useState();
   const [foneCelular, setFoneCelular] = useState();
   const [foneFixo, setFoneFixo] = useState();


    return (
        <div>
            <div style={{marginTop: '3%'}}>
                <Container textAlign='justified' >

                    <h2> 
                      <span style={{color: 'darkgray'}}> 
                        Cliente &nbsp;
                        <Icon name='angle double right' size="small" /> 
                      </span> 
                      Cadastro 
                    </h2>

                    <Divider />

                    <div style={{marginTop: '4%'}}>
                        <Form>

                            <Form.Group widths='equal'>
                                <Form.Input
                                    required
                                    fluid
                                    label='Nome'
                                    maxLength="100"
                                />

                                <Form.Input
                                    required
                                    fluid
                                    label='CPF'
                                >
                                    <InputMask
                                        required
                                        mask="999.999.999-99"
                                    /> 
                                </Form.Input>

                                <Form.Input
                                    required
                                    fluid
                                    label='RG'
                                >
                                    <InputMask
                                        required
                                        mask="99.999.999-9"
                                    />
                                </Form.Input>
                            </Form.Group>
                            
                            <Form.Group>
                                <Form.Input
                                    fluid
                                    label='Fone Celular'
                                    width={6}
                                >
                                    <InputMask 
                                        mask="(99) 9999.9999"
                                    /> 
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Fone Fixo'
                                    width={6}
                                >
                                    <InputMask 
                                        mask="(99) 9999.9999"
                                    /> 
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Data Nascimento'
                                    width={6}
                                >
                                    <InputMask 
                                        mask="99/99/9999" 
                                        maskChar={null}
                                        placeholder="Ex: 20/03/1985"
                                    /> 
                                </Form.Input>
                            </Form.Group>
                        
                        </Form>
                        
                        <div style={{marginTop: '4%'}}>
                            <Button
                                type="button"
                                inverted
                                circular
                                icon
                                labelPosition='left'
                                color='orange'
                            >
                                <Icon name='reply' />
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
                                <Icon name='save' />
                                Salvar
                            </Button>
                        </div>

                    </div>
                </Container>
            </div>
        </div>
    );
}
