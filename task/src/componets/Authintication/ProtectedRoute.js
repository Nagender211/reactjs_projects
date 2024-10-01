import Cookies from 'js-cookie'
import React from 'react'
import { Navigate, Route } from 'react-router-dom';
import Home from './Home';

const ProtectedRoute = (props) => {
    const jwtToken=Cookies.get('jwt-token');
    if(jwtToken === undefined){
        return <Navigate to='/login' />;
    }
  return (
    <div>
        <Route {...props}/>
      
    </div>
  )
}

export default ProtectedRoute
