import "./Administrador.css";

export default function Administrador() {
  return (
    <div class="ls-box ls-board-box">
      <header class="ls-info-header">
        <h2 class="ls-title-3">VENDAS E ENVIOS EFETUADOS ALEMÃO DRONES</h2>

        <button class="btn"> Cadastrar Produto</button>

        <br></br>
        <p class="ls-float-right ls-float-none-xs ls-small-info">
          <strong>TOP 5 ITENS MAIS VENDIDOS:</strong>
        </p>
      </header>

      <div class="col">
            <div className="card">
              <img class="card-img-top" src="./img/camisaNirvana.jpg"></img>
              <div class="card-body">
                <h5>Camisa 01</h5>
            
              </div>
            </div>
          </div>



    </div>
  );
}
