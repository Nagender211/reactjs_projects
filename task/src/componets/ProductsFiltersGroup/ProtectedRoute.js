import React from 'react'
import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie'
const ProtectedRoute = ({element: Component}) => {
    const jwtToken=Cookies.get('jwt-token')
    if (!jwtToken) {
      return <Navigate to='/login' />
    }
  return Component;
}

export default ProtectedRoute
