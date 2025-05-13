import InputMask from 'comigo-tech-react-input-mask';
import React, { useEffect, useState } from "react";
import { Button, Container, Divider, Form, Icon, Modal, Header } from 'semantic-ui-react';
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import "../../App.css";
import MenuSistema from "../../MenuSistema";

export default function FormCliente() {
  const [idCliente, setIdCliente] = useState();
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [foneCelular, setFoneCelular] = useState('');
  const [foneFixo, setFoneFixo] = useState('');
  const [modalOpen, setOpenModal] = useState(false);

  const { state } = useLocation();

  useEffect(() => {
    if (state && state.id) {
      axios.get(`http://localhost:8080/api/cliente/${state.id}`)
        .then((response) => {
          const cliente = response.data;
          setIdCliente(cliente.id);
          setNome(cliente.nome);
          setCpf(cliente.cpf);
          setDataNascimento(cliente.dataNascimento);
          setFoneCelular(cliente.foneCelular);
          setFoneFixo(cliente.foneFixo); // corrigido
        })
        .catch((error) => {
          console.log('Erro ao buscar cliente.', error);
        });
    }
  }, [state]);

  function salvar() {
    let clienteRequest = {
      nome,
      cpf,
      dataNascimento,
      foneCelular,
      foneFixo
    };

    const request = idCliente
      ? axios.put(`http://localhost:8080/api/cliente/${idCliente}`, clienteRequest)
      : axios.post("http://localhost:8080/api/cliente", clienteRequest);

    request
      .then(() => console.log('Cliente salvo com sucesso.'))
      .catch((error) => console.log('Erro ao salvar cliente.', error));
  }

  function voltar() {
    console.log("Implementar navegação de retorno.");
  }

  function remover() {
    console.log("Implementar lógica de remoção.");
  }

  return (
    <div>
      <div style={{ marginTop: '3%' }}>
        <Container textAlign='justified'>
          <h2>
            <span style={{ color: 'darkgray' }}>
              Cliente &nbsp;<Icon name='angle double right' size="small" />
            </span>
            {idCliente ? ' Alteração' : ' Cadastro'}
          </h2>
          <Divider />

          <div style={{ marginTop: '4%' }}>
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
                <Form.Input required fluid label='CPF'>
                  <InputMask
                    required
                    mask="999.999.999-99"
                    value={cpf}
                    onChange={e => setCpf(e.target.value)}
                  />
                </Form.Input>
              </Form.Group>

              <Form.Group>
                <Form.Input fluid label='Fone Celular' width={6}>
                  <InputMask
                    mask="(99) 9999.9999"
                    value={foneCelular}
                    onChange={e => setFoneCelular(e.target.value)}
                  />
                </Form.Input>

                <Form.Input fluid label='Fone Fixo' width={6}>
                  <InputMask
                    mask="(99) 9999.9999"
                    value={foneFixo}
                    onChange={e => setFoneFixo(e.target.value)}
                  />
                </Form.Input>

                <Form.Input fluid label='Data Nascimento' width={6}>
                  <InputMask
                    mask="99/99/9999"
                    maskChar={null}
                    placeholder="Ex: 20/03/1985"
                    value={dataNascimento}
                    onChange={e => setDataNascimento(e.target.value)}
                  />
                </Form.Input>
              </Form.Group>

              <div style={{ marginTop: '4%' }}>
                <Link to={'/list-cliente'}>
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

                <Link to={'/list-cliente'}>
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
