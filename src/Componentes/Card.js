import './Card.css';

export default function Card(){

    return (
        
        <div className="card">
             <img class="card-img-top" src = "./img/camisaTeste.png"></img>
          
            <div class="card-body">
                    <h5>Camisa Vermelha Estampada</h5>
                    <p class="card-text"> R$ 50 pila </p>
                    <a href="#" class="btn btn-primary">Visitar</a>
            </div>
        </div>
        

    )
}