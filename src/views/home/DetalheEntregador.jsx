import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function DetalheEntregador() {
  const { id } = useParams(); // Pega o ID da URL
  const [entregador, setEntregador] = useState(null);

  useEffect(() => {
    // Busca os dados do entregador pelo ID
    axios.get(`http://localhost:8080/api/entregador/${id}`)
      .then(response => {
        setEntregador(response.data); // Assume que o backend retorna o campo 'foto'
      })
      .catch(error => {
        console.error("Erro ao carregar dados do entregador", error);
      });
  }, [id]);

  if (!entregador) {
    return <div>Carregando...</div>;
  }

  return (
    <div style={{ padding: '20px' }}>
      <h2>Detalhes do Entregador</h2>
      <div>
        <h3>{entregador.nome}</h3>
        <p><strong>CPF:</strong> {entregador.cpf}</p>
        <p><strong>RG:</strong> {entregador.rg}</p>
        <p><strong>Data de Nascimento:</strong> {entregador.dataNascimento}</p>
        <p><strong>Fone Celular:</strong> {entregador.foneCelular}</p>
        <p><strong>Fone Fixo:</strong> {entregador.foneFixo}</p>
        <p><strong>Qtd. Entregas:</strong> {entregador.qtdEntregasRealizadas}</p>
        <p><strong>Valor por Frete:</strong> R$ {entregador.valorPorFrete}</p>
        <p><strong>Endereço:</strong> {entregador.rua}, {entregador.numero} - {entregador.bairro}</p>
        <p><strong>Cidade:</strong> {entregador.cidade} / {entregador.uf}</p>
        <p><strong>Complemento:</strong> {entregador.complemento}</p>
        <p><strong>CEP:</strong> {entregador.cep}</p>
        <p><strong>Estado:</strong> {entregador.estado}</p>
        <p><strong>Ativo:</strong> {entregador.ativo ? "Sim" : "Não"}</p>

        {/* Foto do entregador */}
        <div style={{ marginTop: '20px' }}>
          <h4>Foto do Entregador</h4>
          <img
            src={entregador.foto ? entregador.foto : 'http://localhost:8080/images/ThomasJefferson.png'}
            alt="Foto do entregador"
            style={{ width: '200px', height: '200px', objectFit: 'cover', borderRadius: '100px' }}
          />
        </div>
      </div>
    </div>
  );
}

export default DetalheEntregador;
