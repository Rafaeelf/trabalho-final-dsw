import React from "react";
import './Carrinho.css';

function Carrinho({ deletarItemCarrinho, produtosCarrinho, deletarTodositens }) {
  let total = produtosCarrinho.reduce(
    (valorInicial, valoresDosProdutos) =>
      valorInicial + valoresDosProdutos.price,
    0
  );
  return (
    <Aside>
      <DivNomeCarrinho>
        <h3>Carrinho de compras</h3>
      </DivNomeCarrinho>
      <Sectionn>
        {produtosCarrinho.length === 0 ? (
          <DivSacolaVazia>
            <h3>Sua sacola está vazia</h3>
            <span>Adicione itens</span>
          </DivSacolaVazia>
        ) : (
          produtosCarrinho.map((item) => (
            <DivCardCarrinho>
              <div className="imgCart">
                <img src={item.img} alt="imagem do produto" />
              </div>
              <div>
                <h4>{item.name}</h4>
                <p>{item.category}</p>
              </div>
              <button
                className="btnRemoverCardCarrinho"
                onClick={() => deletarItemCarrinho(item)}
              >
                Remover
              </button>
            </DivCardCarrinho>
          ))
        )}
      </Sectionn>
      {lanchesCarrinho.length !== 0 && (
        <>
          <div className="divTotal">
            <span>Total</span>
            <p>R$ {total.toFixed(2)}</p>
          </div>
          <button onClick={() => deletarTodositens()}>Remover todos</button>
        </>
      )}
    </Aside>
  );
}

export default Carrinho;
