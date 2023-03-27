import { Link } from "react-router-dom";
import React from 'react';
import './Cabecalho.css';

function Cabecalho(){

    return (
        <header className="border-bottom border-light border-5 mb-5 p-2">
            <div className="container">
                <div className="row">
                <nav class="navbar navbar-expand-lg navbar-light bg-light">	
                <img alt="logo" src="./img/logo.png" ></img>			 
                    <a class="navbar-brand" href="#">DroneSeta</a>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav">
                            <li className="nav=item">
                                <Link className="nav-link" to="/">
                                    
                                   <a>Home</a>
                                </Link>
                            </li>
                            <li className="nav=item">
                                <Link className="nav-link" to = "/podutos">
                                   <a>Produtos</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul class="navbar-nav justify-content-end">
                            <li class="nav-item">
                                <Link className="nav-link" to = "/login">
                                    Login
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link className="nav-link" to = "/carrinho">
                                    Carrinho
                                </Link>
                            </li>
                        </ul>
                    </div>
                  </nav>
                </div>
            </div>
        </header>
    )
}

export default Cabecalho;