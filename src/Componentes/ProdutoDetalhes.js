import "./ProdutoDetalhes.css";

export default function ProdutoDetalhes() {
  return (
    <div className="container">
      <div class="row">
        <div className="card-image">
          <img
            src={"./img/camisaNirvana.jpg"}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div className="card-right">
          <h5 className="item-title">Camiseta do Nirvana Preta</h5>
          <p className="item-price">
            <b>R$14,00</b>
          </p>
          <p className="item-desc"></p>
          <br></br>
          <div>
            <p className="item-size-text">TAMANHO</p>
            <p className="item-size-star">*</p>
          </div>
          <button className="btn-size">P</button>
          <button className="btn-size btn-middle">M</button>
          <button className="btn-size">G</button>
          <button className="btn-size btn-middle">GG</button>
          <br></br>

          <button className="btn btn-primary">
            <a href="#" class="btn btn-primary">
              Comprar
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
