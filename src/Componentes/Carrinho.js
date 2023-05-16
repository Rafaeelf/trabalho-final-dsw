import { useState } from "react";
import { aumentaQuantidadeCarrinhoApi, criaPedidoApi, diminuiQuantidadeCarrinhoApi, obterCarrinhoUserApi, removeItemCarrinhoApi } from "../Api/Service";
import { useAutCtx } from "../autCtx";
import "./Carrinho.css";
import React, { useEffect } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Carrinho() {

  const autCtx = useAutCtx();
  const usuario = autCtx.usuario;
  const [produtos, setProdutos] = useState([]);
  const [total,setTotal] = useState(null);
  const [taxa,setTaxa] = useState(null);
  const [temRegistro,setTemRegistro] = useState(false);
  const navigate = useNavigate();

  useEffect(() => atualizarCarrinho());

  function atualizarCarrinho() {        
    obterCarrinhoUserApi(usuario)
    .then((resposta)=>{
      setProdutos(resposta.data);
    })
    .catch();
    if(produtos.length > 0){
      var cont = 0;
      var valTaxa = 0;
      produtos.map((produtoPed) => (
          cont = cont + (produtoPed.quantidade * produtoPed.produto.preco),
          valTaxa ++
      ));
      setTotal(cont);
      setTaxa(valTaxa);
      setTemRegistro(true);
    }else {
      setTemRegistro(false);
    }
    
  }

  function removeItemCarrinho(id){
    removeItemCarrinhoApi(id);
  }

  function diminuiQuantidadeCarrinho(id){
    diminuiQuantidadeCarrinhoApi(id);
  }
  
  function aumentaQuantidadeCarrinho(id){
    aumentaQuantidadeCarrinhoApi(id);
  }

  const handleSubmitImage = async (event) => {
    event.preventDefault();

    const pedido = {
      usuario: usuario,
      dataPedido: new Date().toLocaleString()
    }
    await criaPedidoApi(pedido)
    .then((response) => {
      navigate(`/inicio`);
    })
    .catch((erro)=> {
      if (erro.response) {
        console.log(erro.response);
      } else {
        console.log("erro: tente mais tarde!");
      }
    });
  };

  return (
    <body>
      <div class="container">
        <div class="cart-container">
          <header>
            <h3>Carrinho de Compras</h3>
          </header>
          <div class="cart-body">
            <table className="table">
              {temRegistro && (produtos.map((produtoPed) => (
                <tr key={produtoPed.id}>
                  <td>
                    <div class="cart-item">
                      <div class="cart-row">                        
                        <div class="cart-row-cell desc">
                          <h5>{produtoPed.produto.descricao}</h5>
                          <p>Tamanho: {produtoPed.produto.tamanho}</p>
                        </div>
                        <div class="cart-row-cell quant">
                          <ul>
                            <li>
                              <button onClick={() => diminuiQuantidadeCarrinho(produtoPed.id)}>-</button>                              
                            </li>
                            <li>{produtoPed.quantidade}</li>
                            <li>
                              <button onClick={() => aumentaQuantidadeCarrinho(produtoPed.id)}>+</button>
                            </li>
                          </ul>
                        </div>
                        <div class="cart-row-cell amount">
                          <p>R${produtoPed.produto.preco * produtoPed.quantidade}</p>
                        </div>
                        <div class="cart-row-cell pic">
                          <button className="btn btn-danger mb-3" onClick={() => removeItemCarrinho(produtoPed.id)}><FaTrashAlt/></button>
                          <span></span>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              )))}
              {!temRegistro && (
                <p>Carrinho Vazio!</p>
              )}
            </table>
          </div>

          <footer>
            <div class="totals">
              <p class="total-label">Subtotal</p>
              <p class="total-amount">R${total}</p>
            </div>

            <div class="totals">
              <p class="total-label">Taxa</p>
              <p class="total-amount">R${taxa}</p>
            </div>
            <div class="totals">
              <p class="total-label">Total</p>
              <p class="total-amount">R${total + taxa}</p>
            </div>
            <div className="btnFinalizar">
              <button class="btn btn-white" onClick={handleSubmitImage}>Finalizar</button>
            </div>
          </footer>
        </div>
      </div>
    </body>
  );
}
