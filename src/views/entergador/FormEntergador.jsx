import InputMask from 'comigo-tech-react-input-mask';

import React from "react";
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';
import '../../App.css';
import { BrowserRouter } from "react-router-dom";
import Rotas from './Rotas';

export default function FormEntregador() {

   const [nome, setNome] = useState();
   const [cpf, setCpf] = useState();
   const [rg, setRg] = useState();
   const [dtNascimento, setDTNascimento] = useState();
   const [foneCelular, setFoneCelular] = useState();
   const [foneFixo, setFoneFixo] = useState();
   const [qtdEntregasRealizadas, setQtdEntregasRealizadas] = useState();
   const [valorPorFrete, setValorPorFrete] = useState();
   const [Rua, setRua] = useState();
   const [numero, setNumero] = useState();
   const [Bairro, setBairro] = useState();
   const [Cidade, setCidade] = useState();
    const [Cep, setEnderecoCep] = useState();
    const [uf, setUf] = useState();
   const [complemento, setComplemento] = useState();

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
                                    value={nome}
			                        onChange={e => setNome(e.target.value)}
                                />

                                <Form.Input
                                    required
                                    fluid
                                    label='CPF'
                                >
                                    <InputMask
                                        required
                                        mask="999.999.999-99"
                                        value={cpf}
			                         	onChange={e => setCpf(e.target.value)}
                                    />
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='RG'
                                >
                                    <InputMask
                                        required
                                        mask="99.999.999-9"
                                         value={rg}
			                            onChange={e => setNome(e.target.value)}
                                    />
                                </Form.Input>
                            </Form.Group>

                            <Form.Group>
                                <Form.Input
                                    fluid
                                    label='DT Nascimento'
                                    width={6}
                                >
                                    <InputMask
                                         value={dtNascimento'}
			                            onChange={e => setDTNascimento(e.target.value)}
                                        placeholder="Ex:20/03/1985"
                                    />
                                </Form.Input>

                                <Form.Input
                                    required
                                    fluid
                                    label='Fone Celular'
                                    width={6}
                                >
                                    <InputMask
                                        mask="(99) 9999.9999"
                                        value={foneCelula}
			                            onChange={e => setfoneCelula(e.target.value)}
                                    />
                                </Form.Input>
                                <Form.Input
                                    fluid
                                    label='Fone fixo'
                                    width={6}
                                >
                                    <InputMask
                                        mask="(99) 9999.9999"
                                        value={foneFixo}
			                            onChange={e => setFoneFixo(e.target.value)}
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
                        
                 <Form.Group inline style={{ alignItems: 'center', gap: '20px' }}>//inline no Form.Group ➔ deixa tudo na horizontal.
                     //style={{ alignItems: 'center', gap: '20px' }} ➔ alinha verticalmente e dá um espacinho entre os itens
                    // marginRight: '10px' ➔ dá um espacinho entre o primeiro radio e o segundo, para não ficarem grudados.
                          <label><strong>Ativo:</strong></label>
                          <Form.Radio
                            label='Sim'
                            name='ativo'
                            value='sim'
                            style={{ marginRight: '10px' }}
                          />
                          <Form.Radio
                            label='Não'
                            name='ativo'
                            value='não'
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
                                onClick={() => voltar()}
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
                                onClick={() => salvar()}
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
