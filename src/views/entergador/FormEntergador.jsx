import axios from "axios";
import InputMask from "comigo-tech-react-input-mask";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Container, Divider, Form, Icon } from "semantic-ui-react";
import "../../App.css";
import MenuSistema from "../../MenuSistema";


export default function FormEntregador() {
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [rg, setRg] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [foneCelular, setFoneCelular] = useState('');
  const [foneFixo, setFoneFixo] = useState('');
  const [qtdEntregasRealizadas, setQtdEntregasRealizadas] = useState('');
  const [valorPorFrete, setValorPorFrete] = useState('');
  const [rua, setRua] = useState('');
  const [numero, setNumero] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [cep, setCep] = useState('');
  const [estado, setEstado] = useState('');
  const [uf, setUf] = useState('');
  const [complemento, setComplemento] = useState('');
  const [ativo, setAtivo] = useState(true);

  const ufList = [
    { key: 'SP', value: 'SP', text: 'São Paulo' },
    { key: 'RJ', value: 'RJ', text: 'Rio de Janeiro' },
    { key: 'MG', value: 'MG', text: 'Minas Gerais' },
    // Adicione mais conforme necessário
  ];

  function salvar() {
    const entregadorRequest = {
      nome,
      cpf,
      rg,
      dataNascimento,
      foneCelular,
      foneFixo,
      qtdEntregasRealizadas,
      valorPorFrete,
      rua,
      numero,
      complemento,
      bairro,
      cidade,
      cep,
      estado,
      uf,
  
      ativo
    };

    axios.post("http://localhost:8080/api/entregador", entregadorRequest)
      .then((response) => {
        console.log('Entregador cadastrado com sucesso.');
      })
      .catch((error) => {
        console.log('Erro ao incluir o entregador.');
      });
  }

  function voltar() {
    console.log("Implementar navegação de retorno.");
  }

  return (
    <div>
      <MenuSistema tela={'entregador'} />
      <div style={{ marginTop: '3%' }}>
        <Container textAlign='justified'>
          <h2>
            <span style={{ color: 'darkgray' }}>
              Entregador &nbsp;
              <Icon name='angle double right' size="small" />
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
                  label='Nome'
                  value={nome}
                  onChange={e => setNome(e.target.value)}
                />
                <Form.Input fluid label='CPF'>
                  <InputMask
                    required
                    mask="999.999.999-99"
                    value={cpf}
                    onChange={e => setCpf(e.target.value)}
                  />
                </Form.Input>
                <Form.Input fluid label='RG'>
                  <InputMask
                    required
                    mask="99.999.999-9"
                    value={rg}
                    onChange={e => setRg(e.target.value)}
                  />
                </Form.Input>
              </Form.Group>

              <Form.Group widths='equal'>
                <Form.Input fluid label='Data Nascimento' width={6}>
                  <InputMask
                    mask="99/99/9999"
                    value={dataNascimento}
                    onChange={e => setDataNascimento(e.target.value)}
                    placeholder="Ex: 20/03/1985"
                  />
                </Form.Input>

                <Form.Input label='Fone Celular' width={6}>
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
              </Form.Group>

              <Form.Group widths='equal'>
                <Form.Input
                  fluid
                  label="Qtd Entregas Realizadas"
                  value={qtdEntregasRealizadas}
                  onChange={e => setQtdEntregasRealizadas(e.target.value)}
                />
                <Form.Input
                  fluid
                  label='Valor Por Frete'
                  value={valorPorFrete}
                  onChange={e => setValorPorFrete(e.target.value)}
                />
              </Form.Group>

              <Form.Group widths='equal'>
                <Form.Input
                  fluid
                  label='Rua'
                  value={rua}
                  onChange={e => setRua(e.target.value)}
                />
                <Form.Input
                  fluid
                  label='Número'
                  value={numero}
                  onChange={e => setNumero(e.target.value)}
                />
              </Form.Group>

              <Form.Group widths='equal'>
                <Form.Input
                  fluid
                  label='Bairro'
                  value={bairro}
                  onChange={e => setBairro(e.target.value)}
                />
                <Form.Input
                  fluid
                  label='Cidade'
                  value={cidade}
                  onChange={e => setCidade(e.target.value)}
                />
                <Form.Input
                  fluid
                  label='CEP'
                  value={cep}
                  onChange={e => setCep(e.target.value)}
                />
              </Form.Group>

              <Form.Group widths='equal'>
                <Form.Select
                  fluid
                  label='UF'
                  options={ufList}
                  placeholder='Selecione'
                  value={uf}
                  onChange={(e, { value }) => setUf(value)}
                />
              </Form.Group>

              <Form.Group widths='equal'>
                <Form.Input
                  fluid
                  label='Complemento'
                  value={complemento}
                  onChange={e => setComplemento(e.target.value)}
                />
              </Form.Group>

              <Form.Group inline>
                <label><strong>Ativo:</strong></label>
                <Form.Radio
                  label='Sim'
                  checked={ativo === true}
                  onChange={() => setAtivo(true)}
                />
                <Form.Radio
                  label='Não'
                  checked={ativo === false}
                  onChange={() => setAtivo(false)}
                />
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
    </div>
  );
}
