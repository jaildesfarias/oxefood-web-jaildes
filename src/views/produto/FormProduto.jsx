import axios from "axios";
import React, { useState, useEffect } from "react";
import { Button, Container, Divider, Form, Icon, Modal, Header } from 'semantic-ui-react';
import '../../App.css';
import MenuSistema from '../../MenuSistema';
import { Link, useLocation } from "react-router-dom";

export default function FormProduto() {
  const [idProduto, setIdProduto] = useState();
  const [empresa, setEmpresa] = useState('');
  const [categoria, setCategoria] = useState('');
  const [titulo, setTitulo] = useState('');
  const [codigo, setCodigo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [valorUnitario, setValorUnitario] = useState('');
  const [tempoEntregaMinimo, setTempoEntregaMinimo] = useState('');
  const [tempoEntregaMaximo, setTempoEntregaMaximo] = useState('');
  const [modalOpen, setOpenModal] = useState(false);

  const { state } = useLocation();

  useEffect(() => {
    if (state && state.id) {
      axios.get(`http://localhost:8080/api/produto/${state.id}`)
        .then((response) => {
          const p = response.data;
          setIdProduto(p.id);
          setEmpresa(p.empresa);
          setCategoria(p.categoria);
          setTitulo(p.titulo);
          setCodigo(p.codigo);
          setDescricao(p.descricao);
          setValorUnitario(p.valorUnitario);
          setTempoEntregaMinimo(p.tempoEntregaMinimo);
          setTempoEntregaMaximo(p.tempoEntregaMaximo);
        })
        .catch((error) => {
          console.log('Erro ao buscar produto.', error);
        });
    }
  }, [state]);

  function salvar() {
    const produtoRequest = {
      empresa,
      categoria,
      titulo,
      codigo,
      descricao,
      valorUnitario,
      tempoEntregaMinimo,
      tempoEntregaMaximo
    };

    const request = idProduto
      ? axios.put(`http://localhost:8080/api/produto/${idProduto}`, produtoRequest)
      : axios.post("http://localhost:8080/api/produto", produtoRequest);

    request
      .then(() => console.log('Produto salvo com sucesso.'))
      .catch((error) => console.log('Erro ao salvar produto.', error));
  }

  function voltar() {
    console.log("Implementar navegação de retorno.");
  }

  function remover() {
    console.log("Implementar lógica de remoção.");
  }

  return (
    <div>
      <MenuSistema tela={'produto'} />
      <div style={{ marginTop: '3%' }}>
        <Container textAlign='justified'>
          <h2>
            <span style={{ color: 'darkgray' }}>
              Produto &nbsp;<Icon name='angle double right' size="small" />
            </span>
            {idProduto ? ' Alteração' : ' Cadastro'}
          </h2>

          <Divider />

          <div style={{ marginTop: '4%' }}>
            <Form>
              <Form.Group widths='equal'>
                <Form.Input
                  required
                  fluid
                  label='Empresa'
                  placeholder='Informe a empresa'
                  value={empresa}
                  onChange={e => setEmpresa(e.target.value)}
                />
                <Form.Input
                  required
                  fluid
                  label='Categoria'
                  placeholder='Informe a categoria'
                  value={categoria}
                  onChange={e => setCategoria(e.target.value)}
                />
              </Form.Group>

              <Form.Group widths='equal'>
                <Form.Input
                  required
                  fluid
                  label='Título'
                  maxLength="100"
                  value={titulo}
                  onChange={e => setTitulo(e.target.value)}
                />
                <Form.Input
                  required
                  fluid
                  label='Código'
                  maxLength="100"
                  value={codigo}
                  onChange={e => setCodigo(e.target.value)}
                />
              </Form.Group>

              <Form.TextArea
                label='Descrição'
                placeholder='Informe a descrição do produto'
                value={descricao}
                onChange={e => setDescricao(e.target.value)}
              />

              <Form.Group widths='equal'>
                <Form.Input
                  required
                  fluid
                  label='Valor Unitário'
                  placeholder="R$ 0,00"
                  value={valorUnitario}
                  onChange={e => setValorUnitario(e.target.value)}
                />
                <Form.Input
                  type="number"
                  label='Tempo Entrega Mínimo (min)'
                  placeholder='30'
                  value={tempoEntregaMinimo}
                  onChange={e => setTempoEntregaMinimo(e.target.value)}
                />
                <Form.Input
                  type="number"
                  label='Tempo Entrega Máximo (min)'
                  placeholder='40'
                  value={tempoEntregaMaximo}
                  onChange={e => setTempoEntregaMaximo(e.target.value)}
                />
              </Form.Group>

              <div style={{ marginTop: '4%' }}>
                <Link to={'/list-produto'}>
                  <Button
                    type="button"
                    inverted
                    circular
                    icon
                    labelPosition='left'
                    color='orange'
                    onClick={voltar}
                  >
                    <Icon name='reply' />
                    Voltar
                  </Button>
                </Link>

                <Link to={'/list-produto'}>
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
          <div style={{ marginTop: '5%' }}>Tem certeza que deseja remover esse produto?</div>
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
