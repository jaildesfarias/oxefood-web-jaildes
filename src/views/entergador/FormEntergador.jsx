import InputMask from 'comigo-tech-react-input-mask';

import React from "react";
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';
import '../../App.css';
import { BrowserRouter } from "react-router-dom";
import Rotas from './Rotas';

export default function FormEntregador() {




    return (
        <div>
            <div style={{ marginTop: '3%' }}>
                <Container textAlign='justified' >

                    <h2>
                        <span style={{ color: 'darkgray' }}>
                            Entregador &nbsp;
                            <Icon name='angle double right' size="small" />
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
                                    label='Dt Nascimento'
                                    width={6}
                                >
                                    <InputMask
                                        placeholder="Ex:20/03/1985"
                                    />
                                </Form.Input>

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
                                    label='Fone fixo'
                                    width={6}
                                >
                                    <InputMask
                                        mask="(99) 9999.9999"
                                    />
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='QTD Entregas Realizadas'
                                    width={6}
                                >

                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Valor Por Frete'
                                    width={6}

                                >

                                </Form.Input>
                            </Form.Group>
                            <Form.Group widths='equal'>
                            <Form.Input
                                    fluid
                                    label='Rua'
                                    width={6}
                                >

                                </Form.Input>
                                <Form.Input
                                    fluid
                                    label='Número'
                                    width={6}
                                >

                                </Form.Input>

                            </Form.Group>
                            <Form.Group widths='equal'>
                            <Form.Input
                                    fluid
                                    label='Bairro'
                                    width={6}
                                >

                                </Form.Input>
                                <Form.Input
                                    fluid
                                    label='Cidade'
                                    width={6}
                                >

                                </Form.Input>
                                <Form.Input
                                    fluid
                                    label='CEP'
                                    width={6}
                                >

                                </Form.Input>

                            </Form.Group>
                            <Form.Group widths='equal'>
                            <Form.Select
                                    fluid
                                    label='UF'
                                    width={6}
                                >

                                </Form.Select>
                          
                                

                            </Form.Group>
                            <Form.Group widths='equal'>
                            <Form.Input
                                    fluid
                                    label='Complemento'
                                    width={6}
                                >

                                </Form.Input>
                                </Form.Group>

                        </Form>
                 <Form.Group widths='equal'>
                 <label><strong>Ativo:</strong></label>
                    <Form.Radio
                    type="radio"
                    value="sim"
                    label="Sim"
                    />
                    <Form.Radio
                    type="radio"
                    value="não"
                    label="não"
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
