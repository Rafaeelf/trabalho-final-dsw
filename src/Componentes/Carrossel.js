import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel  from 'react-bootstrap/Carousel';
import AutProvider from '../autCtx';

export default function Carrossel(){
    return(
            <div style={{ display: 'block', width: AutProvider, padding: 1 }}>

            <Carousel fade>
            <Carousel.Item interval={1500}>
                <img
                className="d-block w-100"
                src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122716/1-300x115.png"
                alt="Image One"
                />
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={500}>
                <img
                className="d-block w-100"
                src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122716/1-300x115.png"
                alt=""
                />
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
            
            </Carousel>
        </div>
    )
}