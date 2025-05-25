import axios from "axios";
import React, { useState } from "react";
import { Button, Container, Divider, Form, Icon, Modal, Header } from 'semantic-ui-react';
import InputMask from "react-input-mask";
import '../../App.css';
import MenuSistema from '../../MenuSistema';
import { Link } from "react-router-dom";

export default function FormVenda() {
  const [cliente, setCliente] = useState('');
  const [produto, setProduto] = useState('');
  const [statusVenda, setStatusVenda] = useState('');
  const [dataVenda, setDataVenda] = useState('');
  const [valorTotal, setValorTotal] = useState('');
  const [observacao, setObservacao] = useState('');
  const [retiradaEmLoja, setRetiradaEmLoja] = useState(null);
  const [modalOpen, setOpenModal] = useState(false);

  function salvar() {
    const vendaRequest = {
      cliente,
      produto,
      statusVenda,
      dataVenda,
      valorTotal,
      observacao,
      retiradaEmLoja
    };

    axios.post("http://localhost:8080/api/venda", vendaRequest)
      .then(() => console.log('Venda salva com sucesso.'))
      .catch((error) => console.log('Erro ao salvar venda.', error));
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
            Cadastro
          </h2>

          <Divider />

          <div style={{ marginTop: '4%' }}>
            <Form>
              <Form.Group widths='equal'>
                <Form.Input
                  required
                  fluid
                  label='Cliente'
                  placeholder='Informe o nome do cliente'
                  value={cliente}
                  onChange={e => setCliente(e.target.value)}
                />
                <Form.Input
                  required
                  fluid
                  label='Produto'
                  placeholder='Informe o nome do produto'
                  value={produto}
                  onChange={e => setProduto(e.target.value)}
                />
              </Form.Group>

              <Form.Group widths='equal'>
                <Form.Select
                  required
                  fluid
                  label='Status da Venda'
                  options={[
                    { key: 'c', text: 'Pedido Cancelado', value: 'Pedido Cancelado' },
                    { key: 'a', text: 'Aguardando Pagamento', value: 'Aguardando Pagamento' },
                    { key: 'p', text: 'Pago', value: 'Pago' },
                    { key: 'e', text: 'Entregue', value: 'Entregue' },
                  ]}
                  placeholder='Selecione o status'
                  value={statusVenda}
                  onChange={(e, { value }) => setStatusVenda(value)}
                />

                <Form.Field>
                  <label>Data da Venda</label>
                  <InputMask
                    mask="99/99/9999"
                    placeholder="DD/MM/AAAA"
                    value={dataVenda}
                    onChange={e => setDataVenda(e.target.value)}
                  >
                    {(inputProps) => <Form.Input {...inputProps} />}
                  </InputMask>
                </Form.Field>
              </Form.Group>

              <Form.Input
                label='Valor Total'
                placeholder="R$ 0,00"
                value={valorTotal}
                onChange={e => setValorTotal(e.target.value)}
              />

              <Form.TextArea
                label='Observação'
                placeholder='Alguma observação adicional sobre a venda'
                value={observacao}
                onChange={e => setObservacao(e.target.value)}
              />

              <Form.Group inline>
                <label>Retirada em Loja</label>
                <Form.Radio
                  label='Sim'
                  value={true}
                  checked={retiradaEmLoja === true}
                  onChange={() => setRetiradaEmLoja(true)}
                />
                <Form.Radio
                  label='Não'
                  value={false}
                  checked={retiradaEmLoja === false}
                  onChange={() => setRetiradaEmLoja(false)}
                />
              </Form.Group>

              <div style={{ marginTop: '4%' }}>
                <Link to={'/list-venda'}>
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

                <Link to={'/list-venda'}>
                  <Button
                    inverted
                    circular
                    icon
                    labelPosition='left'
                    color='blue'
                    floated='right'
                    onClick={salvar}
                  >
                    <Icon name='save' />
                    Salvar
                  </Button>
                </Link>
              </div>
            </Form>
          </div>
        </Container>
      </div>

      <Modal
        basic
        onClose={() => setOpenModal(false)}
        onOpen={() => setOpenModal(true)}
        open={modalOpen}
      >
        <Header icon>
          <Icon name='trash' />
          <div style={{ marginTop: '5%' }}>Tem certeza que deseja remover essa venda?</div>
        </Header>
        <Modal.Actions>
          <Button basic color='red' inverted onClick={() => setOpenModal(false)}>
            <Icon name='remove' /> Não
          </Button>
          <Button color='green' inverted>
            <Icon name='checkmark' /> Sim
          </Button>
        </Modal.Actions>
      </Modal>
    </div>
  );
}

