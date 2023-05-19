import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { obterEntregasApi } from "../Api/Service";

export default function Entregas() {

  const [produtos, setProdutos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => atualizarEntregas());

  function atualizarEntregas() {
    obterEntregasApi()
      .then((resposta) => {
        setProdutos(resposta.data);
      })
      .catch((erro) => console.log(erro));
  }

  return (
    <div class="container">
      <table className="table">
        <tbody>
          {produtos.map((produto) => (
            <tr key={produto.id}>
              <td>{produto.dataSaida}</td>
              <td>{produto.dataRetorno}</td>
              <td>
                
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
