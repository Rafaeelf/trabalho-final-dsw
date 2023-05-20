import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { obterEntregasApi } from "../Api/Service";
import ToastInfo from "./ToastInfo";
import { Toast } from "bootstrap";

export default function Entregas() {

  const [entregas, setEntregas] = useState([]);
  const [temRegistro, setTemRegistro] = useState(false);
  const navigate = useNavigate();

  useEffect(() => atualizarEntregas(),[entregas]);

  function atualizarEntregas() {
    obterEntregasApi()
      .then((resposta) => {
        if(resposta.data.length > 0){
          setEntregas(resposta.data);
          setTemRegistro(true);
        } else{
          setTemRegistro(false);
          const toastLiveExample = document.getElementById("liveToast");
          const toast = new Toast(toastLiveExample);
          toast.show();
        }        
      })
      .catch((erro) => console.log(erro));    
  }

  function visualizarEntrega(id) {
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
          {temRegistro &&
            entregas.map((entrega) => (
              <tr key={entrega.id}>
                <td>{entrega.id}</td>
                <td>{entrega.dataSaida}</td>
                <td>{entrega.horaSaida}</td>
                <td>{entrega.dataRetorno}</td>
                <td>{entrega.horaRetorno}</td>
                <td>
                  <button class="btn btn-success mb-3" onClick={() => visualizarEntrega(entrega.id)}>Detalhes</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <ToastInfo texto={"Não existem entregas cadastradas!"} />
    </div>
  );
}
