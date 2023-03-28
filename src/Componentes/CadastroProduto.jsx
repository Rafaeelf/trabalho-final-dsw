
export default function CadastroProdutos(){

    const gradleFileSelect = (event) =>{
        setSelectionFile(event.target.files[0])
    }

    const handleSubmit =async (event) =>{
        event.preventDefault();
        const FormData = new FormData();
        FormData.append("file", selectedFile);
    }

    return (
        <div className="container">
            <h1>Upload de arquivos</h1>
            <div>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <label>Arquivo: </label>
                        <input type="file" onChange={handleFileSelect}></input>
                    </fieldset>
                    <input type="submit" value="Enviar"></input>
                </form>
            </div>
        </div>
    )
}