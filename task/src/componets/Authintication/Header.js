import React, { useState } from 'react'

import { Link } from'react-router-dom'
import Cookies from 'js-cookie'
import { Navigate } from 'react-router-dom'

const Header = () => {
  const [isLogout,setIslogout]=useState(false)
  const onLogout=()=>{
    Cookies.remove('jwt-token');
    setIslogout(true);

  }
  if(isLogout){
    return <Navigate to="/login" replace />
  }
  return (
    <nav className="nav-header">
    <div className="nav-content">
      <img
        className="website-logo"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
      />
      <ul className="nav-menu">
        <Link to="/" className="nav-link">
          <li>Home</li>
        </Link>
        <Link to="/products" className="nav-link">
          <li>Products</li>
        </Link>
        <Link to="/card" className="nav-link">
          <li>Card</li>
        </Link>
      </ul>
      <button type="button" className="logout-desktop-btn" onClick={onLogout}>
        Logout
      </button>
      <button type="button" className="logout-mobile-btn" >
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
          alt="logout icon"
          className="logout-icon"
        />
      </button>
    </div>
  </nav>
  )
}

export default Header
