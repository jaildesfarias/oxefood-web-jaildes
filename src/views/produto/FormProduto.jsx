import axios from "axios";
<<<<<<< HEAD
import InputMask from "comigo-tech-react-input-mask";
=======
>>>>>>> 1433093612b1cdf2bc906d80acea2d75b7b2801d
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button, Container, Divider, Form, Icon } from "semantic-ui-react";
import MenuSistema from "../../MenuSistema";
<<<<<<< HEAD
import { notifyError, notifySuccess } from "../../views/util/Util";

export default function FormProduto() {
  const { state } = useLocation();
  const [idProduto, setIdProduto] = useState();

  const [titulo, setTitulo] = useState();
  const [codigo, setCodigo] = useState();
  const [descricao, setDescricao] = useState();
  const [valorUnitario, setValorUnitario] = useState();
  const [tempoEntregaMinimo, setTempoEntregaMinimo] = useState();
  const [tempoEntregaMaximo, setTempoEntregaMaximo] = useState();
  const [listaCategoria, setListaCategoria] = useState([]);
  const [idCategoria, setIdCategoria] = useState();

  useEffect(() => {
    console.log("state recebido:", state);
    if (state != null && state.id != null) {
      axios
        .get("http://localhost:8080/api/produto/" + state.id)
        .then((response) => {
          setIdProduto(response.data.id);
          setTitulo(response.data.titulo);
          setCodigo(response.data.codigo);
          setDescricao(response.data.descricao);
          setValorUnitario(response.data.valorUnitario);
          setTempoEntregaMinimo(response.data.tempoEntregaMaximo);
          setTempoEntregaMaximo(response.data.tempoEntregaMinimo);
          if (response.data.categoria != null) {
            setIdCategoria(response.data.categoria.id);
          }
        });
    }

    axios.get("http://localhost:8080/api/categoriaproduto").then((response) => {
      const dropDownCategorias = response.data.map((c) => ({
        text: c.descricao,
        value: c.id,
      }));
      setListaCategoria(dropDownCategorias);
    });
  }, [state]);

  function salvar() {
    let produtoRequest = {
      idCategoria: idCategoria,
      titulo: titulo,
      codigo: codigo,
      descricao: descricao,
      valorUnitario: valorUnitario,
      tempoEntregaMinimo: tempoEntregaMinimo,
      tempoEntregaMaximo: tempoEntregaMaximo,
    };

    if (idProduto != null) {
      //Alteração:
      axios
        .put("http://localhost:8080/api/produto/" + idProduto, produtoRequest)
        .then((response) => {
          console.log("Produto alterado com sucesso.");
        })
        .catch((error) => {
          console.log("Erro ao alter um produto.");
        });
    } else {
      //Cadastro:
      axios
        .post("http://localhost:8080/api/produto", produtoRequest)
        .then((response) => {
          console.log("produto cadastrado com sucesso.");
          notifySuccess("Produto cadastrado com sucesso.");
        })
        .catch((error) => {
          console.log("Erro ao incluir o produto.");
          if (error.response.data.errors != undefined) {
            for (let i = 0; i < error.response.data.errors.length; i++) {
              notifyError(error.response.data.errors[i].defaultMessage);
            }
          } else {
            notifyError(error.response.data.message);
          }
        });
    }
  }
=======
import { notifySuccess, notifyError } from '../../views/util/Util';
export default function FormProduto() {
  const [titulo, setTitulo] = useState();
  const [codigo, setCodigo] = useState();
  const [descricao, setDescricao] = useState();
  const [valorUnitario, setValorUnitario] = useState();
  const [tempoEntregaMinimo, setTempoEntregaMinimo] = useState();
  const [tempoEntregaMaximo, setTempoEntregaMaximo] = useState();
  const { state } = useLocation();
  const [idProduto, setIdProduto] = useState();
   const [listaCategoria, setListaCategoria] = useState([]);
   const [idCategoria, setIdCategoria] = useState();   
  useEffect(() => {

       if (state != null && state.id != null) {
           axios.get("http://localhost:8080/api/produto/" + state.id)
           .then((response) => {
               setIdProduto(response.data.id)
               setCodigo(response.data.codigo)
               setTitulo(response.data.titulo)
               setDescricao(response.data.descricao)
               setValorUnitario(response.data.valorUnitario)
               setTempoEntregaMinimo(response.data.tempoEntregaMinimo)
               setTempoEntregaMaximo(response.data.tempoEntregaMaximo)
               setIdCategoria(response.data.categoria.id)
           })
       }

       axios.get("http://localhost:8080/api/categoriaproduto")
       .then((response) => {
           const dropDownCategorias = response.data.map(c => ({ text: c.descricao, value: c.id }));
           setListaCategoria(dropDownCategorias);
       })

   }, [state])


   function salvar() {

       let produtoRequest = {
           idCategoria: idCategoria,
           codigo: codigo,
           titulo: titulo,
           descricao: descricao,
           valorUnitario: valorUnitario,
           tempoEntregaMinimo: tempoEntregaMinimo,
           tempoEntregaMaximo: tempoEntregaMaximo
       }

       if (idProduto != null) { //Alteração:
           axios.put("http://localhost:8080/api/produto/" + idProduto, produtoRequest)
           .then((response) => { console.log('Produto alterado com sucesso.') })
           .catch((error) => { console.log('Erro ao alterar um produto.') })
       } else { //Cadastro:
           axios.post("http://localhost:8080/api/produto", produtoRequest)
           .then((response) => { console.log('Produto cadastrado com sucesso.') })
           .catch((error) => { console.log('Erro ao incluir o produto.') })
       }
   }

>>>>>>> 1433093612b1cdf2bc906d80acea2d75b7b2801d

  return (
    <div>
      <MenuSistema tela={"produto"} />
<<<<<<< HEAD
=======

>>>>>>> 1433093612b1cdf2bc906d80acea2d75b7b2801d
      <div style={{ marginTop: "3%" }}>
        <Container textAlign="justified">
          {idProduto === undefined && (
            <h2>
              {" "}
              <span style={{ color: "darkgray" }}>
                {" "}
                Produto &nbsp;
                <Icon name="angle double right" size="small" />{" "}
              </span>{" "}
              Cadastro
            </h2>
          )}
          {idProduto != undefined && (
            <h2>
              {" "}
              <span style={{ color: "darkgray" }}>
                {" "}
                Produto &nbsp;
                <Icon name="angle double right" size="small" />{" "}
              </span>{" "}
              Alteração
            </h2>
          )}
<<<<<<< HEAD
=======

>>>>>>> 1433093612b1cdf2bc906d80acea2d75b7b2801d
          <Divider />

          <div style={{ marginTop: "4%" }}>
            <Form>
              <Form.Group widths="equal">
                <Form.Input
                  required
<<<<<<< HEAD
                  width={10}
                  label="Título"
                  maxLength="100"
                  value={titulo}
                  onChange={(e) => setTitulo(e.target.value)}
                />

                <Form.Input required width={3} label="Código do Produto">
                  <InputMask
                    required
                    mask="999.999.999-99"
                    value={codigo}
                    onChange={(e) => setCodigo(e.target.value)}
                  />
                </Form.Input>
              </Form.Group>

              <Form.Group widths="equal">
                <Form.TextArea
                  required
                  fluid
                  label="Descrição"
                  placeholder=""
                  maxLength="500"
                  value={descricao}
                  onChange={(e) => setDescricao(e.target.value)}
                />
              </Form.Group>

              <Form.Select
                required
                fluid
                tabIndex="3"
                placeholder="Selecione"
                label="Categoria"
                options={listaCategoria}
                value={idCategoria}
                onChange={(e, { value }) => {
                  setIdCategoria(value);
                }}
              />

              <Form.Group>
                <Form.Input
                  required
                  width={6}
                  label="Valor Unitário"
                  maxLengt="50"
=======
                  fluid
                  label="Titulo"
                  maxLength="100"
                  placeholder="Informe o titulo do produto"
                  value={titulo}
                  onChange={(e) => setTitulo(e.target.value)}
                />

                <Form.Input
                  required
                  fluid
                  placeholder="Informe o código do produto"
                  label="Código do Produto"
                  value={codigo}
                  onChange={(e) => setCodigo(e.target.value)}
                ></Form.Input>
              </Form.Group>

                <Form.Select
                  required
                  fluid
                  tabIndex="3"
                  placeholder="Selecione"
                  label="Categoria"
                  options={listaCategoria}
                  value={idCategoria}
                  onChange={(e, { value }) => {
                    setIdCategoria(value);
                  }}
                />

              <Form.TextArea
                label="Descrição"
                placeholder="Informe a descrição do produto"
                maxLength="10000"
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
              />
              <Form.Group>
                <Form.Input
                  required
                  fluid
                  label="Valor Unitário"
                  width={6}
>>>>>>> 1433093612b1cdf2bc906d80acea2d75b7b2801d
                  value={valorUnitario}
                  onChange={(e) => setValorUnitario(e.target.value)}
                ></Form.Input>

                <Form.Input
<<<<<<< HEAD
                  required
                  width={6}
                  label="Tempo de Entrega em Minutos"
                  maxLengt="50"
                  value={tempoEntregaMinimo}
                  onChange={(e) => setTempoEntregaMinimo(e.target.value)}
                />

                <Form.Input
                  required
                  width={6}
                  label="Tempo de Entrega Máximo em Minutos"
                  maxLengt="50"
                  value={tempoEntregaMaximo}
                  onChange={(e) => setTempoEntregaMaximo(e.target.value)}
                />
=======
                  fluid
                  label="Tempo de Entrega Mínimo em Minutos"
                  placeholder="30"
                  width={6}
                  value={tempoEntregaMinimo}
                  onChange={(e) => setTempoEntregaMinimo(e.target.value)}
                ></Form.Input>

                <Form.Input
                  fluid
                  label="Tempo de Entrega Máximo em Minutos"
                  placeholder="40"
                  width={6}
                  value={tempoEntregaMaximo}
                  onChange={(e) => setTempoEntregaMaximo(e.target.value)}
                ></Form.Input>
>>>>>>> 1433093612b1cdf2bc906d80acea2d75b7b2801d
              </Form.Group>
            </Form>

            <div style={{ marginTop: "4%" }}>
              <Link to={"/list-produto"}>
                <Button
<<<<<<< HEAD
=======
                  type="button"
>>>>>>> 1433093612b1cdf2bc906d80acea2d75b7b2801d
                  inverted
                  circular
                  icon
                  labelPosition="left"
                  color="orange"
                >
<<<<<<< HEAD
                  <Icon name="reply" /> Voltar,
=======
                  <Icon name="reply" />
                  Voltar
>>>>>>> 1433093612b1cdf2bc906d80acea2d75b7b2801d
                </Button>
              </Link>

              <Button
                inverted
                circular
                icon
                labelPosition="left"
                color="blue"
                floated="right"
                onClick={() => salvar()}
              >
                <Icon name="save" />
                Salvar
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}