import './Card.css';
import { Link } from "react-router-dom";

export default function Card(){

    return (
        

    <div class="container">
      <div class="row">
          <div class="col">
          <div className="card">
             <img class="card-img-top" src = "./img/camisaTeste.png"></img>
          
                  <div class="card-body">
                    <h5>Camisa Vermelha Estampada</h5>
                    <p class="card-text"> R$ 50 pila </p>
                    <Link className="nav-link" to="/produtoDetalhes">
                        <a href="#" class="btn btn-primary">Visitar</a>
                    </Link>
            </div>
        </div>
          </div>
          <div class="col">
          <div className="card">
             <img class="card-img-top" src = "./img/camisaTeste.png"></img>
          
            <div class="card-body">
                    <h5>Camisa Vermelha Estampada</h5>
                    <Link className="nav-link" to="/produtoDetalhes">
                        <a href="#" class="btn btn-primary">Visitar</a>
                    </Link>
            </div>
        </div>
          </div>
          <div class="col">
          <div className="card">
             <img class="card-img-top" src = "./img/camisaTeste.png"></img>
          
            <div class="card-body">
                    <h5>Camisa Vermelha Estampada</h5>
                    <p class="card-text"> R$ 50 pila </p>
                    <Link className="nav-link" to="/produtoDetalhes">
                        <a href="#" class="btn btn-primary">Visitar</a>
                    </Link>
            </div>
        </div>
          </div>
        </div>    
    </div>
    );
}