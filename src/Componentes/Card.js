import './Card.css';

function Card(){
    return (
      <div className="card">
        <div className ="card-body">
          <img src=" " className="card-img-top" alt='Imagem'></img>
          <h5 class="card-title">
            Camiseta Jacaré Individual
          </h5>
          <a href="#" class="btn-sm">
            + Detalhes
          </a>
        </div>
    </div>
    )
}

export default Card;