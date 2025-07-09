import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Button, Container, Divider, Icon, Table } from "semantic-ui-react";

import { notifyError, notifySuccess } from '../../views/util/Util';



<<<<<<< HEAD
=======
import {
  Button,
  Container,
  Divider,
<<<<<<< HEAD
  Icon,
  List,
=======
  Header,
  Icon,
>>>>>>> 1433093612b1cdf2bc906d80acea2d75b7b2801d
  Modal,
  Table,
} from "semantic-ui-react";
>>>>>>> 6bfb46c670b034829533dff4a91533521c27081c
import MenuSistema from "../../MenuSistema";

export default function ListCliente() {
  const [lista, setLista] = useState([]);
<<<<<<< HEAD
=======
  const [enderecos, setEnderecos] = useState({});
  const [openModal, setOpenModal] = useState(false);
  const [openEnderecoModal, setOpenEnderecoModal] = useState(false);
  const [clienteSelecionado, setClienteSelecionado] = useState(null);
  const [idRemover, setIdRemover] = useState();
>>>>>>> 6bfb46c670b034829533dff4a91533521c27081c

  useEffect(() => {
    carregarLista();
  }, []);

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
  function confirmaRemover(id) {
    //Recebe o id do cliente
    setOpenModal(true); // Modifica a variavel open modal para true
    setIdRemover(id);
  }

>>>>>>> 1433093612b1cdf2bc906d80acea2d75b7b2801d
>>>>>>> 6bfb46c670b034829533dff4a91533521c27081c
  function carregarLista() {
    axios.get("http://localhost:8080/api/cliente").then((response) => {
      setLista(response.data);
    });
  }
<<<<<<< HEAD

=======
<<<<<<< HEAD

  function carregarEnderecos(idCliente) {
    axios
      .get(`http://localhost:8080/api/enderecocliente/por-cliente/${idCliente}`)
      .then((response) => {
        setEnderecos((prev) => ({ ...prev, [idCliente]: response.data }));
      })
      .catch((error) => {
        console.error("Erro ao carregar endereços:", error);
        setEnderecos((prev) => ({ ...prev, [idCliente]: [] }));
      });
  }

  function abrirModalEnderecos(cliente) {
    setClienteSelecionado(cliente);
    if (cliente.enderecos) {
      setEnderecos((prev) => ({ ...prev, [cliente.id]: cliente.enderecos }));
    } else {
      carregarEnderecos(cliente.id);
    }
    setOpenEnderecoModal(true);
  }

  function confirmaRemover(id) {
    setOpenModal(true);
    setIdRemover(id);
  }

=======
>>>>>>> 6bfb46c670b034829533dff4a91533521c27081c
   function formatarData(dataParam) {
    if (!dataParam) { 
      return "";
    }

    let arrayData = String(dataParam).split("/"); 
    
    if (arrayData.length === 3) {
      return `${arrayData[0]}/${arrayData[1]}/${arrayData[2]}`;
    } else {
      
      console.warn("Formato de data inesperado, retornando string original:", dataParam);
      return String(dataParam); 
    }
  }

>>>>>>> 1433093612b1cdf2bc906d80acea2d75b7b2801d
  async function remover() {
    await axios
      .delete("http://localhost:8080/api/cliente/" + idRemover)
      .then(() => {
        carregarLista();
      })
      .catch(() => {
        console.log("Erro ao remover um cliente.");
      });
    setOpenModal(false);
  }
        axios.post(ENDERECO_API + "api/cliente", clienteRequest)
      .then((response) => {
      notifySuccess('Cliente cadastrado com sucesso.')
      })
      .catch((error) => {
      if (error.response.data.errors != undefined) {
                for (let i = 0; i < error.response.data.errors.length; i++) {
                  notifyError(error.response.data.errors[i].defaultMessage)
              }
        } else {
          notifyError(error.response.data.message)
        }
      })


<<<<<<< HEAD
=======
  function formatarData(dataParam) {
    if (!dataParam) return "";
    const arrayData = dataParam.split("-");
    if (arrayData.length !== 3) return dataParam;
    return `${arrayData[2]}/${arrayData[1]}/${arrayData[0]}`;
  }
>>>>>>> 6bfb46c670b034829533dff4a91533521c27081c

  return (
    <div>
      <MenuSistema tela={"cliente"} />

      <div style={{ marginTop: "3%" }}>
        <Container textAlign="justified">
<<<<<<< HEAD
          <h2> Produto </h2>
=======
          <h2>Cliente</h2>
>>>>>>> 6bfb46c670b034829533dff4a91533521c27081c
          <Divider />

          <div style={{ marginTop: "4%" }}>
            <Button
              label="Novo"
              circular
              color="orange"
              icon="clipboard outline"
              floated="right"
              as={Link}
              to="/form-cliente"
            />
            <br />
            <br />
<<<<<<< HEAD
            <br /> {/*espacamento do botão e lista*/}
=======
            <br />
<<<<<<< HEAD
            <Table textAlign="center" color="orange" sortable celled>
=======

>>>>>>> 6bfb46c670b034829533dff4a91533521c27081c
            <Table color="orange" sortable celled>
>>>>>>> 1433093612b1cdf2bc906d80acea2d75b7b2801d
              <Table.Header>
                <Table.Row>
<<<<<<< HEAD
                  <Table.HeaderCell>Codigo</Table.HeaderCell>
                  <Table.HeaderCell>Titulo</Table.HeaderCell>
                  <Table.HeaderCell>Descricao</Table.HeaderCell>
                  <Table.HeaderCell>valorUnitario</Table.HeaderCell>
                  <Table.HeaderCell>tempoEntregaMinimo</Table.HeaderCell>
                  <Table.HeaderCell>tempoEntregaMaximo</Table.HeaderCell>
                  <Table.HeaderCell textAlign="center">Ações</Table.HeaderCell>
=======
                  <Table.HeaderCell>Nome</Table.HeaderCell>
                  <Table.HeaderCell>CPF</Table.HeaderCell>
                  <Table.HeaderCell>Data de Nascimento</Table.HeaderCell>
                  <Table.HeaderCell>Fone Celular</Table.HeaderCell>
                  <Table.HeaderCell>Fone Fixo</Table.HeaderCell>
                  <Table.HeaderCell>Endereços</Table.HeaderCell>
                  <Table.HeaderCell>Ações</Table.HeaderCell>
>>>>>>> 6bfb46c670b034829533dff4a91533521c27081c
                </Table.Row>
              </Table.Header>

              <Table.Body>
<<<<<<< HEAD
                {lista.map((obj) => (
                  <Table.Row key={obj.id}>
                    <Table.Cell>{obj.codigo}</Table.Cell>
                    <Table.Cell>{obj.titulo}</Table.Cell>
                    <Table.Cell>{obj.descricao}</Table.Cell>
                    <Table.Cell>{obj.valorUnitario}</Table.Cell>
                    <Table.Cell>{obj.tempoEntregaMinimo}</Table.Cell>
                    <Table.Cell>{obj.tempoEntregaMaximo}</Table.Cell>
=======
                {lista.map((cliente) => (
                  <Table.Row key={cliente.id}>
                    <Table.Cell>{cliente.nome}</Table.Cell>
                    <Table.Cell>{cliente.cpf}</Table.Cell>
                    <Table.Cell>
                      {formatarData(cliente.dataNascimento)}
                    </Table.Cell>
                    <Table.Cell>{cliente.foneCelular}</Table.Cell>
                    <Table.Cell>{cliente.foneFixo}</Table.Cell>
                    <Table.Cell>
                      <Button
                        icon
                        color="teal"
                        labelPosition="left"
                        onClick={() => abrirModalEnderecos(cliente)}
                      >
                        <Icon name="map marker alternate" />
                        Ver Endereços
                      </Button>
                    </Table.Cell>
>>>>>>> 6bfb46c670b034829533dff4a91533521c27081c
                    <Table.Cell textAlign="center">
                      <Button
                        inverted
                        circular
                        color="green"
<<<<<<< HEAD
                        title="Clique aqui para editar os dados deste produto"
=======
>>>>>>> 6bfb46c670b034829533dff4a91533521c27081c
                        icon
                        title="Editar dados deste cliente"
                        as={Link}
                        to="/form-cliente"
                        state={{ id: cliente.id }}
                      >
<<<<<<< HEAD
                        <Link
                          to="/form-cliente"
                          state={{ id: obj.id }}
                          style={{ color: "green" }}
                        >
                          {" "}
                          <Icon name="edit" />{" "}
                        </Link>
                      </Button>{" "}
=======
                        <Icon name="edit" />
                      </Button>
>>>>>>> 6bfb46c670b034829533dff4a91533521c27081c
                      &nbsp;
                      <Button
                        inverted
                        circular
                        color="red"
                        icon
<<<<<<< HEAD
=======
                        title="Remover este cliente"
                        onClick={() => confirmaRemover(cliente.id)}
>>>>>>> 6bfb46c670b034829533dff4a91533521c27081c
                      >
                        <Icon name="trash" />
                      </Button>
                    </Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
          </div>
        </Container>
      </div>
<<<<<<< HEAD
=======

      {/* Modal de confirmação de remoção */}
      <Modal
        basic
        onClose={() => setOpenModal(false)}
        open={openModal}
        size="small"
      >
        <Modal.Header>
          <Icon name="trash" />
          Tem certeza que deseja remover esse registro?
        </Modal.Header>
        <Modal.Actions>
          <Button basic color="red" inverted onClick={() => setOpenModal(false)}>
            <Icon name="remove" /> Não
          </Button>
          <Button color="green" inverted onClick={remover}>
            <Icon name="checkmark" /> Sim
          </Button>
        </Modal.Actions>
      </Modal>

      {/* Modal com endereços do cliente */}
      <Modal
        onClose={() => setOpenEnderecoModal(false)}
        open={openEnderecoModal}
        size="tiny"
      >
        <Modal.Header>Endereços de {clienteSelecionado?.nome}</Modal.Header>
        <Modal.Content scrolling>
          <List divided relaxed>
            {(enderecos[clienteSelecionado?.id] || []).length > 0 ? (
              enderecos[clienteSelecionado.id].map((end) => (
                <List.Item key={end.id}>
                  <List.Icon name="home" size="large" verticalAlign="middle" />
                  <List.Content>
                    <List.Header
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <span>
                        {end.endereco}, {end.numero}
                      </span>
                      <span>
                        <Button
                          size="mini"
                          icon="edit"
                          color="green"
                          title="Editar endereço"
                          as={Link}
                          to={`/form-endereco/${clienteSelecionado?.id}/${end.id}`}
                        />
                        <Button
                          size="mini"
                          icon="trash"
                          color="red"
                          title="Excluir endereço"
                          onClick={async () => {
                            const confirm = window.confirm(
                              "Deseja realmente excluir este endereço?"
                            );
                            if (confirm) {
                              try {
                                await axios.delete(
                                  `http://localhost:8080/api/enderecocliente/${end.id}`
                                );
                                carregarEnderecos(clienteSelecionado.id);
                              } catch (error) {
                                console.error("Erro ao excluir endereço:", error);
                              }
                            }
                          }}
                        />
                      </span>
                    </List.Header>
                    <List.Description>
                      {end.bairro}, {end.cidade} - {end.uf},{" "}
                      {end.cep || "CEP não informado"}
                      {end.complemento && ` | Complemento: ${end.complemento}`}
                    </List.Description>
                  </List.Content>
                </List.Item>
              ))
            ) : (
              <p>Nenhum endereço cadastrado.</p>
            )}
          </List>
        </Modal.Content>
        <Modal.Actions>
          <Button
            color="blue"
            as={Link}
            to={`/form-endereco/${clienteSelecionado?.id}`}
          >
            <Icon name="plus" /> Cadastrar novo endereço
          </Button>
          <Button onClick={() => setOpenEnderecoModal(false)}>Fechar</Button>
        </Modal.Actions>
      </Modal>
>>>>>>> 6bfb46c670b034829533dff4a91533521c27081c
    </div>
  );
}
