import { useState } from "react";
import "./Card.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { obterSucessoProduto } from "../Api/Service";

export default function Card() {

  const [produtos, setProdutos] = useState([]);
  const navigate = useNavigate();
  const [temRegistro,setTemRegistro] = useState(false);

  useEffect(() => atualizarProdutos(),[produtos]);

  function atualizarProdutos() {
    obterSucessoProduto()
      .then((resposta) => {
        setProdutos(resposta.data);
      })

      .catch((erro) => console.log(erro));
      if(produtos.length > 0){
        setTemRegistro(true);
      } else {
        setTemRegistro(false);
      }
  }

  function visualizarProduto(id) {
    console.log(id);
    navigate(`/produtoDetalhes/${id}`);
  }

  return (
    <div className="container">
      <div class="row">
        {temRegistro && produtos.map((produto) => (
          <div class="col">
            <div className="card">
              <img class="card-img" src={"./img/"+produto.foto} alt="imagem"/>
              <div class="card-body">
                <h5>{produto.descricao}</h5>
                <h5>R$ {produto.preco} </h5>
                <h5>Tamanho: {produto.tamanho} </h5>
                <button className="btn btn-success"  onClick={() => visualizarProduto(produto.id)}>Ver +</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
