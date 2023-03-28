import './Card.css';

export default function Card() {
  return (
    <>
      <DivContainer>
        {Produtos.map((lanch) => (
          <DivCard key={lanch.id}>
            <DivContainerImg>
              <img src={lanch.img} alt="./img/logo.png" />
            </DivContainerImg>
            <DivInfo>
              <h3>{lanch.name}</h3>
              <span>{lanch.category}</span>
              <p>R$ {lanch.price}</p>
              <button onClick={() => adicionarAoCarrinho(lanch)}>
                Adicionar
              </button>
            </DivInfo>
          </DivCard>
        ))}
      </DivContainer>
    </>
  );
}