import React from 'react';
import {Pizza} from '../types';
import SpecialOfferCSS from './SpecialOffer.module.css';  
import { AddToCartProps, withAddToCart } from './AddToCart';


interface Props extends AddToCartProps{
    pizza: Pizza,
}

const SpecialOffer: React.FC<Props> = ({pizza, addToCart}) => {
    const handleAddToCartClick = () => {
        addToCart({
            id: pizza.id, 
            name: pizza.name,
            price: pizza.price,
        })
    };
    return (
        <div className={SpecialOfferCSS.container}>
            <h2>{pizza.name}</h2>
            <p>{pizza.description}</p>
            <p>{pizza.price}</p>
            <button type="button" onClick={handleAddToCartClick}>
                Add to Cart
            </button>
        </div>
    )
}

export default withAddToCart(SpecialOffer);
