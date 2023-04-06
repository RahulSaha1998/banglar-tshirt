import React from 'react';
import Father from '../Father/Father';
import Uncle from '../Father/Uncle';
import Aunty from '../Aunty/Aunty';
import './Grandpa.css'

const Grandpa = () => {
    const ring = 'diamond';
    return (
        <div className='grandpa'>
            <h2 >Grandpa</h2>
            <section className='flex'>
                <Father ring={ring}></Father>
                <Uncle></Uncle>
                <Aunty ring={ring}></Aunty>
            </section>
        </div>
    );
};

export default Grandpa;

/**
 * 1. create context and export 
 * 2. Create a provider and pass a value 
 * 3. use useContext to receive 
 * */ 