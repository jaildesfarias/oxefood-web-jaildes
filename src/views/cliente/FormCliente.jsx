import axios from "axios";
import InputMask from "comigo-tech-react-input-mask";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, Container, Divider, Form, Icon } from "semantic-ui-react";
<<<<<<< HEAD
import MenuSistema from "../../MenuSistema";
import { notifyError, notifySuccess } from "../../views/util/Util";
=======
import MenuSistema from "../MenuSistema";


import { notifyError, notifySuccess } from '../../views/util/Util';
>>>>>>> 1433093612b1cdf2bc906d80acea2d75b7b2801d

export default function FormCliente() {
  const { state } = useLocation();
  const [idCliente, setIdCliente] = useState();

  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [foneCelular, setFoneCelular] = useState("");
  const [foneFixo, setFoneFixo] = useState("");
<<<<<<< HEAD

  const navigate = useNavigate();

  const [clienteCadastrado, setClienteCadastrado] = useState(false);
  const [idNovoCliente, setIdNovoCliente] = useState();
  const [mostrarPerguntaEndereco, setMostrarPerguntaEndereco] = useState(false);
=======
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
<<<<<<< HEAD

          // Backend já retorna dd/MM/yyyy? Usa direto
          setDataNascimento(response.data.dataNascimento);

=======
          setDataNascimento(response.data.dataNascimento);
>>>>>>> 1433093612b1cdf2bc906d80acea2d75b7b2801d
          setFoneCelular(response.data.foneCelular);
          setFoneFixo(response.data.foneFixo);
        });
    }
  }, [state]);

  function salvar() {
    let clienteRequest = {
      nome,
      cpf,
<<<<<<< HEAD
      dataNascimento, // envia direto no formato dd/MM/yyyy
=======
      dataNascimento, 
>>>>>>> 1433093612b1cdf2bc906d80acea2d75b7b2801d
      foneCelular,
      foneFixo,
    };

    if (idCliente != null) {
      // Alteração
      axios
        .put(`http://localhost:8080/api/cliente/${idCliente}`, clienteRequest)
<<<<<<< HEAD
       .then((response) => {
          notifySuccess("Cliente alterado com sucesso.");
          const id = response.data.id;
          setIdNovoCliente(id);
          setClienteCadastrado(true);
          setMostrarPerguntaEndereco(true);
          console.log("Cliente cadastrado com sucesso. ID:", id);
        })
        .catch((error) => {
          console.error("Erro ao alterar o cliente:", error);
          if (error.response.data.errors != undefined) {
            for (let i = 0; i < error.response.data.errors.length; i++) {
              notifyError(error.response.data.errors[i].defaultMessage);
            }
          } else {
            notifyError(error.response.data.message);
          }
=======
        .then(() => {
         notifySuccess("Cliente salvo com sucesso!");
          navigate("/list-cliente");
        })
        .catch(() => {
          notifySuccess("Erro ao alterar um cliente.");
>>>>>>> 1433093612b1cdf2bc906d80acea2d75b7b2801d
        });
    } else {
      // Cadastro
      console.log("Payload do cliente:", clienteRequest);
      axios
        .post("http://localhost:8080/api/cliente", clienteRequest)
        .then((response) => {
<<<<<<< HEAD
          notifySuccess("Cliente cadastrado com sucesso.");
          const id = response.data.id;
          setIdNovoCliente(id);
          setClienteCadastrado(true);
          setMostrarPerguntaEndereco(true);
          console.log("Cliente cadastrado com sucesso. ID:", id);
          notifySuccess("Cliente cadastrado com sucesso.");
        })
        .catch((error) => {
          console.error("Erro ao incluir o cliente:", error);
          if (error.response.data.errors != undefined) {
            for (let i = 0; i < error.response.data.errors.length; i++) {
              notifyError(error.response.data.errors[i].defaultMessage);
            }
          } else {
            notifyError(error.response.data.message);
          }
=======
          const id = response.data.id;
          notifyError("Erro ao salvar cliente.");
        })
        .catch((error) => {
          notifySuccess("Erro ao incluir o cliente:", error);
>>>>>>> 1433093612b1cdf2bc906d80acea2d75b7b2801d
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
                    mask="(99) 99999-9999"
                    value={foneCelular}
                    onChange={(e) => setFoneCelular(e.target.value)}
                  />
                </Form.Input>

                <Form.Input fluid label="Fone Fixo" width={6}>
                  <InputMask
                    mask="(99) 99999-9999"
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
<<<<<<< HEAD
            </div>

            {/* Pergunta se deseja cadastrar endereço */}
            {mostrarPerguntaEndereco && (
              <div
                style={{
                  marginTop: "2em",
                  padding: "1.5em",
                  borderRadius: "8px",
                  backgroundColor: "#e6f7ff",
                  border: "1px solid #91d5ff",
                  textAlign: "center",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                }}
              >
                <p
                  style={{
                    fontSize: "1.3em",
                    fontWeight: "600",
                    color: "#1890ff",
                  }}
                >
                  <Icon name="map marker alternate" color="blue" /> Deseja
                  cadastrar um endereço agora?
                </p>

                <Button
                  color="green"
                  icon="check"
                  content="Sim"
                  onClick={() => navigate(`/form-endereco/${idNovoCliente}`)}
                  style={{ marginRight: "1em", minWidth: "100px" }}
                />
                <Button
                  color="grey"
                  icon="close"
                  content="Não"
                  onClick={() => setMostrarPerguntaEndereco(false)}
                  style={{ minWidth: "100px" }}
                />
              </div>
            )}

            {/* Se respondeu "Não", exibe botão para cadastrar depois */}
            {clienteCadastrado && !mostrarPerguntaEndereco && (
              <div style={{ marginTop: "2em", textAlign: "center" }}>
                <Button
                  color="blue"
                  icon="map marker alternate"
                  content="Cadastrar Endereço"
                  onClick={() => navigate(`/form-endereco/${idNovoCliente}`)}
                  style={{ minWidth: "180px" }}
                />
              </div>
            )}
=======
            </div>           

>>>>>>> 1433093612b1cdf2bc906d80acea2d75b7b2801d
          </div>
        </Container>
      </div>
    </div>
  );
}