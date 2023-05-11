import { useParams } from "react-router-dom";
import { obterProdutoApi } from "../Api/Service";
import "./ProdutoDetalhes.css";
import React, { useEffect, useState } from "react";
import Card from "./Card";

export default function ProdutoDetalhes() {
  const { id } = useParams();
  const [descricao, setDescricao] = useState("");
  const [preco, setPreco] = useState("");
  const [qtde, setQuantidade] = useState("");
  const [tamanho, setTamanho] = useState("");
  const [foto, setFoto] = useState("");

  useEffect(() => obterProduto(), [id]);

  function obterProduto() {
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
  }
  return (
    <div className="container">
      <div class="row">
        <div class="col">
          <div className="card">
            <img class="card-img-top" src={foto} title="image" />
          </div>
        </div>
        <div class="col">
          <div className="card-right">
            <h5 className="item-title">{descricao}</h5>
            <p className="item-price">
              <b>R${preco}</b>
            </p>
            <p className="item-desc"></p>
            <br></br>
            <div>
              <p className="item-size-text">TAMANHO</p>
              <p className="item-size-star">*: {tamanho}</p>
            </div>

            <br></br>

            <div className="btnComprar">
              <a href="#" class="btn btn-white btn-animate">
                Adicionar ao Carrinho
              </a>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <div class="row">
        <h1>Sucesso de venda</h1>
        <Card></Card>
      </div>
    </div>
  );
}
