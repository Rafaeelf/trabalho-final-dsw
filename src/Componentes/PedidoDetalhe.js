import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { obterProdutoPedidoApi } from "../Api/Service";



export default function PedidoDetalhe(){

    const { id } = useParams();
    const [produtos, setProdutos] = useState([]);
    const [total, setTotal] = useState('');
    let valor = 0;

    useEffect(() => atualizarPedidoProdutos(id));

    function atualizarPedidoProdutos(id) {        
        obterProdutoPedidoApi(id)
        .then((resposta) => {
            setProdutos(resposta.data); 
            calculaTotal();
        })
        .catch((erro) => console.log(erro));
        
    }

    function calculaTotal (){
        produtos.map((prod)=>(
            valor += prod.total
        )) 
        setTotal(valor);
    }

    return (
        <div class="container">
            <table className="table">
                <th>Imagem</th>
                <th>Descrição</th>
                <th>Tamanho</th>
                <th>Quantidade</th>
                <th>Valor</th>
                <th>Valor Total</th>
                <tbody>
                {produtos.map((produtoPed) => (
                    <tr key={produtoPed.id}>
                        <td><img class="card-img-top" src={"./img/"+produtoPed.produto.foto} alt="imagem"/></td>
                        <td>{produtoPed.produto.descricao}</td>
                        <td>{produtoPed.produto.tamanho}</td>
                        <td>{produtoPed.quantidade}</td>
                        <td>R${parseFloat((Math.round ((produtoPed.preco) * 100) / 100).toFixed(2))}</td>
                        <td>R${parseFloat((Math.round ((produtoPed.total) * 100) / 100).toFixed(2))}</td>
                    </tr>
                ))}
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>R$ {parseFloat((Math.round ((total) * 100) / 100).toFixed(2))}</td>
                </tr>
                </tbody>
            </table>
            
        </div>
    )


}