import React from 'react';
import './Cart.css'

const Cart = ({ cart, handleRemoveFromCart }) => {

    let message;
    if (cart.length === 0) {
        message = <p>Please add some products.</p>
    }
    else {
        message = <div>
            <h3>Boroloxxx</h3>
            <p><small>Thanks for wasting your money!</small></p>
        </div>
    }

    return (
        <div>
            <h2 className={cart.length ===1 ? 'blue': 'red'}>Order Summary from cart: {cart.length}</h2>
            <p className={`bold bordered ${cart.length ===3 ? 'green' : 'blue'}`}>Something</p>
            {
                cart.length > 2
                    ? <span className='purple'>Buy More</span>
                    : <span>Goribxxx</span>
            }

            {message}

            {
                cart.map(tshirt => <p
                    key={tshirt._id}
                > {tshirt.name} <button onClick={() => handleRemoveFromCart(tshirt._id)}>X</button></p>)
            }
            {
                cart.length === 2 && <p>Double Bonanza!!!</p>
            }
            {
                cart.length === 3 || <h3>3 ta to hoilo na bhai!!!</h3>
            }
        </div>
    );
};

export default Cart;

/**
 * CONDITIONAL RENDERING
 * 1. use if or if else to set a variable that will contain an element, components
 * 2. ternary operator: condition ? 'for true' : 'false'
 * 3. Logical &&: (if the condition is true then the next thing will be displayed)
 * 4. Logical ||: (if the condition is false then the next thing will be displayed)
 * 
 * */

/**
 * CONDITIONAL CSS Class
 * 1. use ternary 
 * 2. ternary inside template string
 * */ 