import Cookies from 'js-cookie'
import React from 'react'
import { Navigate } from 'react-router-dom';

const Card = () => {
    const jwtToken=Cookies.get('jwt-token');
    if(jwtToken === undefined){
        return <Navigate to='/login' />
    }
  return (
    <div>
      <h1>Card</h1>
    </div>
  )
}

export default Card
