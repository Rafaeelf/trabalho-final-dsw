import { Form, Col, FormControl, FormGroup, Row} from "react-bootstrap";
import './Cadastro.css';
import { useState } from "react";
import { registerEnderecoApi, registerUserApi } from "../Api/Service";
import { useAutCtx } from "../autCtx";
import { useNavigate } from "react-router-dom";

function Cadastro(){

    const navigate = useNavigate()

    const autCtx = useAutCtx();
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [cartao, setCartao] = useState('');

    function handlerEmail(event){
        setEmail(event.target.value);
    }
    
    function handlerSenha(event){
        setSenha(event.target.value);
    }
    
    function handlerNome(event){
        setNome(event.target.value);
    }

    function handlerCpf(event){
        setCpf(event.target.value);
    }
    
    function handlerCartao(event){
        setCartao(event.target.value);
    }

    const [ruaResi, setRuaResi] = useState('');
    const [numResi, setNumResi] = useState('');
    const [baiResi, setBaiResi] = useState('');
    const [cidResi, setCidResi] = useState('');
    const [cepResi, setCepResi] = useState('');
    const [estResi, setEstResi] = useState('');
    const [paiResi, setPaiResi] = useState('');
    const [compResi, setCompResi] = useState('');

    function handlerRuaResi(event){
        setRuaResi(event.target.value);
    }
    
    function handlerNumResi(event){
        setNumResi(event.target.value);
    }
    
    function handlerBaiResi(event){
        setBaiResi(event.target.value);
    }
    
    function handlerCidResi(event){
        setCidResi(event.target.value);
    }

    function handlerCepResi(event){
        setCepResi(event.target.value);
    }
    
    function handlerEstResi(event){
        setEstResi(event.target.value);
    }

    
    function handlerPaiResi(event){
        setPaiResi(event.target.value);
    }
    
    function handlerCompResi(event){
        setCompResi(event.target.value);
    }
    
    const [ruaEnt, setRuaEnt] = useState('');
    const [numEnt, setNumEnt] = useState('');
    const [baiEnt, setBaiEnt] = useState('');
    const [cidEnt, setCidEnt] = useState('');
    const [cepEnt, setCepEnt] = useState('');
    const [estEnt, setEstEnt] = useState('');
    const [paiEnt, setPaiEnt] = useState('');
    const [compEnt, setCompEnt] = useState('');

    function handlerRuaEnt(event){
        setRuaEnt(event.target.value);
    }
    
    function handlerNumEnt(event){
        setNumEnt(event.target.value);
    }
    
    function handlerBaiEnt(event){
        setBaiEnt(event.target.value);
    }

    function handlerCidEnt(event){
        setCidEnt(event.target.value);
    }

    function handlerCepEnt(event){
        setCepEnt(event.target.value);
    }
    
    function handlerEstEnt(event){
        setEstEnt(event.target.value);
    }
    
    function handlerPaiEnt(event){
        setPaiEnt(event.target.value);
    }
    
    function handlerCompEnt(event){
        setCompEnt(event.target.value);
    }

    async function registerUser(){
        const user = {"nome":nome,
                        "cpf":cpf,
                        "cartao":cartao,
                        "email":email,
                        "password":senha,
                        "tipo":1};
        console.log(user);
        const resposta = await registerUserApi(user);
        const idInsert = resposta.data.id;

        if (idInsert != null) {            
            cadastraEnderecoResidencial(idInsert);
            cadastraEnderecoEntrega(idInsert);
            autCtx.atualizaDadosCadastro(idInsert);
            navigate(`/inicio`);
        } else {
            autCtx.setAutenticado(false);
            autCtx.setUsuario(null);
        }
    }

    function cadastraEnderecoResidencial(usuario){
        const endResid = {"bairro":baiResi,
                          "cep":cepResi,
                          "cidade":cidResi,
                          "complemento":compResi,
                          "estado":estResi,
                          "numero":numResi,
                          "pais":paiResi,
                          "rua":ruaResi,
                          "tipo":1,
                          "usuario":usuario};

        registerEnderecoApi(endResid);
    }

    function cadastraEnderecoEntrega(usuario){
        const endEntre = {"bairro":baiEnt,
                          "cep":cepEnt,
                          "cidade":cidEnt,
                          "complemento":compEnt,
                          "estado":estEnt,
                          "numero":numEnt,
                          "pais":paiEnt,
                          "rua":ruaEnt,
                          "tipo":2,
                          "usuario":usuario};
        registerEnderecoApi(endEntre);
    }

    return(
        
        <Form>           
            <div className="dadosPessoais">
                <div className="pessoa">
                    <h4>Dados Pessoais</h4>

                    <Row className="mb-2">
                        <FormGroup as={Col} controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="E-mail" value={email} onChange={handlerEmail}/>
                        </FormGroup>
                        <FormGroup as={Col} controlId="formGridPassword">
                            <Form.Label>Senha</Form.Label>
                            <FormControl type="password" placeholder="Senha" value={senha} onChange={handlerSenha}/>
                        </FormGroup>
                    </Row>

                    <FormGroup className="mb-2" controlId="formGridName">
                        <Form.Label>Nome Completo</Form.Label>
                        <Form.Control type="text" placeholder="Nome Completo" value={nome} onChange={handlerNome}/>
                        </FormGroup>

                    <Row className="mb-2">
                        <FormGroup as={Col} controlId="formGridCpf">
                            <Form.Label>CPF</Form.Label>
                            <Form.Control type="integer" placeholder="CPF" value={cpf} onChange={handlerCpf}/>
                        </FormGroup>

                        <FormGroup as={Col} controlId="formGridCartao">
                            <Form.Label>Número Cartão</Form.Label>
                            <Form.Control type="integer" placeholder="Número Cartão" value={cartao} onChange={handlerCartao}/>
                        </FormGroup>
                    </Row>
                </div>
            </div>

            <FormGroup className="mb-3" id="formGridCheckbox">
                <Form.Check type="checkbox" label="Concordo com os termos de cadastro." />
            </FormGroup> <br></br>

       
            <div className="endereco">
                <h4>Dados Residenciais / Cobrança</h4>
            </div>

            <br></br>
            <div className="dadosPessoais">
              <Row className="mb-2">
                        <FormGroup as={Col} controlId="formGridRua">
                            <Form.Label>Rua</Form.Label>
                            <Form.Control type="text" placeholder="Rua" value={ruaResi} onChange={handlerRuaResi} />
                        </FormGroup>

                        <FormGroup as={Col} controlId="formGridNumero">
                            <Form.Label>Número</Form.Label>
                            <Form.Control type="integer" placeholder="Número Casa ou Apt" value={numResi} onChange={handlerNumResi} />
                        </FormGroup>
                  </Row>
                  <Row className="mb-2">
                        <FormGroup as={Col} controlId="formGridBairro">
                            <Form.Label>Bairro</Form.Label>
                            <Form.Control type="text" placeholder="Bairro" value={baiResi} onChange={handlerBaiResi} />
                        </FormGroup>

                        <FormGroup as={Col} controlId="formGridCidade">
                            <Form.Label>Cidade</Form.Label>
                            <Form.Control type="text" placeholder="Cidade" value={cidResi} onChange={handlerCidResi} />
                        </FormGroup>

                        <FormGroup as={Col} controlId="formGridCEP">
                            <Form.Label>CEP</Form.Label>
                            <Form.Control type="integer" placeholder="CEP" value={cepResi} onChange={handlerCepResi} />
                        </FormGroup>
                  </Row>
                  <Row className="mb-2">
                        <FormGroup as={Col} controlId="formGridEstado">
                            <Form.Label>Estado</Form.Label>
                            <Form.Control type="text" placeholder="Estado" value={estResi} onChange={handlerEstResi} />
                        </FormGroup>

                        <FormGroup as={Col} controlId="formGridPais">
                            <Form.Label>País</Form.Label>
                            <Form.Control type="integer" placeholder="País" value={paiResi} onChange={handlerPaiResi} />
                        </FormGroup>
                  </Row>

                  <FormGroup className="mb-2" controlId="formGridComplemento">
                        <Form.Label>Complemento</Form.Label>
                        <Form.Control placeholder="Complemento ou referencias" value={compResi} onChange={handlerCompResi}/>
                    </FormGroup>
            </div>

            <div className="endereco">
                <h4>Dados de entrega</h4>
            </div>

            <br></br>
            <div className="dadosPessoais">
              <Row className="mb-2">
                        <FormGroup as={Col} controlId="formGridRua">
                            <Form.Label>Rua</Form.Label>
                            <Form.Control type="text" placeholder="Rua" value={ruaEnt} onChange={handlerRuaEnt}/>
                        </FormGroup>

                        <FormGroup as={Col} controlId="formGridNumero">
                            <Form.Label>Número</Form.Label>
                            <Form.Control type="integer" placeholder="Número Casa ou Apt" value={numEnt} onChange={handlerNumEnt}/>
                        </FormGroup>
                  </Row>
                  <Row className="mb-2">
                        <FormGroup as={Col} controlId="formGridBairro">
                            <Form.Label>Bairro</Form.Label>
                            <Form.Control type="text" placeholder="Bairro" value={baiEnt} onChange={handlerBaiEnt}/>
                        </FormGroup>

                        
                        <FormGroup as={Col} controlId="formGridCidade">
                            <Form.Label>Cidade</Form.Label>
                            <Form.Control type="text" placeholder="Cidade" value={cidEnt} onChange={handlerCidEnt} />
                        </FormGroup>

                        <FormGroup as={Col} controlId="formGridCEP">
                            <Form.Label>CEP</Form.Label>
                            <Form.Control type="integer" placeholder="CEP" value={cepEnt} onChange={handlerCepEnt}/>
                        </FormGroup>
                  </Row>
                  <Row className="mb-2">
                        <FormGroup as={Col} controlId="formGridEstado">
                            <Form.Label>Estado</Form.Label>
                            <Form.Control type="text" placeholder="Estado" value={estEnt} onChange={handlerEstEnt}/>
                        </FormGroup>

                        <FormGroup as={Col} controlId="formGridPais">
                            <Form.Label>País</Form.Label>
                            <Form.Control type="integer" placeholder="País" value={paiEnt} onChange={handlerPaiEnt}/>
                        </FormGroup>
                  </Row>

                  <FormGroup className="mb-2" controlId="formGridComplemento">
                        <Form.Label>Complemento</Form.Label>
                        <Form.Control placeholder="Complemento ou referencias" value={compEnt} onChange={handlerCompEnt}/>
                    </FormGroup>
            </div>

            <div className='btnCadastrar'>
                <a href="#" class="btn btn-white btn-animate" onClick={registerUser}>Cadastrar</a>      
            </div>
            <br></br>
        </Form>
    );
}

export default Cadastro;