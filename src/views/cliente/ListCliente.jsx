import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
<<<<<<< HEAD
import { Button, Container, Divider, Icon, Table } from "semantic-ui-react";
=======
import { notifySuccess, notifyError } from '../../views/util/Util';


import {
  Button,
  Container,
  Divider,
  Header,
  Icon,
  Modal,
  Table,
} from "semantic-ui-react";
>>>>>>> 1433093612b1cdf2bc906d80acea2d75b7b2801d
import MenuSistema from "../../MenuSistema";

export default function ListCliente() {
  const [lista, setLista] = useState([]);

  useEffect(() => {
    carregarLista();
  }, []);

  function carregarLista() {
    axios.get("http://localhost:8080/api/cliente").then((response) => {
      setLista(response.data);
    });
  }
<<<<<<< HEAD
  
=======
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

  async function remover() {
    await axios
      .delete("http://localhost:8080/api/cliente/" + idRemover)
      .then((response) => {
        console.log("Cliente removido com sucesso.");

        axios.get("http://localhost:8080/api/cliente").then((response) => {
          setLista(response.data);
        });
      })
      .catch((error) => {
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



  return (
    <div>
      <MenuSistema tela={"cliente"} />

      <div style={{ marginTop: "3%" }}>
        <Container textAlign="justified">
          <h2> Produto </h2>
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
            <br /> {/*espacamento do botão e lista*/}
            <Table color="orange" sortable celled>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Codigo</Table.HeaderCell>
                  <Table.HeaderCell>Titulo</Table.HeaderCell>
                  <Table.HeaderCell>Descricao</Table.HeaderCell>
                  <Table.HeaderCell>valorUnitario</Table.HeaderCell>
                  <Table.HeaderCell>tempoEntregaMinimo</Table.HeaderCell>
                  <Table.HeaderCell>tempoEntregaMaximo</Table.HeaderCell>
                  <Table.HeaderCell textAlign="center">Ações</Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                {lista.map((obj) => (
                  <Table.Row key={obj.id}>
                    <Table.Cell>{obj.codigo}</Table.Cell>
                    <Table.Cell>{obj.titulo}</Table.Cell>
                    <Table.Cell>{obj.descricao}</Table.Cell>
                    <Table.Cell>{obj.valorUnitario}</Table.Cell>
                    <Table.Cell>{obj.tempoEntregaMinimo}</Table.Cell>
                    <Table.Cell>{obj.tempoEntregaMaximo}</Table.Cell>
                    <Table.Cell textAlign="center">
                      <Button
                        inverted
                        circular
                        color="green"
                        title="Clique aqui para editar os dados deste produto"
                        icon
                      >
                        <Link
                          to="/form-cliente"
                          state={{ id: obj.id }}
                          style={{ color: "green" }}
                        >
                          {" "}
                          <Icon name="edit" />{" "}
                        </Link>
                      </Button>{" "}
                      &nbsp;
                      <Button
                        inverted
                        circular
                        color="red"
                        title="Clique aqui para remover este cliente"
                        icon
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
    </div>
  );
}
