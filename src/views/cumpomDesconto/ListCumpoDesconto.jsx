import axios from 'axios';
import React, { useEffect, useState } from "react";
import { Button, Container, Divider, Icon, Modal, Header, Table } from 'semantic-ui-react';
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";
import MenuSistema from '../../MenuSistema';

export default function ListEntregador() {
  const [lista, setLista] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [idRemover, setIdRemover] = useState();

  useEffect(() => {
    carregarLista();
  }, []);

  function carregarLista() {
    axios.get("http://localhost:8080/api/cumpoDesconto")
      .then((response) => setLista(response.data))
      .catch((error) => console.error('Erro ao carregar lista de entregadores.', error));
  }
   async function remover() {
            await axios.delete('http://localhost:8080/api/cumpoDesconto/' + idRemover)
            .then((response) => {
            console.log('CumpoDesconto removido com sucesso.')
            axios.get("http://localhost:8080/api/cumpoDesconto")
            .then((response) => {
            setLista(response.data)
            })
            })
            .catch((error) => {
            console.log('Erro ao remover um cumpoDesconto.')
            })
            setOpenModal(false)
            }



  function confirmaRemover(id) {
    setOpenModal(true);
    setIdRemover(id);
  }

  function remover() {
    axios.delete(`http://localhost:8080/api/cumpoDesconto/${idRemover}`)
      .then(() => {
        setOpenModal(false);
        carregarLista();
      })
      .catch(error => console.error("Erro ao remover cumpoDesconto:", error));
  }

  return (
    <div>
      <MenuSistema tela={'cumpoDesconto'} />
      <div style={{ marginTop: '3%' }}>
        <Container textAlign='justified'>
          <h2> Entregador </h2>
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
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>CodigoDesconto</Table.HeaderCell>
                  <Table.HeaderCell>PercentualDesconto</Table.HeaderCell>
                  <Table.HeaderCell>ValorDesconto</Table.HeaderCell>
                  <Table.HeaderCell>ValorMinimoPedidoPermitido</Table.HeaderCell>
                  <Table.HeaderCell>InicioVigencia</Table.HeaderCell>
                  <Table.HeaderCell>FimVigencia</Table.HeaderCell>
                  
                  <Table.HeaderCell textAlign='center'>Ações</Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                {lista.map(cumpoDesconto => (
                  <Table.Row key={cumpoDesconto:.id}>
                    <Table.Cell>{cumpoDesconto:.CodigoDesconto}</Table.Cell>
                    <Table.Cell>{cumpoDesconto:.PercentualDesconto}</Table.Cell>
                    
                    <Table.Cell>{cumpoDesconto:.ValorDesconto}</Table.Cell>
                    <Table.Cell>{cumpoDesconto:.ValorMinimoPedidoPermitido}</Table.Cell>
                    <Table.Cell>{cumpoDesconto:.InicioVigencia</Table.Cell>
                    <Table.Cell>{cumpoDesconto.FimVigencia}</Table.Cell>
                    
                    <Table.Cell textAlign='center'>
                      <Button
                        inverted
                        circular
                        color='green'
                        icon
                        as={Link}
                        to="/form-cumpoDesconto"
                        
                        title="Editar entregador"
                      >
                        <Icon name='edit' />
                      </Button>
                      &nbsp;
                      <Button
                        inverted
                        circular
                        color='red'
                        icon
                        title="Remover cumpoDesconto"
                        onClick={() => confirmaRemover(cumpoDesconto.id)}
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

      <Modal
        basic
        onClose={() => setOpenModal(false)}
        open={openModal}
      >
        <Header icon>
          <Icon name='trash' />
          <div style={{ marginTop: '5%' }}>
            Tem certeza que deseja remover esse cumpoDesconto?
          </div>
        </Header>
        <Modal.Actions>
          <Button basic color='red' inverted onClick={() => setOpenModal(false)}>
            <Icon name='remove' /> Não
          </Button>
          <Button color='green' inverted onClick={remover}>
            <Icon name='checkmark' /> Sim
          </Button>
        </Modal.Actions>
      </Modal>
    </div>
  );
}
