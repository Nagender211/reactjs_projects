import React, { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import Cookies from 'js-cookie'

const Header = () => {
    const [isLoggOut,setIsloggOut]=useState(false)
    const OnLogout=()=>{
        Cookies.remove('jwt-token');
        setIsloggOut(true);
    }
    if(isLoggOut){
        return <Navigate to='/login' />;
    }
  return (
    <div>
        <ul>
            <li>
                <Link to='/'>
                Home
                </Link>
            </li>
            <li>
                <Link to='/product'>
                Products
                </Link>
            </li>
            <li>
                <Link to='/card'>
                Card
                </Link>
            </li>
            <button onClick={OnLogout}>
                LOGOUT
            </button>
        </ul>
      
    </div>
  )
}

export default Header
