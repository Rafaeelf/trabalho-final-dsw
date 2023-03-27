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
                            <FormLabel>Email</FormLabel>
                            <Form.Control type="email" placeholder="E-mail">
                            </Form.Control>
                        </FormGroup>
                        <FormGroup as={Col} controlId="formGridPassword">
                            <FormLabel>Senha</FormLabel>
                            <FormControl type="password" placeholder="Senha"/>
                        </FormGroup>
                    </Row>

                    <FormGroup className="mb-2" controlId="formGridName">
                        <FormLabel>Nome Completo</FormLabel>
                        <Form.Control placeholder="Nome Completo" />
                    </FormGroup>

                    <Row className="mb-2">
                        <FormGroup as={Col} controlId="formGridCpf">
                            <FormLabel>CPF</FormLabel>
                            <Form.Control type="integer" placeholder="CPF">
                            </Form.Control>
                        </FormGroup>

                        <FormGroup as={Col} controlId="formGridCartao">
                            <FormLabel>Número Cartão</FormLabel>
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
                <h4>Dados de entrega</h4>
            </div>

            <br></br>
            <div className="dadosPessoais">
              <Row className="mb-2">
                        <FormGroup as={Col} controlId="formGridRua">
                            <FormLabel>Rua</FormLabel>
                            <Form.Control type="text" placeholder="Rua">
                            </Form.Control>
                        </FormGroup>

                        <FormGroup as={Col} controlId="formGridNumero">
                            <FormLabel>Número</FormLabel>
                            <Form.Control type="integer" placeholder="Número Casa ou Apt">
                            </Form.Control>
                        </FormGroup>
                  </Row>
                  <Row className="mb-2">
                        <FormGroup as={Col} controlId="formGridBairro">
                            <FormLabel>Bairro</FormLabel>
                            <Form.Control type="text" placeholder="Bairro">
                            </Form.Control>
                        </FormGroup>

                        <FormGroup as={Col} controlId="formGridCEP">
                            <FormLabel>CEP</FormLabel>
                            <Form.Control type="integer" placeholder="CEP">
                            </Form.Control>
                        </FormGroup>
                  </Row>
                  <Row className="mb-2">
                        <FormGroup as={Col} controlId="formGridEstado">
                            <FormLabel>Estado</FormLabel>
                            <Form.Control type="text" placeholder="Estado">
                            </Form.Control>
                        </FormGroup>

                        <FormGroup as={Col} controlId="formGridPais">
                            <FormLabel>País</FormLabel>
                            <Form.Control type="integer" placeholder="País">
                            </Form.Control>
                        </FormGroup>
                  </Row>

                  <FormGroup className="mb-2" controlId="formGridComplemento">
                        <FormLabel>Complemento</FormLabel>
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