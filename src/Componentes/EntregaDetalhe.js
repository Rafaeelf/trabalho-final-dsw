import { useState } from "react";
import { useEffect } from "react";
import { obterEntregaPedidoApi } from "../Api/Service";
import { useParams } from "react-router-dom";


export default function EntregaDetalhe(){

    const { id } = useParams();
    const [pedidos, setPedidos] = useState([]);
    const [temRegistro, setTemRegistro] = useState(false);

    useEffect(() => carregaEntregaPedido(id));

    function carregaEntregaPedido(id) {
        obterEntregaPedidoApi(id)
          .then((resposta) => {
            setPedidos(resposta.data);
          })
          .catch((erro) => console.log(erro));
          if(pedidos.length > 0){
            setTemRegistro(true);
          }
      }

      return (
        <div class="container">
          <table className="table">
            <tbody>
              <th>Id</th>
              <th>Pedido</th>
              <th>Quantidade de Produtos</th>
              {temRegistro && pedidos.map((pedido) => (
                <tr key={pedido.id}>
                  <td>{pedido.id}</td>
                  <td>{pedido.pedido}</td>
                  <td>{pedido.quantidade}</td>                  
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );

}