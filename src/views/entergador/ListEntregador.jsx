import axios from 'axios';
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
<<<<<<< HEAD

import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';
import MenuSistema from '../../MenuSistema';




function salvar() {

    let clienteRequest = {
        nome: nome,
        cpf: cpf,
        dataNascimento: dataNascimento,
        foneCelular: foneCelular,
        foneFixo: foneFixo,
        qtdEntregasRealizadas:qtdEntregasRealizadas,
        valorPorFrete:valorPorFrete,
        rua: rua,
      numero:numero,
      complemento:complemento,
      bairro:bairro,
      cidade:cidade,
      cep:cep,
      estado:estado,
      uf,uf,https:


    }
    

    if (idCliente != null) { //Alteração:
        axios.put("http://localhost:8080/api/entregador/" + idEntregador, entregadorRequest)
        .then((response) => { console.log('Entregador alterado com sucesso.') })
        .catch((error) => { console.log('Erro ao alter um entregador.') })
    } else { //Cadastro:
        axios.post("http://localhost:8080/api/entregador", clienteRequest)
        .then((response) => { console.log('Entregador cadastrado com sucesso.') })
        .catch((error) => { console.log('Erro ao incluir o entregador.') })
    }
}


export default function ListEntregador () {

   const [lista, setLista] = useState([]);//array[]

   useEffect(() => {
       carregarLista();
   }, [])

   function carregarLista() {

       axios.get("http://localhost:8080/api/entregador")
       .then((response) => {
           setLista(response.data)
       })
   }
   function formatarData(dataParam) {

    if (dataParam === null || dataParam === '' || dataParam === undefined) {
        return ''
    }

    let arrayData = dataParam.split('-');
    return arrayData[2] + '/' + arrayData[1] + '/' + arrayData[0];
}return(
    <div>
        <MenuSistema tela={'cliente'} />
        <div style={{marginTop: '3%'}}>

            <Container textAlign='justified' >

                <h2> Cliente </h2>
                <Divider />

                <div style={{marginTop: '4%'}}>
                    <Button
                        label='Novo'
                        circular
                        color='orange'
                        icon='clipboard outline'
                        floated='right'
                        as={Link}
                        />
                        <br/><br/><br/>
                  
                        <Table color='orange' sortable celled>
 
=======
import { Button, Container, Divider, Icon, Table } from 'semantic-ui-react';
import MenuSistema from '../../MenuSistema';

export default function ListEntregador() {

    const [lista, setLista] = useState([]);

    useEffect(() => {
        carregarLista();
    }, []);

    function carregarLista() {
        axios.get("http://localhost:8080/api/entregador")
            .then((response) => {
                setLista(response.data);
            });
    }

    function formatarData(dataParam) {
        if (!dataParam) return '';
        const arrayData = dataParam.split('-');
        return `${arrayData[2]}/${arrayData[1]}/${arrayData[0]}`;
    }

    return (
        <div>
            <MenuSistema tela="entregador" />
            <div style={{ marginTop: '3%' }}>
                <Container textAlign='justified'>
                    <h2>Entregador</h2>
                    <Divider />

                    <div style={{ marginTop: '4%' }}>
                        <Button
                            label='Novo'
                            circular
                            color='orange'
                            icon='clipboard outline'
                            floated='right'
                            as={Link}
                            to='/form-entregador'
                        />
                        <br /><br /><br />

                        <Table color='orange' sortable celled>
>>>>>>> 2ec3f5dd61d96f4bc042e03dba77c5f9063d345f
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell>Nome</Table.HeaderCell>
                                    <Table.HeaderCell>CPF</Table.HeaderCell>
                                    <Table.HeaderCell>Data de Nascimento</Table.HeaderCell>
                                    <Table.HeaderCell>Fone Celular</Table.HeaderCell>
                                    <Table.HeaderCell>Fone Fixo</Table.HeaderCell>
<<<<<<< HEAD
                                    <Table.HeaderCell textAlign='center'>Ações</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>
                       
                            <Table.Body>
 
                                { lista.map(entregador => (
 
                                    <Table.Row key={entregador.id}>
                                        <Table.Cell>{entregador.nome}</Table.Cell>
                                        <Table.Cell>{entregador.cpf}</Table.Cell>
                                        <Table.Cell>{formatarData(dataNascimento)}</Table.Cell>
                                        <Table.Cell>{entregador.foneCelular}</Table.Cell>
                                        <Table.Cell>{entregador.foneFixo}</Table.Cell>
                                        <Table.Cell textAlign='center'>
 
                                             <Button
=======
                                    <Table.HeaderCell>QTD Entregas Realizadas</Table.HeaderCell>
                                    <Table.HeaderCell>Valor por Frete</Table.HeaderCell>
                                    <Table.HeaderCell>Rua</Table.HeaderCell>
                                    <Table.HeaderCell>Número</Table.HeaderCell>
                                    <Table.HeaderCell>Bairro</Table.HeaderCell>
                                    <Table.HeaderCell>Cidade</Table.HeaderCell>
                                    <Table.HeaderCell>CEP</Table.HeaderCell>
                                    <Table.HeaderCell>Estado</Table.HeaderCell>
                                    <Table.HeaderCell>UF</Table.HeaderCell>
                                    <Table.HeaderCell>Complemento</Table.HeaderCell>
                                    <Table.HeaderCell>Ativo</Table.HeaderCell>
                                    <Table.HeaderCell textAlign='center'>Ações</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>

                            <Table.Body>
                                {lista.map(entregador => (
                                    <Table.Row key={entregador.id}>
                                        <Table.Cell>{entregador.nome}</Table.Cell>
                                        <Table.Cell>{entregador.cpf}</Table.Cell>
                                        <Table.Cell>{formatarData(entregador.dataNascimento)}</Table.Cell>
                                        <Table.Cell>{entregador.foneCelular}</Table.Cell>
                                        <Table.Cell>{entregador.foneFixo}</Table.Cell>
                                        <Table.Cell>{entregador.qtdEntregasRealizadas}</Table.Cell>
                                        <Table.Cell>{entregador.valorPorFrete}</Table.Cell>
                                        <Table.Cell>{entregador.endereco?.rua}</Table.Cell>
                                        <Table.Cell>{entregador.endereco?.numero}</Table.Cell>
                                        <Table.Cell>{entregador.endereco?.bairro}</Table.Cell>
                                        <Table.Cell>{entregador.endereco?.cidade}</Table.Cell>
                                        <Table.Cell>{entregador.endereco?.cep}</Table.Cell>
                                        <Table.Cell>{entregador.endereco?.estado}</Table.Cell>
                                        <Table.Cell>{entregador.endereco?.uf}</Table.Cell>
                                        <Table.Cell>{entregador.endereco?.complemento}</Table.Cell>
                                        <Table.Cell>{entregador.ativo ? 'Sim' : 'Não'}</Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            <Button
>>>>>>> 2ec3f5dd61d96f4bc042e03dba77c5f9063d345f
                                                inverted
                                                circular
                                                color='green'
                                                title='Clique aqui para editar os dados deste entregador'
<<<<<<< HEAD
                                                icon>
                                                    <Link to="/form-entregador" state={{id: entregador.id}} style={{color: 'green'}}> <Icon name='edit' /> </Link>
                                            </Button>
;
                                            <Button
                                               inverted
                                               circular
                                               color='red'
                                               title='Clique aqui para remover este entregador'
                                               icon>
                                                <Link to="/form-entregador" state={{id: cliente.id}} style={{color: 'green'}}> <Icon name='edit' /> </Link>

                                                   <Icon name='trash' />
                                           </Button>

                                       </Table.Cell>
                                   </Table.Row>
                               ))}

                           </Table.Body>
                       </Table>
                   </div>
               </Container>
           </div>

       </div>
   )

=======
                                                icon
                                            >
                                                <Icon name='edit' />
                                            </Button>
                                            &nbsp;
                                            <Button
                                                inverted
                                                circular
                                                color='red'
                                                title='Clique aqui para remover este entregador'
                                                icon
                                            >
                                                <Icon name='trash' />
                                            </Button>
                                        </Table.Cell>
                                    </Table.Row>
                                ))}
                            </Table.Body>
                        </Table>
                    </div>
                </Container>
            </div>
        </div>
    );
>>>>>>> 2ec3f5dd61d96f4bc042e03dba77c5f9063d345f
}
