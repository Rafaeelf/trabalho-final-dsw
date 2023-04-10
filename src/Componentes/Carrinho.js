import './Carrinho.css';

export default function Carrinho() {

    return(
        <div class="container-fluid  mt-100">
            <dic class="row">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header">
                            <h5>Carrinho</h5>
                        </div>
                        <div class="card-body cart">
                            <div class="col-sm-12 empty-cart-cls text-center">
                                <img src='.img/camisaTeste.png' width="130" height="130" class="img-fluid mb-4 mr-3"></img>
                                <h3><strong>Carrinhp vazio!</strong></h3>
                                <h4>Adicionar itens ao seu carrinho!!</h4>
                                <a href='#' class="btn btn-primary cart-btn-transform m-3 " > Continue comprando </a>
                            </div>
                        </div>
                    </div>
                </div>
            </dic>
        </div>
    );
}