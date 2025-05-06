
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function DetalheEntregador() {
  const { id } = useParams();
  const [entregador, setEntregador] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8080/api/entregadores/${id}`)
      .then(response => setEntregador(response.data))
      .catch(error => console.error("Erro ao buscar entregador:", error));
  }, [id]);

  if (!entregador) return <p>Carregando...</p>;

  return (
    <div>
      <h2>Detalhes do Entregador</h2>
      <p><strong>Nome:</strong> {entregador.nome}</p>
      <p><strong>CPF:</strong> {entregador.cpf}</p>
      <p><strong>Telefone:</strong> {entregador.telefone}</p>
      {/* Adicione outros campos conforme necessário */}
    </div>
  );
}

export default DetalheEntregador;
