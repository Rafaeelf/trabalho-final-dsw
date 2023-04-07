import './Produtos.css';

export default function Produtos() {

    return(

        <div class="container">
            <div class="card">
                <div class="card-header">
                <img class="card-logo" src=".img/camisaTeste.png"  alt="image"></img>
                
                <div class="product-text">
                    <h2>HARTBEESPOORT</h2>
                         <p>Support Our Nike Zoom Air come together
                            for a more responsive feel with
                            high-speed responsiveness.</p>
                    </div>
                    <div class="product-detail">
                        <h2>FAS</h2>
                        <img class="product-display" src=".img/camisaTeste.png"  alt="image"></img>
                     </div>

                </div>
            </div>

            <div class="card-bottom">
                <div class="m-text">
                    <h2>HARTBEE<strong>SPOORT</strong> <span>NEW</span></h2>
                    <p>BASKET BALL COLLECTION</p>
                    <ul class="ul-star">
                        <li class="fa fa-star"></li>
                        <li class="fa fa-star"></li>
                        <li class="fa fa-star"></li>
                        <li class="fa fa-star"></li>
                        <li class="fa fa-star active"></li>
                    </ul>
                </div>
                <div class="number">
                    <h2>size</h2>
                        <ul class="ul-number">
                            <li>7</li>
                            <li>8</li>
                            <li>9</li>
                            <li class="bk-col">10</li>
                            <li>11</li>
                        </ul>
                 </div>
                 <div class="color-code">
                    <h2>COLOR</h2>
                        <ul class="ul-code">
                            <li class="red">O</li>
                            <li class="green">O</li>
                            <li class="yellow">O</li>
                            <span class="money">USD <strong>24, 453</strong></span>
                        </ul>

                </div>
            </div>
        </div>
    )
}