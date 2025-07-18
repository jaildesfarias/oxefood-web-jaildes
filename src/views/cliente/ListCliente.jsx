
import axios from 'axios';
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Container, Divider, Icon, Table, Modal, Header, Form, Menu, Segment } from 'semantic-ui-react';
import { notifyError, notifySuccess } from '../../views/util/Util';
import MenuSistema from '../../MenuSistema';

export default function ListCliente() {

    const [lista, setLista] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [idRemover, setIdRemover] = useState();

    const [openModalEndereco, setOpenModalEndereco] = useState(false);
    const [idCliente, setIdCliente] = useState();
    const [listaEndereco, setListaEndereco] = useState([]);
    const [menuFiltro, setMenuFiltro] = useState();
    const [nome, setNome] = useState();
    const [cpf, setCpf] = useState();



    useEffect(() => {
        carregarLista();
    }, [])

    function carregarLista() {

        axios.get("http://localhost:8080/api/cliente")
            .then((response) => {
                setLista(response.data)
            })
    }

    function confirmaRemover(id) {
        setOpenModal(true)
        setIdRemover(id)
    }

    useEffect(() => {
        if (idCliente) {
            carregarEndereco();
        }
    }, [idCliente]);

    function confirmaVisualizar(id) {
        setIdCliente(id)
        setOpenModalEndereco(true)
    }

    function carregarEndereco() {
        axios.get("http://localhost:8080/api/cliente/" + idCliente)
            .then((response) => {
                setListaEndereco(response.data.enderecos)
            })
    }

    function formatarData(dataParam) {

        if (dataParam === null || dataParam === '' || dataParam === undefined) {
            return ''
        }

        let arrayData = dataParam.split('-');
        return arrayData[2] + '/' + arrayData[1] + '/' + arrayData[0];
    }

    async function remover() {

        await axios.delete('http://localhost:8080/api/cliente/' + idRemover)
            .then((response) => {
                notifySuccess('Cliente removido com sucesso.');

                axios.get("http://localhost:8080/api/cliente")
                    .then((response) => {
                        setLista(response.data);
                    })
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
        setOpenModal(false);
    }

    function handleMenuFiltro() {

        if (menuFiltro === true) {
            setMenuFiltro(false);
        } else {
            setMenuFiltro(true);
        }
    }

    function handleChangeNome(value) {

        filtrarCliente(value, cpf);
    }

    function handleChangeCpf(value) {

        filtrarCliente(nome, value);
    }

    async function filtrarCliente(nomeParam, cpfParam) {

        let formData = new FormData();

        if (nomeParam !== undefined) {
            setNome(nomeParam)
            formData.append('nome', nomeParam);
        }
        if (cpfParam !== undefined) {
            setCpf(cpfParam)
            formData.append('cpf', cpfParam);
        }

        await axios.post("http://localhost:8080/api/cliente/filtrar", formData)
            .then((response) => {
                setLista(response.data)
            })
    }


    return (
        <div>
            <MenuSistema tela={'cliente'} />
            <div style={{ marginTop: '3%' }}>

                <Menu compact>
                    <Menu.Item
                        name='menuFiltro'
                        active={menuFiltro === true}
                        onClick={() => handleMenuFiltro()}
                    >
                        <Icon name='filter' />
                        Filtrar
                    </Menu.Item>
                </Menu>

                {menuFiltro ? (
                    <Segment textAlign="center">
                        <Form className="form-filtros" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <Form.Input
                                icon="search"
                                value={nome}
                                onChange={e => handleChangeNome(e.target.value)}
                                label="Nome do cliente"
                                placeholder="Filtrar por nome do cliente"
                                labelPosition="center"
                                width={6}
                                style={{ textAlign: "center" }}
                            />

                            <Form.Group style={{ justifyContent: "center" }}>
                                <Form.Input
                                    icon="search"
                                    value={cpf}
                                    onChange={e => handleChangeCpf(e.target.value)}
                                    label="CPF"
                                    placeholder="Filtrar por CPF"
                                    labelPosition="center"
                                    style={{ textAlign: "center" }}
                                />
                            </Form.Group>
                        </Form>
                    </Segment>
                ) : ""}

                <Container textAlign='justified' >

                    <h2> Cliente </h2>
                    <Divider />

                    <div style={{ marginTop: '4%' }}>
                        <Button
                            label='Novo'
                            circular
                            color='orange'
                            icon='clipboard outline'
                            floated='right'
                            as={Link}
                            to='/form-cliente'
                        />
                        <br /><br /><br />

                        <Table color='orange' sortable celled>

                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell>Nome</Table.HeaderCell>
                                    <Table.HeaderCell>CPF</Table.HeaderCell>
                                    <Table.HeaderCell>Data de Nascimento</Table.HeaderCell>
                                    <Table.HeaderCell>Fone Celular</Table.HeaderCell>
                                    <Table.HeaderCell>Fone Fixo</Table.HeaderCell>
                                    <Table.HeaderCell textAlign='center'>Ações</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>

                            <Table.Body>

                                {lista.map(cliente => (

                                    <Table.Row key={cliente.id}>
                                        <Table.Cell>{cliente.nome}</Table.Cell>
                                        <Table.Cell>{cliente.cpf}</Table.Cell>
                                        <Table.Cell>{formatarData(cliente.dataNascimento)}</Table.Cell>
                                        <Table.Cell>{cliente.foneCelular}</Table.Cell>
                                        <Table.Cell>{cliente.foneFixo}</Table.Cell>
                                        <Table.Cell textAlign='center'>

                                            <Button
                                                inverted
                                                circular
                                                color='green'
                                                title='Clique aqui para editar os dados deste cliente'
                                                icon>
                                                <Link to="/form-cliente" state={{ id: cliente.id }} style={{ color: 'green' }}> <Icon name='edit' /> </Link>
                                            </Button>
                                            &nbsp;
                                            <Button
                                                inverted
                                                circular
                                                color='red'
                                                title='Clique aqui para remover este cliente'
                                                icon
                                                onClick={e => confirmaRemover(cliente.id)}>
                                                <Icon name='trash' />
                                            </Button>
                                            <Button
                                                inverted
                                                circular
                                                color='purple'
                                                title='Clique aqui para visualizar o endereço do cliente'
                                                icon
                                                onClick={e => confirmaVisualizar(cliente.id)}
                                            >
                                                <Icon name='eye' />
                                            </Button>
                                            <Button
                                                inverted
                                                circular
                                                color='blue'
                                                title='Clique aqui para adicionar o endereço do cliente'
                                                icon
                                            >
                                                <Link to="/form-enderecocliente" state={{ id: cliente.id }} style={{ color: 'blue' }}> <Icon name='add' /> </Link>
                                            </Button>
                                        </Table.Cell>
                                    </Table.Row>
                                ))}

                            </Table.Body>
                        </Table>
                    </div>
                </Container>
            </div>
            <Modal
                basic
                onClose={() => setOpenModal(false)}
                onOpen={() => setOpenModal(true)}
                open={openModal}
            >
                <Header icon>
                    <Icon name='trash' />
                    <div style={{ marginTop: '5%' }}> Tem certeza que deseja remover esse registro? </div>
                </Header>
                <Modal.Actions>
                    <Button basic color='red' inverted onClick={() => setOpenModal(false)}>
                        <Icon name='remove' /> Não
                    </Button>
                    <Button color='green' inverted onClick={() => remover()}>
                        <Icon name='checkmark' /> Sim
                    </Button>
                </Modal.Actions>
            </Modal>

            {/* visualizar endereços */}
            <Modal
                basic
                onClose={() => setOpenModalEndereco(false)}
                onOpen={() => {
                    setOpenModalEndereco(true);
                    carregarEndereco();
                }}
                open={openModalEndereco}
            >
                <Header icon>
                    <Icon name='eye' />
                    Endereços do cliente
                </Header>
                <Modal.Content>
                    <div style={{ marginTop: '3%' }}>

                        <Container textAlign='justified'>

                            <Table color='orange' sortable celled>
                                <Table.Header>
                                    <Table.Row>
                                        <Table.HeaderCell>Rua</Table.HeaderCell>
                                        <Table.HeaderCell>Número</Table.HeaderCell>
                                        <Table.HeaderCell>Complemento</Table.HeaderCell>
                                        <Table.HeaderCell>Bairro</Table.HeaderCell>
                                        <Table.HeaderCell>CEP</Table.HeaderCell>
                                        <Table.HeaderCell>Cidade</Table.HeaderCell>
                                        <Table.HeaderCell>Estado</Table.HeaderCell>
                                    </Table.Row>
                                </Table.Header>

                                <Table.Body>
                                    {listaEndereco.map(enderecos => (
                                        <Table.Row key={enderecos.id}>
                                            <Table.Cell>{enderecos.rua}</Table.Cell>
                                            <Table.Cell>{enderecos.numero}</Table.Cell>
                                            <Table.Cell>{enderecos.complemento}</Table.Cell>
                                            <Table.Cell>{enderecos.bairro}</Table.Cell>
                                            <Table.Cell>{enderecos.cep}</Table.Cell>
                                            <Table.Cell>{enderecos.cidade}</Table.Cell>
                                            <Table.Cell>{enderecos.estado}</Table.Cell>
                                            <Table.Cell textAlign='center'>
                                            </Table.Cell>
                                        </Table.Row>
                                    ))}
                                </Table.Body>
                            </Table>
                        </Container>
                    </div>
                </Modal.Content>
                <Modal.Actions>
                    <Button color='green' onClick={() => setOpenModalEndereco(false)}>
                        <Icon name='checkmark' /> Fechar
                    </Button>
                </Modal.Actions>
            </Modal>
        </div>
    )
}
