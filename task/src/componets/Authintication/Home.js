import React from 'react'
import Cookies from 'js-cookie'
import { Navigate } from 'react-router-dom'
import Header from './Header'


const Home = () => {
  const jwtToken=Cookies.get('jwt-token');
  if(jwtToken === undefined){
    return <Navigate to="/login" />  
  }
  return (
    
    <div>
        <Header />
      <h1>Home page</h1>
    </div>
  )
}

export default Home
