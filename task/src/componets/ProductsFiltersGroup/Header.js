import React, { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import Cookies from 'js-cookie'

const Header = () => {
  const [isLogout,setIslogout]=useState(false)
 
 
  const logout=()=>{
    console.log('succeseFully loggout')
    Cookies.remove('jwt-token')
    setIslogout(true)
  }
  if(isLogout){
    return <Navigate to='/login' />
  }

  return (
    <div>

        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/products'>Products</Link></li>
            <li><Link to='/card'>Card</Link></li>
        </ul>
        <button onClick={logout}>Logout</button>
       
      
    </div>
  )
}

export default Header
