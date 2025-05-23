import axios from 'axios';
import React, { useEffect, useState } from "react";
import { Button, Container, Divider, Icon, Modal, Header, Table } from 'semantic-ui-react';
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
    axios.get("http://localhost:8080/api/entregador")
      .then((response) => setLista(response.data))
      .catch((error) => console.error('Erro ao carregar lista de entregadores.', error));
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
    axios.delete(`http://localhost:8080/api/entregador/${idRemover}`)
      .then(() => {
        setOpenModal(false);
        carregarLista();
      })
      .catch(error => console.error("Erro ao remover entregador:", error));
  }

  return (
    <div>
      <MenuSistema tela={'entregador'} />
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
                  <Table.HeaderCell>Nome</Table.HeaderCell>
                  <Table.HeaderCell>CPF</Table.HeaderCell>
                  <Table.HeaderCell>Data Nascimento</Table.HeaderCell>
                  <Table.HeaderCell>Celular</Table.HeaderCell>
                  <Table.HeaderCell>Fixo</Table.HeaderCell>
                  <Table.HeaderCell>Qtd Entregas</Table.HeaderCell>
                  <Table.HeaderCell>Valor Frete</Table.HeaderCell>
                  <Table.HeaderCell>Endereço</Table.HeaderCell>
                  <Table.HeaderCell>Bairro</Table.HeaderCell>
                  <Table.HeaderCell>Cidade</Table.HeaderCell>
                  <Table.HeaderCell>CEP</Table.HeaderCell>
                  <Table.HeaderCell>UF</Table.HeaderCell>
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
                    <Table.Cell>{entregador.endereco}, {entregador.numero} {entregador.complemento}</Table.Cell>
                    <Table.Cell>{entregador.bairro}</Table.Cell>
                    <Table.Cell>{entregador.cidade}</Table.Cell>
                    <Table.Cell>{entregador.cep}</Table.Cell>
                    <Table.Cell>{entregador.uf}</Table.Cell>
                    <Table.Cell textAlign='center'>
                      <Button
                        inverted
                        circular
                        color='green'
                        icon
                        as={Link}
                        to="/form-entregador"
                        state={{ id: entregador.id }}
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
                        title="Remover entregador"
                        onClick={() => confirmaRemover(entregador.id)}
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
            Tem certeza que deseja remover esse entregador?
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
