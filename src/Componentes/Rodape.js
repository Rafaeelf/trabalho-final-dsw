import './Rodape.css';

export default function Rodape(){
    return (
        <footer className="footer">
            <div className='principal'>
                <div className="atendimento">
                    <h5>
                        Droneseta
                    </h5>
                    <p id='horario'>
                        Atendimento Online:
                    </p>
                    <p>
                        De Segunda à Sexta, das 8h às 18h.
                    </p>
                </div>
                <div className="sobre">
                    <h5>
                        Sobre
                    </h5>
                    <a href='#'>
                        Informações sobre a Empresa.
                    </a>
                    <h5 id='ajuda'>
                        Ajuda
                    </h5>
                    <a href='#'>
                        Contato:
                    </a>
                </div>
                <div className="pagamento">
                    <h5>
                        Formas de Pagamento:
                    </h5>
                </div>
            </div>           
        </footer>
    )
}