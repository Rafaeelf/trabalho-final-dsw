import "./ProdutoDetalhes.css";

export default function ProdutoDetalhes() {
  return (
    <div className="container">
      <div class="row">
        <div class="col">
          <div className="card-image">
            <img
              src={"./img/camisaNirvana.jpg"}
              style={{ width: "60%", height: "100%" }}
            />
          </div>
        </div>

        <div class="col">
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

            <div className="btnComprar">
              <a href="#" class="btn btn-white btn-animate">
                Comprar
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
