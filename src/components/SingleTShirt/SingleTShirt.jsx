import React from 'react';
import './SingleTShirt.css'

const SingleTShirt = ({tShirt, handleAddToCart}) => {
    // console.log(tShirt);
    const {picture, name, price} = tShirt;

    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />
            <h4>{name}</h4>
            <p>Price: ${price}</p>
            <button onClick={()=>handleAddToCart(tShirt)}>Buy Now</button>
        </div>
    );
};

export default SingleTShirt;