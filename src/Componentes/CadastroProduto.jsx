import React, { useState } from "react";
import { registerImageApi, registerProdutoApi } from "../Api/Service";
import './CadastroProduto.css';
import {MDBCard, MDBCardImage} from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";

function CadastroProdutos() {
    const navigate = navigate();
    const [image, setImage] = useState("");
    const [endImg, setEndImage] = useState("./default.png");
    const [descricao, setDescricao] = useState("");
    const [valor, setValor] = useState("");
    const [qtde, setQuantidade] = useState("");
    const [tamanho, setTamanho] = useState("");

    function handlerDescricao(event) {
        setDescricao(event.target.value);
    }

    function handlerValor(event) {
        setValor(event.target.value);
    }

    function handlerTamanho(event) {
        setTamanho(event.target.id);
    }

    function handlerQuantidade(event) {
        setQuantidade(event.target.value);
    }

    const handleSubmitImage = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append("file", image);

        await registerImageApi(formData)
            .then((response) => {
                setEndImage(response.data);
            })
            .catch((erro) => {
                if (erro.response) {
                    console.log(erro.response);
                } else {
                    console.log("erro: tente mais tarde!");
                }
            });

        const produto = {
            descricao: descricao,
            foto: endImg,
            tamanho: tamanho,
            preco: valor,
            quantidade: qtde,
        };

        registerProdutoApi(produto);
        navigate(`/inicio`);
    };

    return (
        <div className="container">
            <h1>Upload Arquivos</h1>
            <form onSubmit={handleSubmitImage}>
                <label>Imagem:</label>
                <input
                    type="file"
                    name="image"
                    onChange={(e) => setImage(e.target.files[0])}
                />
                <br />
                <br />
                <MDBCard>
                    {image ? (
                        <MDBCardImage
                            src={URL.createObjectURL(image)}
                            position="top"
                            alt="..."
                        />
                    ) : (
                        <MDBCardImage src={endImg} position="top" alt="..." />
                    )}
                </MDBCard>
                <label for="descricao">Descrição: </label>
                <input
                    type="text"
                    id="descricao"
                    value={descricao}
                    onChange={handlerDescricao}
                />
                <br />

                <label>Valor: </label>
                <input type="number" value={valor} onChange={handlerValor} />
                <br />
                <label>Quantidade: </label>
                <input type="number" value={qtde} onChange={handlerQuantidade} />
                <br />
                <label>Tamanho:</label>
                <br />
                <input
                    type="radio"
                    class="btn-check"
                    name="options"
                    id="P"
                    autocomplete="off"
                    onClick={handlerTamanho}
                />
                <label class="btn btn-outline-primary" for="P">
                    P
                </label>
                <input
                    type="radio"
                    class="btn-check"
                    name="options"
                    id="M"
                    autocomplete="off"
                    onChange={handlerTamanho}
                />
                <label class="btn btn-outline-primary" for="M">
                    M
                </label>
                <input
                    type="radio"
                    class="btn-check"
                    name="options"
                    id="G"
                    autocomplete="off"
                    onChange={handlerTamanho}
                />
                <label class="btn btn-outline-primary" for="G">
                    G
                </label>
                <input
                    type="radio"
                    class="btn-check"
                    name="options"
                    id="GG"
                    autocomplete="off"
                    onChange={handlerTamanho}
                />
                <label class="btn btn-outline-primary" for="GG">
                    GG
                </label>

                <button type="submit">Salvar</button>
            </form>
        </div>
    );
}

export default CadastroProdutos;
