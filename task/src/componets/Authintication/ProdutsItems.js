import React from 'react'

const ProdutsItems = (props) => {
    const { product } = props;
    const {title,price,brand}=product
  return (
    <div>
        <h3>{title}</h3>
        <p>Brand: {brand}</p>
        <p>Price: ${price}</p>
              
    </div>
  )
}

export default ProdutsItems
