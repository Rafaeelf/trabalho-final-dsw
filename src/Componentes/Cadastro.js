import { Form, Col, FormControl, FormGroup, Row } from "react-bootstrap";
import './Cadastro.css';
import { useState } from "react";
import { registerUserApi } from "../Api/Service";
import { useAutCtx } from "../autCtx";
import { Navigate } from "react-router-dom";

function Cadastro(){

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
        console.log(event.target.value);
    }

    function handlerCpf(event){
        setCpf(event.target.value);
    }
    
    function handlerCartao(event){
        setCartao(event.target.value);
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
        console.log(idInsert);
        if (idInsert != null) {
            autCtx.atualizaDadosCadastro(idInsert);
            Navigate(`/inicio`);
            return true;
        } else {
            autCtx.setAutenticado(false);
            autCtx.setUsuario(null);
            return false;
        }
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
                        <Form.Control placeholder="Nome Completo" value={nome} onChange={handlerNome}/>
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
                            <Form.Control type="text" placeholder="Rua">
                            </Form.Control>
                        </FormGroup>

                        <FormGroup as={Col} controlId="formGridNumero">
                            <Form.Label>Número</Form.Label>
                            <Form.Control type="integer" placeholder="Número Casa ou Apt">
                            </Form.Control>
                        </FormGroup>
                  </Row>
                  <Row className="mb-2">
                        <FormGroup as={Col} controlId="formGridBairro">
                            <Form.Label>Bairro</Form.Label>
                            <Form.Control type="text" placeholder="Bairro">
                            </Form.Control>
                        </FormGroup>

                        <FormGroup as={Col} controlId="formGridCEP">
                            <Form.Label>CEP</Form.Label>
                            <Form.Control type="integer" placeholder="CEP">
                            </Form.Control>
                        </FormGroup>
                  </Row>
                  <Row className="mb-2">
                        <FormGroup as={Col} controlId="formGridEstado">
                            <Form.Label>Estado</Form.Label>
                            <Form.Control type="text" placeholder="Estado">
                            </Form.Control>
                        </FormGroup>

                        <FormGroup as={Col} controlId="formGridPais">
                            <Form.Label>País</Form.Label>
                            <Form.Control type="integer" placeholder="País">
                            </Form.Control>
                        </FormGroup>
                  </Row>

                  <FormGroup className="mb-2" controlId="formGridComplemento">
                        <Form.Label>Complemento</Form.Label>
                        <Form.Control placeholder="Complemento ou referencias" />
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
                            <Form.Control type="text" placeholder="Rua">
                            </Form.Control>
                        </FormGroup>

                        <FormGroup as={Col} controlId="formGridNumero">
                            <Form.Label>Número</Form.Label>
                            <Form.Control type="integer" placeholder="Número Casa ou Apt">
                            </Form.Control>
                        </FormGroup>
                  </Row>
                  <Row className="mb-2">
                        <FormGroup as={Col} controlId="formGridBairro">
                            <Form.Label>Bairro</Form.Label>
                            <Form.Control type="text" placeholder="Bairro">
                            </Form.Control>
                        </FormGroup>

                        <FormGroup as={Col} controlId="formGridCEP">
                            <Form.Label>CEP</Form.Label>
                            <Form.Control type="integer" placeholder="CEP">
                            </Form.Control>
                        </FormGroup>
                  </Row>
                  <Row className="mb-2">
                        <FormGroup as={Col} controlId="formGridEstado">
                            <Form.Label>Estado</Form.Label>
                            <Form.Control type="text" placeholder="Estado">
                            </Form.Control>
                        </FormGroup>

                        <FormGroup as={Col} controlId="formGridPais">
                            <Form.Label>País</Form.Label>
                            <Form.Control type="integer" placeholder="País">
                            </Form.Control>
                        </FormGroup>
                  </Row>

                  <FormGroup className="mb-2" controlId="formGridComplemento">
                        <Form.Label>Complemento</Form.Label>
                        <Form.Control placeholder="Complemento ou referencias" />
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