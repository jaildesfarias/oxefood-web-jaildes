import InputMask from 'comigo-tech-react-input-mask';
import React, { useEffect, useState } from "react";

import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';

import { Link, useLocation } from "react-router-dom";


export default function FormCliente () {

    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [foneCelular, setFoneCelular] = useState('');
    const [foneFixo, setfoneFixo] = useState('');
    const { state } = useLocation();
    const [idCliente, setIdCliente] = useState();
  
    
  function salvar() {
    const clienteRequest = {
      nome,
      cpf,
      rg,
      dataNascimento,
      foneCelular,
      foneFixo,

    };
    axios.post("http://localhost:8080/api/cliente", clienteRequestRequest)
    .then((response) => {      
        console.log('Cliente cadastrado com sucesso.');
    })
    .catch((error) => {
    
            console.log('Erro ao incluir o clientre.');
          });

          function voltar() {
            console.log("Implementar navegação de retorno.");
          }
        
      useEffect(() => {//CONSULTA O CLIENTE
             if (state != null && state.id != null) {
                 axios.get("http://localhost:8080/api/cliente/" + state.id)
         .then((response) => {
                     setIdCliente(response.data.id)
                     setNome(response.data.nome)
                     setCpf(response.data.cpf)
                     setDataNascimento(response.data.dataNascimento)
                     setFoneCelular(response.data.foneCelular)
                     setFoneFixo(response.data.foneFixo)
                            })
                                           
                        }
                }, [state])
                
            }
                    
                        function formatarData(dataParam) {

                            if (dataParam === null || dataParam === '' || dataParam === undefined) {
                                return ''
                            }
       		}
        
        



    return (

        <div>

            <div style={{marginTop: '3%'}}>//

                <Container textAlign='justified' >

                                { idCliente === undefined &&
                    <h2> <span style={{color: 'darkgray'}}> Cliente &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro</h2>
                }
                { idCliente != undefined &&
                    <h2> <span style={{color: 'darkgray'}}> Cliente &nbsp;<Icon name='angle double right' size="small" /> </span> Alteração</h2>
                }


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
                                    label='CPF'>
                                    <InputMask
                                        required
                                        mask="999.999.999-99"
                                    /> 
                                </Form.Input>

                            </Form.Group>
                            
                            <Form.Group>

                                <Form.Input
                                    fluid
                                    label='Fone Celular'
                                    width={6}>
                                    <InputMask 
                                        mask="(99) 9999.9999"
                                    /> 
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Fone Fixo'
                                    width={6}>
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
                        <Link to={'/list-cliente'}>//Que ser import { Link } from "react-router-dom";

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
                            </Link>
                            
                            <Link to={'/list-cliente'}>   
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
                            </Link>

                        </div>

                    </div>
                    
                </Container>
            </div>
        </div>

    );

}

