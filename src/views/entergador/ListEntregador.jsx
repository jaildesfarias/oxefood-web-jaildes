import axios from 'axios';
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
 
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell>Nome</Table.HeaderCell>
                                    <Table.HeaderCell>CPF</Table.HeaderCell>
                                    <Table.HeaderCell>Data de Nascimento</Table.HeaderCell>
                                    <Table.HeaderCell>Fone Celular</Table.HeaderCell>
                                    <Table.HeaderCell>Fone Fixo</Table.HeaderCell>
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
                                                inverted
                                                circular
                                                color='green'
                                                title='Clique aqui para editar os dados deste entregador'
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

}
