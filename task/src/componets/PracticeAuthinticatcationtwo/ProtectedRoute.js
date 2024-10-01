import React from 'react'
import Cookies from 'js-cookie'
import { Navigate, Route } from 'react-router-dom';
const ProtectedRoute = ({element}) => {
  const jwtToken=Cookies.get('jwt-token');
  if(!jwtToken){
    return <Navigate to='/login' />
  }

  return element;
}

export default ProtectedRoute
