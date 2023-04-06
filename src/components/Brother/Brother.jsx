import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Brother = () => {
    const ring = useContext(RingContext)
    return (
        <div>
            <h2>brother</h2>
            <p><small>{ring}</small></p>
        </div>
    );
};

export default Brother;