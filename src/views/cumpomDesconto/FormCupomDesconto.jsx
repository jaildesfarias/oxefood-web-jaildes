import axios from "axios";
import InputMask from 'comigo-tech-react-input-mask';
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button, Container, Divider, Form, Icon,Modal } from 'semantic-ui-react';
import { Route} from "react-router-dom";
import MenuSistema from '../../MenuSistema';


export default function FormCumpoDesconto() {

    const { state } = useLocation();
    const [openModal, setOpenModal] = useState(false);
    const [idRemover, setIdRemover] = useState();
   

    const [percentualDesconto, setPercentualDesconto] = useState();
    const [valorDesconto, setValorDesconto] = useState();
    const [valorMinimoPedidoPermitido, setValorMinimoPedidoPermitido] = useState();
    const [quantidadeMaximaUso, setQuantidadeMaximaUso = useState();
    const [inicioVigencia, setInicioVigencia] = useState();

    useEffect(() => {
        

        if (state != null && state.id != null) {

            axios.get("http://localhost:8080/api/cumpoDesconto/" + state.id)
            .then((response) => {
                           setCodigoDesconto(response.data.codigoDesconto)
                           setPercentualDesconto(response.data.percentualDesconto)
                           setValorDesconto(response.data.valorDesconto)
                           setDataNascimento(formatarData(response.data.dataNascimento))
                           setValorMinimoPedidoPermitido(response.data.valorMinimoPedidoPermitido)
                           setQuantidadeMaximaUso(response.data.quantidadeMaximaUso)
                           setInicioVigencia(response.data.inicioVigencia)
            })
        }
}, [state])
            async function remover() {
            await axios.delete('http://localhost:8080/api/cumpoDesconto/' + idRemover)
            .then((response) => {
            console.log('CumpoDesconto removido com sucesso.')
            axios.get("http://localhost:8080/api/cumpoDesconto")
            .then((response) => {
            setLista(response.data)
            })
            })
            .catch((error) => {
            console.log('Erro ao remover um cumpoDesconto.')
            })
            setOpenModal(false)
            }


    function salvar() {

        let CumpoDescontoRequest = {
            codigoDesconto : codigoDesconto ,
            percentualDesconto: percentualDesconto,
            valorDesconto: valorDesconto,
            valorMinimoPedidoPermitido: valorMinimoPedidoPermitido,
            quantidadeMaximaUso: quantidadeMaximaUso,
            inicioVigencia : inicioVigencia,
            fimVigencia :fimVigencia 
        }

        if (idCumpoDesconto != null) { //Alteração:
            axios.put("http://localhost:8080/api//cumpoDesconto/" + idCumpoDesconto, VRequest)
            .then((response) => { console.log('CumpoDesconto alterar com sucesso.') })
            .catch((error) => { console.log('Erro ao alterar um CumpoDesconto.') })
        } else { //Cadastro:
            axios.post("http://localhost:8080/api/cumpoDesconto", cumpoDescontoRequest)
            .then((response) => { console.log('CumpoDesconto cadastrado com sucesso.') })
            .catch((error) => { console.log('Erro ao incluir o cumpoDesconto.') })
        }
 

        axios.post("http://localhost:8080/api/cumpoDesconto", cumpoDescontoRequest)
            .then((response) => {
                console.log('CumpoDesconto cadastrado com sucesso.')
            })
            .catch((error) => {
                console.log('Erro ao incluir o um cumpoDesconto.')
            })
    }
   

    return (

        <div>
            <MenuSistema tela={'cumpoDesconto'} />
            <div style={{ marginTop: '3%' }}>

                <Container textAlign='justified' >

                { idCumpoDesconto === undefined &&
    <h2> <span style={{color: 'darkgray'}}> CumpoDesconto &nbsp;<Icon name='angle double right' size="small" /> </span> CumpoDesconto</h2>
}
{ idCumpoDesconto != undefined &&
    <h2> <span style={{color: 'darkgray'}}> CumpoDesconto &nbsp;<Icon name='angle double right' size="small" /> </span> Alteração</h2>
}


                    <Divider />

                    <div style={{ marginTop: '4%' }}>

                        <Form>

                            <Form.Group widths='equal'>

                                <Form.Input
                                    required
                                    fluid
                                    label='codigoDesconto'
                                    maxLength=""
                                    value={CodigoDesconto}
                                    onChange={e => setCodigoDesconto(e.target.value)}

                                />

                                <Form.Input
                                    required
                                    fluid
                                    label='percentualDesconto'>
                                    <InputMask
                                        required
                                        mask=""
                                        value={cpf}
                                        onChange={e => setPercentualDesconto(e.target.value)}
                                    />
                                </Form.Input>

                            </Form.Group>

                            <Form.Group>

                                <Form.Input
                                    fluid
                                    label='ValorDesconto'
                                    width={6}>
                                    <InputMask
                                        mask=""
                                        value={}
                                        onChange={e => setValorDesconto(e.target.value)}

                                    />
                                </Form.Input>
                                </Form.Group>

                       <Form.Group widths='equal'>

                                <Form.Input
                                    fluid
                                    label='inicioVigencia'
                                    width={6}>
                                    <InputMask
                                        mask=""
                                        value={inicioVigencia}
                                        onChange={e => setInicioVigencia(e.target.value)}

                                    />
                                </Form.Input>
                                 <Form.Group>

                                <Form.Input
                                    fluid
                                    label='fimVigencia'
                                    width={6}>
                                    <InputMask
                                        mask=""
                                        value={}
                                        onChange={e => setfimVigencia(e.target.value)}

                                    />
                                </Form.Input>

                                

                            </Form.Group>
                            </Form.Group>

                        </Form>

                        <div style={{ marginTop: '4%' }}>

                            <Link to={'/list-cumpomDesconto'}>
                                <Button
                                    inverted
                                    circular
                                    icon
                                    labelPosition='left'
                                    color='orange'
                                >
                                    <Icon name='reply' /> Voltar
                                </Button>
                            </Link>

                                 <Button
                                        inverted
                                        circular
                                        color='red'
                                        title='Clique aqui para remover este cumpoDesconto'
                                        icon
                                        onClick={e => confirmaRemover(cliente.id)}>
                                        <Icon name='trash' />
                                        </Button>

                                   <Button
                                       inverted
                                        circular
                                        color='red'
                                        title='Clique aqui para salvar este cumpoDesconto'
                                        icon
                            
                                 onClick={e => confirmaSalvar(cliente.id)}>
                                <Icon name='trash' />
                                </Button>



                        </div>

                    </div>

                </Container>
            </div>
             <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        basic
      >
        <Modal.Header>Observação da CumpoDesconto/Modal.Header>
        <Modal.Content>
          <p>{observacaoModal}</p>
        </Modal.Content>
        <Modal.Actions>
          <Button basic color='red' inverted onClick={() => setModalOpen(false)}>
            <Icon name='remove' /> Fechar
          </Button>
        </Modal.Actions>
      </Modal>
    </div>
        </div>

    );

}
