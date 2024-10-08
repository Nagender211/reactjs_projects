import React from 'react'

import {  Link } from'react-router-dom'

const Header = () => {
  return (
    <div>
        <ul>
            <li><Link to='/'>All</Link></li>
            <li><Link to='/javaScript'>JavaScript</Link></li>
            <li><Link to='/ruby'>Ruby</Link></li>
            <li><Link to='/java'>Java</Link></li>
            <li><Link to='/css'>CSS</Link></li>
        </ul>
      
    </div>
  )
}

export default Header
