import { Link } from "react-router-dom";
import React from "react";
import "./Cabecalho.css";
import { useAutCtx } from "../autCtx";

function Cabecalho() {
  const autCtx = useAutCtx();
  const foiAutenticado = autCtx.autenticado;
  const tipoUsuario = autCtx.tipo;

  function sair() {
    autCtx.sair();
  }

  return (
    <header className="border-bottom border-light border-5 mb-5 p-2">
      <div className="row">
        <div className="row">
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <img alt="logo" src="./img/logo.png"/>
            <a class="navbar-brand">DroneSeta</a>
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
                  {foiAutenticado && tipoUsuario && (
                    <Link className="nav-link" to="/administrador">
                      <a>Administrador</a>
                    </Link>
                  )}
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
                  {foiAutenticado && (
                    <Link className="nav-link" to="/carrinho">
                      Carrinho
                    </Link>
                  )}
                </li>
                <li class="nav-item">
                  {foiAutenticado && (
                    <Link className="nav-link" to="/compras">
                      Compras
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
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Cabecalho;
