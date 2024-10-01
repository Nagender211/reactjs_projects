import React from 'react'

const ProductItem = (props) => {
    const { product } = props;
    const {title,price,id,brand,imageUrl,rating}=product
  return (
    <div>
        <img src={imageUrl} alt={title} />

          <h3>{title}</h3>
          <p>Brand: {brand}</p>
          <p>Price: ${price}</p>
          <p>Rating: {rating}</p>
          <button onClick={() => props.addToCart(id)}>Add to Cart</button>
    </div>
  )
}

export default ProductItem
