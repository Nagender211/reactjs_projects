import Cookies from 'js-cookie'
import React, { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'

const Header = () => {
    const [isLoggOut,setIsLoogout]=useState(false)
    const onLoggout=()=>{
        Cookies.remove('jwt-token')
        setIsLoogout(true)
        
    }
    if(isLoggOut){
        return <Navigate to='/login' />
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
                <Link to='/card'>
                   Card
                </Link>
            </li>
            <li>
                <Link to='/products'>
                Product</Link>
            </li>
            <button onClick={onLoggout}>Logout</button>
         </ul>
        
      
    </div>
  )
}

export default Header
