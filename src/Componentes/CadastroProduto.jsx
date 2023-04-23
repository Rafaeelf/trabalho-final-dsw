import { useState } from "react";

export default function CadastroProdutos(){

    const [descricao, setDescricao] = useState('');
    const [valor, setValor] = useState('');
    const [tamanhoP, setTamanhoP] = useState('');
    const [tamanhoM, setTamanhoM] = useState('');
    const [tamanhoG, setTamanhoG] = useState('');
    const [tamanhoGG, setTamanhoGG] = useState('');
    const [fileCamiseta, setSelectionFileCamiseta] = useState('');

    function handlerDescricao(event){
        setDescricao(event.target.value);
    }

    function handlerValor(event){
        setValor(event.target.value);
    }
    
    function handlerTamanhoP(event){
        setTamanhoP(event.target.value);
    }

    function handlerTamanhoM(event){
        setTamanhoM(event.target.value);
    }

    function handlerTamanhoG(event){
        setTamanhoG(event.target.value);
    }
    
    function handlerTamanhoGG(event){
        setTamanhoGG(event.target.value);
    }

    const handleFileSelect = (event) =>{
        console.log(event.target.files[0]);
        setSelectionFileCamiseta(event.target.files[0])
    }

    const handleSubmit =async (event) =>{
        console.log(event.target.file);
        event.preventDefault();
        const FormData = new FormData();
        //FormData.append("file", selectedFile);
    }

    return (
        <div className="container">
            <div>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                    <form>
                        <div class="form-group">
                            <div className="card">
                                <img class="card-img-top" src = "./img/camisaTeste.png"></img>
                            </div>
                            
                            <input type="file" class="form-control-file" id="exampleFormControlFile1" onChange={handleFileSelect}/><br/>

                            <label for="descricao">Descrição: </label>
                            <input type="text" id="descricao" value={descricao} onChange={handlerDescricao}/><br/>
                            
                            <label>Valor: </label>
                            <input type="number" value={valor} onChange={handlerValor}/><br/>
                            <label>Tamanho:</label><br/>
                            <input type="radio" class="btn-check" name="options" id="option1" autocomplete="off" value={tamanhoP} onChange={handlerTamanhoP}/>
                            <label class="btn btn-outline-primary" for="option1">P</label>
                            <input type="radio" class="btn-check" name="options" id="option2" autocomplete="off" value={tamanhoM} onChange={handlerTamanhoM}/>
                            <label class="btn btn-outline-primary" for="option2">M</label>
                            <input type="radio" class="btn-check" name="options" id="option3" autocomplete="off" value={tamanhoG} onChange={handlerTamanhoG}/>
                            <label class="btn btn-outline-primary" for="option3">G</label>
                            <input type="radio" class="btn-check" name="options" id="option4" autocomplete="off" value={tamanhoGG} onChange={handlerTamanhoGG}/>
                            <label class="btn btn-outline-primary" for="option4">GG</label>
                        </div>
                    </form>
                    </fieldset>
                        
                    <input type="submit" value="Enviar"/>
                </form>
            </div>

        </div>
    )
}