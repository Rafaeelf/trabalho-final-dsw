import { useState } from "react";
import { aumentaQuantidadeCarrinhoApi, criaPedidoApi, diminuiQuantidadeCarrinhoApi, obterCarrinhoUserApi, obterEnderecoEntrega, obterUserIdApi, removeItemCarrinhoApi } from "../Api/Service";
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
  const [nome,setNome] = useState('');
  const [cartao,setCartao] = useState('');
  const [temRegistro,setTemRegistro] = useState(false);
  const navigate = useNavigate();
  const [pagamento, setPagamento] = useState('Crédito');  
  const [ruaEnt, setRuaEnt] = useState('');
  const [numEnt, setNumEnt] = useState('');
  const [baiEnt, setBaiEnt] = useState('');
  const [cidEnt, setCidEnt] = useState('');
  const [cepEnt, setCepEnt] = useState('');
  const [estEnt, setEstEnt] = useState('');
  const [paiEnt, setPaiEnt] = useState('');
  const [compEnt, setCompEnt] = useState('');

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
      obterUserIdApi(usuario)
      .then((resposta)=>{
        setNome(resposta.data.nome);
        setCartao(resposta.data.cartao);
      })
      .catch((erro)=>console.log(erro.data))
      .finally()

      obterEnderecoEntrega(usuario)
      .then((resposta)=>{
        setRuaEnt(resposta.data.rua);
        setNumEnt(resposta.data.numero);
        setBaiEnt(resposta.data.bairro);
        setCidEnt(resposta.data.cidade);
        setCepEnt(resposta.data.cep);
        setEstEnt(resposta.data.estado);
        setPaiEnt(resposta.data.pais);
        setCompEnt(resposta.data.complemento)
      })

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

  const handleSubmitPedido = async (event) => {
    event.preventDefault();

    if(pagamento === "0"){
      alert("Informe uma forma de Pagamento!");
    } else {
      const pedido = {
        usuario: usuario,
        pagamento: pagamento
      }
      await criaPedidoApi(pedido)
      .then((response) => {
        navigate(`/inicio`);
      })
      .catch((erro)=> {
        alert("Não existe produtos no carrinho!");      
      });
    }
  };

  const handleChange = (event) => {
    setPagamento(event.target.value)
  }

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
                  <td><h5>{produtoPed.produto.descricao}</h5></td>
                  <td><p>Tamanho: {produtoPed.produto.tamanho}</p></td>
                  <td>
                    <div class="cart-row-cell quant">
                      <ul>
                        <li><button onClick={() => diminuiQuantidadeCarrinho(produtoPed.id)}>-</button></li>
                        <li>{produtoPed.quantidade}</li>
                        <li><button onClick={() => aumentaQuantidadeCarrinho(produtoPed.id)}>+</button></li>
                      </ul>
                    </div>
                  </td>
                  <td>
                    <div class="cart-amount">
                      <p>R${parseFloat((Math.round ((produtoPed.produto.preco * produtoPed.quantidade) * 100) / 100).toFixed(2))}</p>
                    </div>
                  </td>
                  <td>
                    <div class="cart-cell ">
                      <button className="btn" onClick={() => removeItemCarrinho(produtoPed.id)}><FaTrashAlt/></button>
                      <span></span>
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
              <p class="total-amount">R${parseFloat((Math.round ((total) * 100) / 100).toFixed(2))}</p>
            </div>

            <div class="totals">
              <p class="total-label">Taxa de entrega</p>
              <p class="total-amount">R${parseFloat((Math.round ((taxa) * 100) / 100).toFixed(2))}</p>
            </div>
            <div class="totals">
              <p class="total-label">Total</p>
              <p class="total-amount">R${parseFloat((Math.round ((total + taxa) * 100) / 100).toFixed(2))}</p>
            </div>
            
              {temRegistro && (
                <div>
                  <div>
                    <p>Informações de Pagamento</p>
                  </div>
                  <div class="totals">
                    <p class="total-label">Nome:</p>
                    <p class="total-amount">{nome}</p>
                  </div>
                  <div class="totals">
                    <p class="total-label">Número do Cartão:</p>
                    <p class="total-amount">{cartao}</p>
                  </div>
                  <div class="totals">
                    <p class="total-label">Forma de Pagamento:</p>                    
                    <select value={pagamento} onChange={handleChange}>
                      <option value ="0" selected>Selecione...</option>
                      <option value="Crédito">Crédito</option>
                      <option value="Débito">Débito</option>
                      <option value="Boleto">Boleto</option>
                    </select>
                  </div>
                  <div>
                    <p>Endereço de Entrega</p>
                  </div>
                  <div class="totals">
                    <p class="total-label">Rua:</p>
                    <p class="total-amount">{ruaEnt}</p>
                  </div>
                  <div class="totals">
                    <p class="total-label">Número:</p>
                    <p class="total-amount">{numEnt}</p>
                  </div>
                  <div class="totals">
                    <p class="total-label">Bairro:</p>
                    <p class="total-amount">{baiEnt}</p>
                  </div>
                  <div class="totals">
                    <p class="total-label">Cidade:</p>
                    <p class="total-amount">{cidEnt}</p>
                  </div>
                  <div class="totals">
                    <p class="total-label">CEP:</p>
                    <p class="total-amount">{cepEnt}</p>
                  </div>
                  <div class="totals">
                    <p class="total-label">Estado:</p>
                    <p class="total-amount">{estEnt}</p>
                  </div>
                  <div class="totals">
                    <p class="total-label">País:</p>
                    <p class="total-amount">{paiEnt}</p>
                  </div>
                  <div class="totals">
                    <p class="total-label">Complemento:</p>
                    <p class="total-amount">{compEnt}</p>
                  </div>
                </div>
              )}
            <div className="btnFinalizar">
              <button class="btn" onClick={handleSubmitPedido}>Finalizar</button>
            </div>
          </footer>
        </div>
      </div>
    </body>
  );
}
