import InputMask from 'comigo-tech-react-input-mask';
import React, { useEffect, useState } from "react";

import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';
<<<<<<< HEAD

import { Link, useLocation } from "react-router-dom";

=======
import axios from "axios";
import { Link } from "react-router-dom";
>>>>>>> 83f65d9 (casa)

import "../../App.css";
import MenuSistema from "../../MenuSistema";

export default function FormCliente () {
    const [nome, setNome] = useState();
    const [cpf, setCpf] = useState();
    const [dataNascimento, setDataNascimento] = useState();
    const [foneCelular, setFoneCelular] = useState();
    const [foneFixo, setFoneFixo] = useState();
    function salvar() {

		let clienteRequest = {
		     nome: nome,
		     cpf: cpf,
		     dataNascimento: dataNascimento,
		     foneCelular: foneCelular,
		     foneFixo: foneFixo
		}
	
		axios.post("http://localhost:8080/api/cliente", clienteRequest)
		.then((response) => {
		     console.log('Cliente cadastrado com sucesso.')
		})
		.catch((error) => {
		     console.log('Erro ao incluir o um cliente.')
		})
	}

 

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
                                    value={nome}
			                       onChange={e => setNome(e.target.value)}
                                />

                                <Form.Input
                                    required
                                    fluid
                                    label='CPF'>
                                    <InputMask
                                        required
                                        mask="999.999.999-99"
                                        value={nome}
			                            onChange={e => setCpf(e.target.value)}
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
                                        value={FoneCelular}
		                            	onChange={e => setFoneCelular(e.target.value)}
                                    /> 
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Fone Fixo'
                                    width={6}>
                                    <InputMask 
                                        mask="(99) 9999.9999"
                                        valuealue={foneFixo}
		                            	onChange={e => setFoneFixo(e.target.value)}
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
                                        valuealue={foneFixo}
		                            	onChange={e => setDataNascimento(e.target.value)}
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
                                onClick={() => voltar()}

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
                                onClick={() => salvar()}

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

