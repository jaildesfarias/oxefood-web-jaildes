import axios from 'axios';
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button, Container, Divider, Icon, Modal, Header, Table } from 'semantic-ui-react';
import MenuSistema from '../../MenuSistema';

export default function ListCliente() {

  const [lista, setLista] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [idRemover, setIdRemover] = useState(null);

  useEffect(() => {
    carregarLista();
  }, []);

  function carregarLista() {
    axios.get("http://localhost:8080/api/cliente")
      .then((response) => {
        setLista(response.data);
      })
      .catch((error) => {
        console.log("Erro ao carregar lista de clientes", error);
      });
  }

  function formatarData(dataParam) {
    if (!dataParam) return '';
    const [ano, mes, dia] = dataParam.split('-');
    return `${dia}/${mes}/${ano}`;
  }

  function confirmaRemover(id) {
    setOpenModal(true);
    setIdRemover(id);
  }

  function remover() {
    axios.delete(`http://localhost:8080/api/cliente/${idRemover}`)
      .then(() => {
        setOpenModal(false);
        carregarLista();
      })
      .catch((error) => {
        console.log("Erro ao remover cliente", error);
      });
  }

  return (
    <div>
      <MenuSistema tela={'cliente'} />
      <div style={{ marginTop: '3%' }}>
        <Container textAlign='justified'>
          <h2>Cliente</h2>
          <Divider />

          <div style={{ marginTop: '4%' }}>
            <Button
              label='Novo'
              circular
              color='orange'
              icon='clipboard outline'
              floated='right'
              as={Link}
              to='/form-cliente'
            />
            <br /><br /><br />

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
                {lista.map(cliente => (
                  <Table.Row key={cliente.id}>
                    <Table.Cell>{cliente.nome}</Table.Cell>
                    <Table.Cell>{cliente.cpf}</Table.Cell>
                    <Table.Cell>{formatarData(cliente.dataNascimento)}</Table.Cell>
                    <Table.Cell>{cliente.foneCelular}</Table.Cell>
                    <Table.Cell>{cliente.foneFixo}</Table.Cell>
                    <Table.Cell textAlign='center'>
                      <Button
                        inverted
                        circular
                        color='green'
                        title='Editar cliente'
                        icon
                        as={Link}
                        to="/form-cliente"
                        state={{ id: cliente.id }}
                      >
                        <Icon name='edit' />
                      </Button>
                      &nbsp;
                      <Button
                        inverted
                        circular
                        color='red'
                        title='Remover cliente'
                        icon
                        onClick={() => confirmaRemover(cliente.id)}
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
        onOpen={() => setOpenModal(true)}
        open={openModal}
      >
        <Header icon>
          <Icon name='trash' />
          <div style={{ marginTop: '5%' }}>Tem certeza que deseja remover esse registro?</div>
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
