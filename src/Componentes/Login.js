import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAutCtx } from '../autCtx';
import { Link } from "react-router-dom";
import './Login.css';
import { obterUserEmailApi } from '../Api/Service';

function Login(){

    const [emailLogin, setEmailLogin] = useState('')
    const [senha, setSenha] = useState('')
    const [loginFalhou, setLoginFalhou] = useState(false)
    const navigate = useNavigate()
    const autCtx = useAutCtx();

    function emailLoginHandler(event) {
        setEmailLogin(event.target.value)
    }

    function senhaHandler(event) {
        setSenha(event.target.value)
    }

    function loginHandler(){
        const autenticado = autCtx.autenticar(emailLogin,senha);
        if(autenticado){    
            navigate(`/inicio`);
        } else {
            setLoginFalhou(true);         
        }        
    }

    return (
        <div className="login">
            <div className="row">
                <div className="col-md-12">
                    <form role="form">
                        <div className="form-group">					 
                            <label for="exampleInputEmail1">
                                Email
                            </label>
                            <input type="text" className="form-control" id="exampleInputEmail1" placeholder='Informe seu Email' value={emailLogin} onChange={emailLoginHandler}/>
                        </div>
                        <div className="form-group">					 
                            <label for="exampleInputPassword1">
                                Senha
                            </label>
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder='Informe sua Senha' value={senha} onChange={senhaHandler}/>
                        </div>						
                        <div className='btnEntrar'>
                            <a href="#" class="btn btn-white btn-animate" onClick={loginHandler}>Entrar</a>
                        </div>
                    </form>
                    <div className='cadastro'>
                        <a>
                            Você é Novo por aqui?
                        </a>
                    </div>
                    <div className='btnCadastrar'>
                        <a href="/cadastro" class="btn btn-white btn-animate" onClick={<Link to = "/cadastro"></Link>}>Cadastre-se</a>
                        
                    </div>
                </div>
            </div>
        </div>        
    )

}

export default Login;