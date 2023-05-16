import "./Rodape.css";

export default function Rodape() {
  return (
    <footer className="footer">
      <div className="principal">
        <div className="atendimento">
          <h5>Droneseta</h5>
          <p id="horario">Atendimento Online: <strong>24H</strong></p>
          <p>Fone Segunda à Sexta, das 8h às 18h.</p>
        </div>
        <div className="sobre">
          <h5>Sobre</h5>
         <p>DroneSena e-commerce de camisetas.</p>
          <h5 id="ajuda">Ajuda ou Dúvidas</h5>
          <a href="#">Contato:</a>
          <p>(47)9.9988-7700</p>
        </div>
        <div className="pagamento">
          <h5>Formas de Pagamento:</h5>
          <br></br>
          <div className="pagamento-card">
            <div>
              <img
                alt="visa"
                src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png"
              />
            </div>
            <br></br>
            <div>
              <img
                alt="mastercard"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/1200px-MasterCard_Logo.svg.png"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
