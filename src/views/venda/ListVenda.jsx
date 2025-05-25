import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Container, Icon, Table, Modal } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import MenuSistema from '../../MenuSistema';

export default function ListVenda() {
  const [vendas, setVendas] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [observacao, setObservacao] = useState('');

  useEffect(() => {
    axios.get("http://localhost:8080/api/venda")
      .then((response) => {
        setVendas(response.data);
      })
      .catch((error) => {
        console.log("Erro ao buscar vendas", error);
      });
  }, []);

  function openModal(observacao) {
    setObservacao(observacao);
    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
  }

  return (
    <div>
      <MenuSistema tela={'venda'} />
      <div style={{ marginTop: '3%' }}>
        <Container textAlign='justified'>
          <h2>
            <span style={{ color: 'darkgray' }}>
              Venda &nbsp;<Icon name='angle double right' size="small" />
            </span>
            Listagem
          </h2>

          <div style={{ marginTop: '4%' }}>
            <Table color='blue' sortable celled>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Cliente</Table.HeaderCell>
                  <Table.HeaderCell>Produto</Table.HeaderCell>
                  <Table.HeaderCell>Status</Table.HeaderCell>
                  <Table.HeaderCell>Data</Table.HeaderCell>
                  <Table.HeaderCell>Valor Total</Table.HeaderCell>
                  <Table.HeaderCell>Retirada em Loja</Table.HeaderCell>
                  <Table.HeaderCell>Ações</Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                {vendas.map((venda) => (
                  <Table.Row key={venda.id}>
                    <Table.Cell>{venda.cliente}</Table.Cell>
                    <Table.Cell>{venda.produto}</Table.Cell>
                    <Table.Cell>{venda.statusVenda}</Table.Cell>
                    <Table.Cell>{venda.dataVenda}</Table.Cell>
                    <Table.Cell>{venda.valorTotal}</Table.Cell>
                    <Table.Cell>{venda.retiradaEmLoja ? 'Sim' : 'Não'}</Table.Cell>
                    <Table.Cell textAlign='center'>
                      <Button icon color='blue' onClick={() => openModal(venda.observacao)}>
                        <Icon name='eye' />
                      </Button>
                      <Link to="/form-venda" state={{ id: venda.id }}>
                        <Button icon color='orange'>
                          <Icon name='edit' />
                        </Button>
                      </Link>
                    </Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>

            <div style={{ marginTop: '4%' }}>
              <Link to='/form-venda'>
                <Button
                  inverted
                  circular
                  icon
                  labelPosition='left'
                  color='blue'
                >
                  <Icon name='add' />
                  Nova Venda
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </div>

      <Modal open={modalOpen} onClose={closeModal}>
        <Modal.Header>Observação da Venda</Modal.Header>
        <Modal.Content>
          <p>{observacao || 'Nenhuma observação.'}</p>
        </Modal.Content>
        <Modal.Actions>
          <Button color="red" onClick={closeModal}>
            <Icon name="close" /> Fechar
          </Button>
        </Modal.Actions>
      </Modal>
    </div>
  );
}
