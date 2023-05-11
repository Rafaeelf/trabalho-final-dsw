import { useParams } from "react-router-dom";
import { obterProdutoApi } from "../Api/Service";
import "./ProdutoDetalhes.css";
import React, { useEffect, useState } from 'react';

export default function ProdutoDetalhes() {

  const {id} = useParams();
  const [descricao, setDescricao]= useState('');
  const [preco, setPreco]= useState('');
  const [qtde, setQuantidade]= useState('');
  const [tamanho, setTamanho]= useState('');
  const [foto, setFoto]= useState('');

  useEffect(
    () =>obterProduto(),[id]
  )

  function obterProduto(){
    console.log(id)
    obterProdutoApi(id)
    .then((resposta)=>carregaDados(resposta))
    .catch((erro)=>console.log(erro));
}

function carregaDados(resposta){
  setDescricao(resposta.data.descricao);
  setPreco(resposta.data.preco);
  setFoto(resposta.data.foto);
  setQuantidade(resposta.data.quantidade);
  setTamanho(resposta.data.tamanho);
}
  return (
    <div className="container">
      <div class="row">
        <div class="col">
          <div className="card">
            <img class="card-img-top" src="./img/camisaNirvana.jpg"></img>           
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
              <p className="item-size-star">*</p>
            </div>
            <button className="btn-size">P</button>
            <button className="btn-size btn-middle">M</button>
            <button className="btn-size">G</button>
            <button className="btn-size btn-middle">GG</button>
            <br></br>

            <div className="btnComprar">
              <a href="#" class="btn btn-white btn-animate">
                Adicionar ao Carrinho
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
