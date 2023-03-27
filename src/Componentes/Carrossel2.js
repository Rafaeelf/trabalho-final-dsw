import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


export default function Carrosel2(){
    const responsive = {
        superLargeDesktop: {

          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      return (

        <Carousel responsive={responsive}>

            <div className='card'>
                <img className="d-block w-100"
                 src="./img/logo.png"></img>
                <p className='valor'>R$0.00</p>
                <p>Descrição se quiser</p>
                <div className='btnCadastrar'>
                <a class="btn" >Adicionar Carrinho</a>      
             </div>
            </div>

            <div className='card'>
                <img className="d-block w-100"
                 src="./img/logo.png"></img>
                <p className='valor'>R$0.00</p>
                <p>Descrição se quiser</p>
                <div className='btnCadastrar'>
                <a class="btn" >Adicionar Carrinho</a>      
             </div>
            </div>

            <div className='card'>
                <img className="d-block w-100"
                 src="./img/logo.png"></img>
                <p className='valor'>R$0.00</p>
                <p>Descrição se quiser</p>
                <div className='btnCadastrar'>
                <a class="btn" >Adicionar Carrinho</a>      
             </div>
            </div>

            <div className='card'>
                <img className="d-block w-100"
                 src="./img/logo.png"></img>
                <p className='valor'>R$0.00</p>
                <p>Descrição se quiser</p>
                <div className='btnCadastrar'>
                <a class="btn" >Adicionar Carrinho</a>      
             </div>
            </div>

            <div className='card'>
                <img className="d-block w-100"
                 src="./img/logo.png"></img>
                <p className='valor'>R$0.00</p>
                <p>Descrição se quiser</p>
                <div className='btnCadastrar'>
                <a class="btn" >Adicionar Carrinho</a>      
             </div>
            </div>
        </Carousel>
      )
}