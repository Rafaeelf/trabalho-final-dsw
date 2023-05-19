import { useNavigate, useParams } from "react-router-dom";
import { adicionarProdutoCarrinhoApi, obterProdutoApi } from "../Api/Service";
import "./ProdutoDetalhes.css";
import React, { useEffect, useState } from "react";
import Card from "./Card";
import { useAutCtx } from "../autCtx";
import { Row, Form, FormGroup, Col } from "react-bootstrap";
import ToastInfo from "./ToastInfo";
import { Toast } from "bootstrap";

export default function ProdutoDetalhes() {
  const autCtx = useAutCtx();
  const usuario = autCtx.usuario;
  const navigate = useNavigate();
  const { id } = useParams();
  const [descricao, setDescricao] = useState("");
  const [preco, setPreco] = useState("");
  const [qtde, setQuantidade] = useState("");
  const [tamanho, setTamanho] = useState("");
  const [foto, setFoto] = useState("");
  const [informacao, setInformacao] = useState("");
  const [venda, setQtdeVenda] = useState(0);
  const [erro,setErro] = useState(false);

  useEffect(() => obterProduto(id));

  function obterProduto(id) {
    console.log(id);
    obterProdutoApi(id)
      .then((resposta) => carregaDados(resposta))
      .catch((erro) => console.log(erro));
  }

  function carregaDados(resposta) {
    setDescricao(resposta.data.descricao);
    setPreco(resposta.data.preco);
    setFoto("./img/" + resposta.data.foto);
    setQuantidade(resposta.data.quantidade);
    setTamanho(resposta.data.tamanho);
    setInformacao(resposta.data.informacao);
  }

  function handlerQuantidade(event) {
    setQtdeVenda(event.target.value);
  }

  const handleSubmitCarrinho = async (event) => {
    event.preventDefault();

    if (autCtx.autenticado) {
      setErro(false);
      if(venda > 0){
        const carrinho = {
          usuario: usuario,
          produto: id,
          quantidade: venda,
        };
        await adicionarProdutoCarrinhoApi(carrinho)
          .then((response) => {
            navigate(`/inicio`);
          })
          .catch((erro) => {
            if (erro.response) {
              console.log(erro.response);
            } else {
              console.log("erro: tente mais tarde!");
            }
          });
      } else {
        const toastLiveExample = document.getElementById('liveToast');
        const toast = new Toast(toastLiveExample);
        toast.show();
      }
      
    } else {
      setErro(true);
      const toastLiveExample = document.getElementById('liveToast');
      const toast = new Toast(toastLiveExample);
      toast.show();
    }
  };

  return (
    <div className="container">
      <div class="row">
        <Form>
          <Row>
            <FormGroup as={Col} controlId="formGridImage">
              <div className="card">
                <img class="card-img-top" src={foto} alt="imagem" />
              </div>
            </FormGroup>
            <FormGroup as={Col} controlId="formGridPreview">
              <div className="card-right">
                <h3 className="item-title">{descricao}</h3>
                <p className="item-size"><h5>Tamanho : {tamanho}</h5></p>
                <p className="item-price"><h5>R${preco}</h5></p>               
                <p className="item-desc"><h5>Estoque: {qtde}</h5></p>
                <FormGroup as={Col} controlId="formGridQuantidade">
                  <Form.Control placeholder="Quantidade" type="number" value={venda} onChange={handlerQuantidade}/>
                </FormGroup>
                <br/>
                <div className="btnComprar">
                  <button class="btn btn-primary" onClick={handleSubmitCarrinho}>Adicionar ao Carrinho</button>
                </div>
              </div>
            </FormGroup>
          </Row>
          <Row>
            <div class="form-floating">
              <br/>
              <textarea class="form-control" disabled value={informacao}></textarea>
            </div>  
          </Row>
        </Form>
        <ToastInfo texto={erro ? "Efetue o Login para incluir produtos no carrinho!" : "Informe uma quantidade!!!"}/>
      </div>
      <br/>
      <div class="row">
        <p><h2>Sucesso de venda</h2></p>
        <Card></Card>
      </div>      
    </div>
  );
}
