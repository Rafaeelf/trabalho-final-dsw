import { useEffect, useState } from "react";
import "./Produtos.css";
import { useNavigate } from "react-router-dom";
import { obterProdutosApi } from "../Api/Service";

export default function Produtos() {
  const [produtos, setProdutos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => atualizarProdutos());

  function atualizarProdutos() {
    obterProdutosApi()
      .then((resposta) => {
        setProdutos(resposta.data);
      })

      .catch((erro) => console.log(erro));
  }

  function visualizarTarefa(id) {
    console.log(id);
    navigate(`/produtoDetalhes/${id}`);
  }

  return (
    <div class="container">
      <table className="table">
        
        <tbody>
          {produtos.map((produto) => (
            <tr key={produto.id}>
              <td><img class="card-img-top" src={"./img/"+produto.foto}/></td>
              <td>{produto.descricao}</td>
              <td>{produto.tamanho}</td>
              <td>{produto.preço}</td>
              <td>
                <button class="btn btn-success mb-3" onClick={() => visualizarTarefa(produto.id)}> Ver + </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
