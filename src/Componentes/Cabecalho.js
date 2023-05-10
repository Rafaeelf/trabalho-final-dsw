import { Link } from "react-router-dom";
import React from "react";
import "./Cabecalho.css";
import { AutCtx, useAutCtx } from "../autCtx";

function Cabecalho() {
  const autCtx = useAutCtx();
  const foiAutenticado = autCtx.autenticado;

  function sair() {
    autCtx.sair();
  }

  return (
    <div className="container">
      <div className="row">
        <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
          <img alt="logo" src="./img/logo.png"></img>
          <a class="navbar-brand" href="#">
            DroneSeta
          </a>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
              <li className="nav=item">
                <Link className="nav-link" to="/">
                  <a>Home</a>
                </Link>
              </li>
              <li className="nav=item">
                <Link className="nav-link" to="/produtos">
                  <a>Produtos</a>
                </Link>
              </li>
              <li className="nav=item">
                <Link className="nav-link" to="/produtos/cadastro">
                  <a>Cadastrar Produtos</a>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <ul class="navbar-nav justify-content-end">
              <li class="nav-item">
                {!foiAutenticado && (
                  <Link className="nav-link" to="/login">
                    Efetuar Login
                  </Link>
                )}
              </li>

                  <li class="nav-item">
                    {!foiAutenticado }

                  </li>

              <li class="nav-item">
                {!foiAutenticado && (
                  <Link className="nav-link" to="/login">
                    Efetuar Login
                  </Link>
                )}
              </li>
              <li className="nav=item">
                {foiAutenticado && (
                  <Link className="nav-link" to="/inicio" onClick={sair}>
                    Sair
                  </Link>
                )}
              </li>
              <li class="nav-item">
                {foiAutenticado && (
                  <Link className="nav-link" to="/carrinho">
                    Carrinho
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Cabecalho;
