import React from 'react';
import { Button, Container, Divider, Form, Icon, Segment } from 'semantic-ui-react';
import InputMask from 'comigo-tech-react-input-mask';
import './App.css';

export default function CadastroCliente() {
    return (
        <div style={{ marginTop: '3%' }}>
            <Container textAlign='justified'>
                <h2>
                    <span style={{ color: 'darkgray' }}>
                        Cliente &nbsp;<Icon name='angle double right' size="small" />
                    </span> Cadastro
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

                            <Form.Field required fluid>
                                <label>CPF</label>
                                <InputMask
                                    mask="999.999.999-99"
                                />
                            </Form.Field>
                        </Form.Group>

                        <Form.Group>
                            <Form.Field fluid width={6}>
                                <label>Fone Celular</label>
                                <InputMask
                                    mask="(99) 9999.9999"
                                />
                            </Form.Field>

                            <Form.Field fluid width={6}>
                                <label>Fone Fixo</label>
                                <InputMask
                                    mask="(99) 9999.9999"
                                />
                            </Form.Field>

                            <Form.Field fluid width={6}>
                                <label>Data Nascimento</label>
                                <InputMask
                                    mask="99/99/9999"
                                    maskChar={null}
                                    placeholder="Ex: 20/03/1985"
                                />
                            </Form.Field>
                        </Form.Group>
                    </Form>

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
    );
}
