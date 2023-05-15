import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { obterProdutoPedidoApi } from "../Api/Service";



export default function PedidoDetalhe(){

    const { id } = useParams();
    const [produtos, setProdutos] = useState([]);
    const [total, setTotal] = useState(null);
    const navigate = useNavigate();

    useEffect(() => atualizarPedidoProdutos(), [id]);

    function atualizarPedidoProdutos() {        
        obterProdutoPedidoApi(id)
        .then((resposta) => {
            console.log(resposta);
            setProdutos(resposta.data); 
        })
        .catch((erro) => console.log(erro));
        let value = 0;
        produtos.map((prod)=>(
            value = value + prod.total                
        ))  
        setTotal(value);
    }

    return (
        <div class="container">
            <table className="table">
                <th>Imagem</th>
                <th>Descricao</th>
                <th>Tamanho</th>
                <th>Quantidade</th>
                <th>Valor</th>
                <th>valor Total</th>
                <tbody>
                {produtos.map((produtoPed) => (
                    <tr key={produtoPed.id}>
                        <td><img class="card-img-top" src={"./img/"+produtoPed.produto.foto}/></td>
                        <td>{produtoPed.produto.descricao}</td>
                        <td>{produtoPed.produto.tamanho}</td>
                        <td>{produtoPed.quantidade}</td>
                        <td>{produtoPed.preco}</td>
                        <td>{produtoPed.total}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            <div>
                <p>Total: {total}</p>
            </div>
        </div>
    )


}