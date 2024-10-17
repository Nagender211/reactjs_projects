import React from 'react'
import Header from './Header'

const AllProducts = (props) => {
    const {each}=props;
    const {id,name,price}=each;
    
  return (
    <div>
        <Header />
       
       <h1>{name}</h1>
       <p>Price: ${price}</p>
        
      
    </div>
  )
}

export default AllProducts
