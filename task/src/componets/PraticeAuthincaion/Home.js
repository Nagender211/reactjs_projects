import React from 'react'
import Header from './Header'
import Cookies from 'js-cookie'
import { Navigate } from 'react-router-dom';

const Home = () => {
    const jwtToken=Cookies.get('jwt-token');
    if(jwtToken===undefined){
        return <Navigate to='/login' />;
    }
  return (
    <div>
        <Header />

        <h1>
            Wel come to the home please serach your poducts and to keep on eye on the card
        </h1>
      
    </div>
  )
}

export default Home
