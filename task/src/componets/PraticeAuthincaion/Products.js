import Cookies from 'js-cookie'
import React from 'react'
import { Navigate } from 'react-router-dom';

const Products = () => {
    const jwtToken=Cookies.get('jwt-token');
    if(jwtToken === undefined){
        return <Navigate to='/login' />
    }
  return (
    <div>
        <h1>
            Product
        </h1>
      
    </div>
  )
}

export default Products
