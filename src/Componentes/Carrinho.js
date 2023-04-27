import "./Carrinho.css";
import React from 'react';

export default function Carrinho() {
  return (
    <body>
      <div class="container">
        <div class="cart-container">
          <header>
            <h3>Carrinho de Compras</h3>
          </header>

          <div class="cart-body">
            <div class="cart-item">
              <div class="cart-row">
                <div class="cart-row-cell pic">
                  <a href="#">-</a>

                  <span></span>
                </div>

                <div class="cart-row-cell desc">
                  <h5>Camisa</h5>

                  <p>#41345755</p>
                </div>

                <div class="cart-row-cell quant">
                  <ul>
                    <li>
                      <a href="#">-</a>
                    </li>

                    <li>2</li>

                    <li>
                      <a href="#">+</a>
                    </li>
                  </ul>
                </div>

                <div class="cart-row-cell amount">
                  <p>R$13,87</p>
                </div>
              </div>

              <div class="cart-row">
                <div class="cart-row-cell pic">
                  <a href="#">-</a>

                  <span></span>
                </div>

                <div class="cart-row-cell desc">
                  <h5>Camisa</h5>

                  <p>#41345755</p>
                </div>

                <div class="cart-row-cell quant">
                  <ul>
                    <li>
                      <a href="#">-</a>
                    </li>

                    <li>2</li>

                    <li>
                      <a href="#">+</a>
                    </li>
                  </ul>
                </div>

                <div class="cart-row-cell amount">
                  <p>R$13,87</p>
                </div>
              </div>

              <div class="cart-row">
                <div class="cart-row-cell pic">
                  <a href="#">-</a>

                  <span></span>
                </div>

                <div class="cart-row-cell desc">
                  <h5>Camisa</h5>

                  <p>#41345755</p>
                </div>

                <div class="cart-row-cell quant">
                  <ul>
                    <li>
                      <a href="#">-</a>
                    </li>

                    <li>2</li>

                    <li>
                      <a href="#">+</a>
                    </li>
                  </ul>
                </div>

                <div class="cart-row-cell amount">
                  <p>R$13,87</p>
                </div>
              </div>
            </div>
          </div>

          <footer>
            <div class="totals">
              <p class="total-label">Subtotal</p>

              <p class="total-amount">R$13,87</p>
            </div>

            <div class="totals">
              <p class="total-label">Taxa</p>

              <p class="total-amount">R$2,00</p>
            </div>

            <div class="totals">
              <p class="total-label">Total</p>

              <p class="total-amount">R$15,87</p>
            </div>

            <div className="btnFinalizar">
            <a href="#" class="btn btn-white ">
                Finalizar
              </a>
            </div>
          </footer>
        </div>
      </div>
    </body>
  );
}
