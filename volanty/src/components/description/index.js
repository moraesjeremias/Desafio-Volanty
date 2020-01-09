import React from 'react';
import './styles.css';
import SVGCar from '../../assets/svgs/undraw_fast_car_p4cu.svg';


const Description = () => (
    <div className="container">
        <h1 className="product-title">Quanto Vale <br/>Meu Carro?</h1>
        <div className="svg-car">
            <img className="volanty-car" src={SVGCar}></img>
        </div>
        <p className="description">
        Nossa ferramenta possibilita aos nossos clientes a calcular de forma prática e justa o valor do seu veículo usado
        </p>
    </div>
);


export default Description;