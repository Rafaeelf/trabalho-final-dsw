import { useNavigate } from "react-router-dom";
import "./Administrador.css";
import { useEffect } from "react";
import { useState } from "react";
import { obterProdutoMaisVendido } from "../Api/Service";

export default function Administrador() {

  const navigate = useNavigate();
  const [produtos, setProdutos] = useState([]);
  const [temRegistro,setTemRegistro] = useState(false);
  useEffect(() => atualizarProdutos());

  function atualizarProdutos() {
    obterProdutoMaisVendido()
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

  function listarUsuarios(){
    navigate(`/users`);
  }

  function cadastrarProduto(){
    navigate(`/produtos/cadastro`);
  }

  function visualizarProduto(id) {
    navigate(`/produtoDetalhes/${id}`);
  }

  return (
    <div class="ls-box ls-board-box">
      <header class="ls-info-header">
        <h2 class="ls-title-3">VENDAS E ENVIOS EFETUADOS ALEMÃO DRONES</h2>

        <br></br>
        <p class="ls-float-right ls-float-none-xs ls-small-info">
          <strong>TOP 5 ITENS MAIS VENDIDOS:</strong>
        </p>
        <div class="row">
          {temRegistro && produtos.map((produto) => (
            <div class="col">
              <div className="card">
                <img class="card-img-top" src="./img/camisaNirvana.jpg"></img>

                <div class="card-body">
                  <h5>{produto.descricao}</h5>
                  <p class="card-text"> R$ {produto.preco} </p>
                  <button className="btn btn-success mb-3"  onClick={() => visualizarProduto(produto.id)}>
                    Ver +
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </header>

      <br></br>
      <div id="sending-stats" class="row">
        <div class="col-sm-6 col-md-4">
          <div class="ls-box">
            <div class="ls-box-head">
              <h6 class="ls-title-4"> <strong>CLIENTES</strong></h6>
            </div>
              <button class="btn" onClick={() => listarUsuarios()}>Listar clientes</button>
          </div>
        </div>

        <div class="col-sm-6 col-md-4">
          <div class="ls-box">
            <div class="ls-box-head">
              <h6 class="ls-title-4"><strong>CADASTRAR PRODUTOS</strong></h6>
            </div>
            <button class="btn" onClick={() => cadastrarProduto()}>Cadastrar Produtos</button>
          </div>
        </div>

        <div class="col-sm-6 col-md-4">
          <div class="ls-box ls-box">
            <h6 class="ls-title-4"><strong>ENTREGAS REALIZADAS</strong></h6>

            <button class="btn">Entregas realizadas</button>
          </div>

        </div>
      </div>
    </div>
  );
}
