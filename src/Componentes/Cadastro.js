import { Form, Col, FormControl, FormGroup, FormLabel, Row } from "react-bootstrap";
import './Cadastro.css';

function Cadastro(){
    return(

        <Form>
            <div className="dadosPessoais">
                <div className="pessoa">
                    <h4>Dados Pessoais</h4>

                    <Row className="mb-2">
                        <FormGroup as={Col} controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="E-mail">
                            </Form.Control>
                        </FormGroup>
                        <FormGroup as={Col} controlId="formGridPassword">
                            <Form.Label>Senha</Form.Label>
                            <FormControl type="password" placeholder="Senha"/>
                        </FormGroup>
                    </Row>

                    <FormGroup className="mb-2" controlId="formGridName">
                        <Form.Label>Nome Completo</Form.Label>
                        <Form.Control placeholder="Nome Completo" />
                    </FormGroup>

                    <Row className="mb-2">
                        <FormGroup as={Col} controlId="formGridCpf">
                            <Form.Label>CPF</Form.Label>
                            <Form.Control type="integer" placeholder="CPF">
                            </Form.Control>
                        </FormGroup>

                        <FormGroup as={Col} controlId="formGridCartao">
                            <Form.Label>Número Cartão</Form.Label>
                            <Form.Control type="integer" placeholder="Número Cartão">
                            </Form.Control>
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
                <a href="#" class="btn btn-white btn-animate" >Cadastrar</a>      
             </div>
             <br></br>
        </Form>
    )
}

export default Cadastro;