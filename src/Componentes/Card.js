import { Card, Container, ContainerImg, Info } from "react-bootstrap";
import './Card.css';

export default function Card() {
  return (

      <Container>
          <Card key={lanch.id}>
            <Img>
              <img src={lanch.img} alt='./img/logo.png' />
            </Img>
            <div className="info">
             <h3>{lanch.name}</h3>
              <span>{lanch.category}</span>
              <p>R$ {lanch.price}</p>
              <button onClick={() => adicionarAoCarrinho(lanch)}>
                Adicionar
              </button>
            </div>
          </Card>
      </Container>
  )
}
