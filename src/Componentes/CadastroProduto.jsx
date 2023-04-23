import React, { useState } from "react";
import { registerImageApi } from "../Api/Service";
import './CadastroProduto.css';
import { MDBCardImage } from "mdb-react-ui-kit";

export default function CadastroProdutos(){
    
    const [image, setImage] = useState('');
    const [endImg,setEndImg] = useState('');
    const [status, setStatus] = useState('');

    const handleSubmitImage = async event => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('file',image);

        await registerImageApi(formData)
        .then((response)=> {
            console.log(response)
        }).catch((erro) =>{
            if(erro.response){
                console.log(erro.response);
            }else{
                console.log("erro: tente mais tarde!");
            }
        });
       
    }

    return (
        <div className="container">
                <h1>Upload</h1>
                <form onSubmit={handleSubmitImage}>                    
                    <label>Imagem:</label>
                     <input type="file" name="image" onChange={e=>setImage(e.target.files[0])}/><br/><br/>                     
                     {image ? "":<MDBCardImage src='./default.png' alt='imagem' position='top' />}<br/><br/>
                    <button type="submit">Salvar</button>
                </form>
        </div>
    )
}