import "./Administrador.css";

export default function Administrador() {
  return (
    <div class="ls-box ls-board-box">
      <header class="ls-info-header">
        <h2 class="ls-title-3">VENDAS E ENVIOS EFETUADOS ALEMÃO DRONES</h2>

        <br></br>
        <p class="ls-float-right ls-float-none-xs ls-small-info">
          <strong>TOP 5 ITENS MAIS VENDIDOS:</strong>
        </p>

        <div class="col">
          <div className="card">
            <img class="card-img-top" src="./img/camisaNirvana.jpg"></img>
            <div class="card-body">
              <h5>Camisa 01</h5>
            </div>
          </div>
        </div>
      </header>

      <br></br>
      <div id="sending-stats" class="row">
        <div class="col-sm-6 col-md-4">
          <div class="ls-box">
            <div class="ls-box-head">
              <h6 class="ls-title-4"> <strong>CLIENTES</strong></h6>
            </div>
              <button class="btn">Listar clientes</button>
          </div>
        </div>

        <div class="col-sm-6 col-md-4">
          <div class="ls-box">
            <div class="ls-box-head">
              <h6 class="ls-title-4"><strong>CADASTRAR PRODUTOS</strong></h6>
            </div>
            <button class="btn">Cadastrar Produtos</button>
          </div>
        </div>

        <div class="col-sm-6 col-md-4">
          <div class="ls-box ls-box">
            <h6 class="ls-title-4"><strong>ENTREGAS REALIZADAS</strong></h6>

            <button class="btn">Entregas realizadas</button>
          </div>

        </div>
      </div>
    </div>
  );
}
