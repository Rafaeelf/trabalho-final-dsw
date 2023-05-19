import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { obterEntregasApi } from "../Api/Service";
import ToastInfo from "./ToastInfo";
import { Toast } from "bootstrap";

export default function Entregas() {

  const [produtos, setProdutos] = useState([]);
  const [temRegistro, setTemRegistro] = useState(false);
  const navigate = useNavigate();

  useEffect(() => atualizarEntregas());

  function atualizarEntregas() {
    obterEntregasApi()
      .then((resposta) => {
        setProdutos(resposta.data);
      })
      .catch((erro) => console.log(erro));
      if(produtos.length > 0){
        setTemRegistro(true);
      } else {
        const toastLiveExample = document.getElementById('liveToast');
        const toast = new Toast(toastLiveExample);
        toast.show();
      }
  }

  function visualizarEntrega(id){
    navigate(`/entrega/${id}/pedido`);
  }

  return (
    <div class="container">
      <table className="table">
        <tbody>
          <th>Id</th>
          <th>Dia Saída</th>
          <th>Hora Saída</th>
          <th>Dia Retorno</th>
          <th>Hora Retorno</th>
          {temRegistro && produtos.map((produto) => (
            <tr key={produto.id}>
              <td>{produto.id}</td>
              <td>{produto.dataSaida}</td>
              <td>{produto.horaSaida}</td>
              <td>{produto.dataRetorno}</td>
              <td>{produto.horaRetorno}</td>
              <td>
                <button class="btn btn-success mb-3" onClick={() => visualizarEntrega(produto.id)}>
                    Detalhes
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ToastInfo texto={"Não existem entregas cadastradas!"}/>
    </div>
  );
}
