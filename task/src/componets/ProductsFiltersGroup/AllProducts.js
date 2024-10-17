import React from 'react'
import Header from './Header'

const AllProducts = (props) => {
    const { each } = props;

    // Add a check to ensure 'each' is defined before destructuring
    if (!each) {
        return null; // Or return some fallback UI
    }

    const { id, name, price } = each;
    
    return (
        <div>
            <Header />
            <h1>{name}</h1>
            <p>Price: ${price}</p>
        </div>
    )
}

export default AllProducts

// export default AllProducts
