import "./Administrador.css";

export default function Administrador() {
  return (
    <div class="ls-box ls-board-box">
      <header class="ls-info-header">
        <h2 class="ls-title-3">VENDAS E ENVIOS EFETUADOS</h2>
        <p class="ls-float-right ls-float-none-xs ls-small-info">
          Quantidade válida até <strong>10/05/2023</strong>
        </p>
      </header>
      <div id="sending-stats" class="row">
        <div class="col-sm-6 col-md-3">
          <div class="ls-box">
            <div class="ls-box-head">
              <h6 class="ls-title-4">VENDAS </h6>
            </div>
            <div class="ls-box-body">
              <strong>100.000</strong>
              <br></br>
              <small> envios por mês</small>
            </div>
            <div class="ls-box-footer"></div>
          </div>
        </div>
        <div class="col-sm-6 col-md-3">
          <div class="ls-box">
            <div class="ls-box-head">
              <h6 class="ls-title-4">DADOS</h6>
            </div>
            <div class="ls-box-body">
              <strong class="ls-ico-bars"></strong>
              <small>Aqui você verifica seus dados</small>
            </div>
            <div class="ls-box-footer"></div>
          </div>
        </div>
        <div class="col-sm-6 col-md-3">
          <div class="ls-box ls-box-centered">
            <h6 class="ls-title-4">DISTRIBUIÇÃO POR DIA</h6>
            <strong>40</strong>
          </div>
        </div>
        <div class="col-sm-6 col-md-3">
          <div class="ls-box">
            <div class="ls-box-head">
              <h6 class="ls-title-4">DATA</h6>
            </div>
            <div class="ls-box-body">
              <div class="col-xs-6">
                <strong>26</strong>
                <small>dia</small>
              </div>
              <div class="col-xs-6">
                <strong>10</strong>
                <small>mês</small>
              </div>
            </div>
            <a href="/produtos/cadastro">
              Cadastrar Produto
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
