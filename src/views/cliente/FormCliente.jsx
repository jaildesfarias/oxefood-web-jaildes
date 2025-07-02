import axios from "axios";
<<<<<<< HEAD
import InputMask from 'comigo-tech-react-input-mask';
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';
import MenuSistema from '../../MenuSistema';
=======
import InputMask from "comigo-tech-react-input-mask";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, Container, Divider, Form, Icon } from "semantic-ui-react";
import MenuSistema from "../MenuSistema";


>>>>>>> 1433093612b1cdf2bc906d80acea2d75b7b2801d
import { notifyError, notifySuccess } from '../../views/util/Util';

export default function FormCliente() {
  const { state } = useLocation();
  const [idCliente, setIdCliente] = useState();

<<<<<<< HEAD
    const [nome, setNome] = useState();
    const [cpf, setCpf] = useState();
    const [dataNascimento, setDataNascimento] = useState();
    const [foneCelular, setFoneCelular] = useState();
    const [foneFixo, setFoneFixo] = useState();
    const { state } = useLocation();
    const [idCliente, setIdCliente] = useState();

    useEffect(() => {

        if (state != null && state.id != null) { //Se o id estiver não entrará no if  não terá requisição

            axios.get("http://localhost:8080/api/cliente/" + state.id) //Requisição de consulta
                .then((response) => {
                    setIdCliente(response.data.id)
                    setNome(response.data.nome)
                    setCpf(response.data.cpf)
                    setDataNascimento(formatarData(response.data.dataNascimento))
                    setFoneCelular(response.data.foneCelular)
                    setFoneFixo(response.data.foneFixo)
                })
        }
    }, [state])


    function salvar() { //Função cria um objeto e coloca na variavel clientRequest(backend)

        let clienteRequest = { //Como se fosse o Json (com os dados do cliente)
            nome: nome,
            cpf: cpf,
            dataNascimento: dataNascimento,
            foneCelular: foneCelular,
            foneFixo: foneFixo
        }

        if (idCliente != null) { //Alteração:
            axios.put("http://localhost:8080/api/cliente/" + idCliente, clienteRequest)
                .then((response) => { console.log('Cliente alterado com sucesso.') })
                .catch((error) => { console.log('Erro ao alter um cliente.') })
        } else { //Cadastro:
            axios.post("http://localhost:8080/api/cliente", clienteRequest)
                .then((response) => { console.log('Cliente cadastrado com sucesso.') })
                     notifySuccess('Cliente cadastrado com sucesso.')
                         notifyError(error.response.data.errors[i].defaultMessage)
                .catch((error) => { console.log('Erro ao incluir o cliente.') })
        }
=======
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [foneCelular, setFoneCelular] = useState("");
  const [foneFixo, setFoneFixo] = useState("");
  const navigate = useNavigate();
>>>>>>> 1433093612b1cdf2bc906d80acea2d75b7b2801d

  useEffect(() => {
    if (state != null && state.id != null) {
      axios
        .get("http://localhost:3000/api/cliente/" + state.id)
        .then((response) => {
          setIdCliente(response.data.id);
          setNome(response.data.nome);
          setCpf(response.data.cpf);
          setDataNascimento(response.data.dataNascimento);
          setFoneCelular(response.data.foneCelular);
          setFoneFixo(response.data.foneFixo);
        });
    }
  }, [state]);

  function salvar() {
    let clienteRequest = {
      nome,
      cpf,
      dataNascimento, 
      foneCelular,
      foneFixo,
    };

    if (idCliente != null) {
      // Alteração
      axios
        .put(`http://localhost:8080/api/cliente/${idCliente}`, clienteRequest)
        .then(() => {
         notifySuccess("Cliente salvo com sucesso!");
          navigate("/list-cliente");
        })
        .catch(() => {
          notifySuccess("Erro ao alterar um cliente.");
        });
    } else {
      // Cadastro
      console.log("Payload do cliente:", clienteRequest);
      axios
        .post("http://localhost:8080/api/cliente", clienteRequest)
        .then((response) => {
          const id = response.data.id;
          notifyError("Erro ao salvar cliente.");
        })
        .catch((error) => {
          notifySuccess("Erro ao incluir o cliente:", error);
        });
    }
  }

  return (
    <div>
      <MenuSistema tela={"cliente"} />
      <div style={{ marginTop: "3%" }}>
        <Container textAlign="justified">
          <h2>
            <span style={{ color: "darkgray" }}>
              Cliente <Icon name="angle double right" size="small" />
            </span>
            {idCliente ? " Alteração" : " Cadastro"}
          </h2>

          <Divider />

          <div style={{ marginTop: "4%" }}>
            <Form>
              <Form.Group widths="equal">
                <Form.Input
                  required
                  fluid
                  label="Nome"
                  maxLength="100"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                />

                <Form.Input required fluid label="CPF">
                  <InputMask
                    required
                    mask="999.999.999-99"
                    value={cpf}
                    onChange={(e) => setCpf(e.target.value)}
                  />
                </Form.Input>
              </Form.Group>

              <Form.Group>
                <Form.Input fluid label="Fone Celular" width={6}>
                  <InputMask
                    mask="(99) 9999.9999"
                    value={foneCelular}
                    onChange={(e) => setFoneCelular(e.target.value)}
                  />
                </Form.Input>

                <Form.Input fluid label="Fone Fixo" width={6}>
                  <InputMask
                    mask="(99) 9999.9999"
                    value={foneFixo}
                    onChange={(e) => setFoneFixo(e.target.value)}
                  />
                </Form.Input>

                <Form.Input fluid label="Data Nascimento" width={6}>
                  <InputMask
                    mask="99/99/9999"
                    placeholder="Ex: 20/03/1985"
                    value={dataNascimento}
                    onChange={(e) => setDataNascimento(e.target.value)}
                  />
                </Form.Input>
              </Form.Group>
            </Form>

            <div style={{ marginTop: "4%" }}>
              <Button
                inverted
                circular
                icon
                labelPosition="left"
                color="orange"
                onClick={() => navigate("/list-cliente")}
              >
                <Icon name="reply" /> Voltar
              </Button>

              <Button
                inverted
                circular
                icon
                labelPosition="left"
                color="blue"
                floated="right"
                onClick={salvar}
              >
                <Icon name="save" /> Salvar
              </Button>
            </div>           

          </div>
        </Container>
      </div>
    </div>
  );
}