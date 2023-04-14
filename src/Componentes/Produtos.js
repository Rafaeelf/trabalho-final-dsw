import './Produtos.css';
import { Link } from "react-router-dom";

export default function Produtos() {

  return(

    <div class="container">
      <div class="row">

          <div class="col">
            <div className="card">
              <img class="card-img-top" src = "./img/camisaNirvana.jpg"></img>
                <div class="card-body">
                        <h5>Camisa Nirvana</h5>
                        <p class="card-text"> R$ 99,90 </p>
                        <Link className="nav-link" to="/produtoDetalhes">
                          <a href="#" class="btn btn-primary">Comprar</a>
                        </Link>
                </div>
              </div>
          </div>


          <div class="col">
            <div className="card">
              <img class="card-img-top" src = "./img/camisaNirvana.jpg"></img>
                <div class="card-body">
                        <h5>Camisa Nirvana</h5>
                        <p class="card-text"> R$ 99,90 </p>
                        <Link className="nav-link" to="/produtoDetalhes">
                          <a href="#" class="btn btn-primary">Comprar</a>
                        </Link>
                </div>
              </div>
          </div>

          <div class="col">
            <div className="card">
              <img class="card-img-top" src = "./img/camisaNirvana.jpg"></img>
                <div class="card-body">
                        <h5>Camisa Nirvana</h5>
                        <p class="card-text"> R$ 99,90 </p>
                        <Link className="nav-link" to="/produtoDetalhes">
                          <a href="#" class="btn btn-primary">Comprar</a>
                        </Link>
                </div>
              </div>
          </div>

          <div class="col">
            <div className="card">
              <img class="card-img-top" src = "./img/camisaNirvana.jpg"></img>
                <div class="card-body">
                        <h5>Camisa Nirvana</h5>
                        <p class="card-text"> R$ 99,90 </p>
                        <Link className="nav-link" to="/produtoDetalhes">
                          <a href="#" class="btn btn-primary">Comprar</a>
                        </Link>
                </div>
              </div>
          </div>

          <div class="col">
            <div className="card">
              <img class="card-img-top" src = "./img/camisaNirvana.jpg"></img>
                <div class="card-body">
                        <h5>Camisa Nirvana</h5>
                        <p class="card-text"> R$ 99,90 </p>
                        <Link className="nav-link" to="/produtoDetalhes">
                          <a href="#" class="btn btn-primary">Comprar</a>
                        </Link>
                </div>
              </div>
          </div>

        </div>    
    </div>
  );
}
