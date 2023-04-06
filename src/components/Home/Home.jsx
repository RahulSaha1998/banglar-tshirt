import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleTShirt from '../SingleTShirt/SingleTShirt';
import Cart from '../Cart/Cart';
import './Home.css'
// import toast from 'react-hot-toast';
import { toast } from 'react-toastify';

const Home = () => {

    const tShirts = useLoaderData();

    const [cart, setCart] = useState([]);
    const handleAddToCart = tShirt => {
        const exists = cart.find(ts => ts._id === tShirt._id);
        if (exists) {
            toast('You have already added this T-shirt');
        }
        else {
            const newCart = [...cart, tShirt];
            setCart(newCart);
        }


    }

    const handleRemoveFromCart = id => {
        const remaining = cart.filter(ts => ts._id !== id);
        setCart(remaining);
    }


    return (
        <div className='home-container'>
            <div className='tshirts-container'>
                {
                    tShirts.map(tShirt => <SingleTShirt
                        key={tShirt._id}
                        tShirt={tShirt}
                        handleAddToCart={handleAddToCart}
                    >
                    </SingleTShirt>)
                }
            </div>
            <div className="cart-container">
                <Cart
                    cart={cart}
                    handleRemoveFromCart={handleRemoveFromCart}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;