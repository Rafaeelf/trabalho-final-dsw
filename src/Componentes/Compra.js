import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { obterPedidosUsuarioApi } from "../Api/Service";
import { useAutCtx } from "../autCtx";

export default function Compra() {

    const [pedidos, setPedidos] = useState([]);
    const navigate = useNavigate();
    const autCtx = useAutCtx();
    const user = autCtx.usuario;

    useEffect(() => atualizarPedidos());

    function atualizarPedidos() {
        obterPedidosUsuarioApi(user)
          .then((resposta) => {
            setPedidos(resposta.data);
          })    
          .catch((erro) => console.log(erro));

    }

    function visualizarPedido(id) {
        console.log(id);
        navigate(`/pedidoDetalhes/${id}`);
      }

    return (
        <div class="container">
            <table className="table">
                <th>Código</th>
                <th>Data</th>
                <th>Situação</th>
                <tbody>
                {pedidos.map((pedido) => (
                    <tr key={pedido.id}>
                        <td>{pedido.id}</td>
                    <td>{pedido.dataPedido}</td>
                    <td>{pedido.situacao}</td>
                    <td>
                        <button className="btn btn-success mb-3" onClick={() => visualizarPedido(pedido.id)}>Detalhes</button>
                    </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
  );
}
