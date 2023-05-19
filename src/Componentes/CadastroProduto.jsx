import React, { useState } from "react";
import { registerImageApi, registerProdutoApi } from "../Api/Service";
import "./CadastroProduto.css";
import { MDBCard } from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";
import { Col, Form, FormGroup, Row } from "react-bootstrap";

function CadastroProdutos() {
  const navigate = useNavigate();
  const [image, setImage] = useState("");
  const [endImg, setEndImage] = useState('./img/default.png');
  const [descricao, setDescricao] = useState("");
  const [valor, setValor] = useState("");
  const [qtde, setQuantidade] = useState("");
  const [tamanho, setTamanho] = useState("");
  const [info, setInfo] = useState("");

  function setImagemDefault(e) {
    setImage(e.target.files[0]);
    setEndImage(e.target.files[0].name);
  }

  function handlerDescricao(event) {
    setDescricao(event.target.value);
  }

  function handlerValor(event) {
    setValor(event.target.value);
  }

  function handlerTamanho(event) {
    console.log(event.target.id);
    setTamanho(event.target.id);
  }

  function handlerQuantidade(event) {
    setQuantidade(event.target.value);
  }

  function handlerInfo(event) {
    setInfo(event.target.value);
  }

  const handleSubmitImage = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("file", image);

    await registerImageApi(formData)
      .then((response) => setEndImage(response.data))
      .catch((erro) => {
        if (erro.response) {
          console.log(erro.response);
        } else {
          console.log("erro: tente mais tarde!");
        }
      });

    const produto = {
      descricao: descricao,
      foto: endImg.toString(),
      tamanho: tamanho,
      preco: valor,
      quantidade: qtde,
      informacao:info
    };

    registerProdutoApi(produto);
    navigate(`/administrador`);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmitImage}>
      <Row className="mb-2">
        <FormGroup as={Col} controlId="formGridImage">
          <Form.Label>Imagem</Form.Label>
          <Form.Control
            type="file"
            name="image"
            onChange={(e) => setImagemDefault(e)}
          />
        </FormGroup>
        <FormGroup as={Col} controlId="formGridPreview">
          <MDBCard>
            {image && (
              <img class="card-img-top" src={URL.createObjectURL(image)}></img>           
            )}
            {!image && (
              <img class="card-img-top" src={endImg}></img>                
            )}
          </MDBCard>
        </FormGroup>
      </Row>
      <Row>
        <FormGroup as={Col} controlId="formGridDescricao">
          <Form.Label>Descrição</Form.Label>
          <Form.Control
            type="text"
            id="descricao"
            value={descricao}
            onChange={handlerDescricao}
          />
        </FormGroup>
        <FormGroup as={Col} controlId="formGridValor">
          <Form.Label>Valor</Form.Label>
          <Form.Control type="number" value={valor} onChange={handlerValor} />
        </FormGroup>
        <FormGroup as={Col} controlId="formGridQuantidade">
          <Form.Label>Quantidade</Form.Label>
          <Form.Control
            type="number"
            value={qtde}
            onChange={handlerQuantidade}
          />
        </FormGroup>
      </Row> 
      <Row>
        <Form.Label>Informações</Form.Label>
        <div class="form-floating">
          <textarea class="form-control" id="info" value={info} onChange={handlerInfo}></textarea>
        </div>
      </Row>
      <Row>
        <Form.Label>Tamanho</Form.Label>
        <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
          <input type="radio" class="btn-check" name="options" id="P" autocomplete="off" onClick={handlerTamanho}/>
          <label class="btn btn-outline-primary" for="P">P</label>
          <input type="radio" class="btn-check" name="options" id="M" autocomplete="off" onClick={handlerTamanho}/>
          <label class="btn btn-outline-primary" for="M">M</label>
          <input type="radio" class="btn-check" name="options" id="G" autocomplete="off" onClick={handlerTamanho}/>
          <label class="btn btn-outline-primary" for="G">G</label>
          <input type="radio" class="btn-check" name="options" id="GG" autocomplete="off" onClick={handlerTamanho}/>
          <label class="btn btn-outline-primary" for="GG">GG</label>
        </div>
      </Row> 
      <Row>
        <Form.Label></Form.Label>
        <Form.Label></Form.Label>
        <div class="d-grid gap-2 col-6 mx-auto">
          <button class="btn btn-primary" type="submit">Cadastrar</button>
        </div>  
      </Row>
      </form>
    </div>
  );
}

export default CadastroProdutos;
