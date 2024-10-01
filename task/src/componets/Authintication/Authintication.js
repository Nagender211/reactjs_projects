import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './Home'
import Login from './Login'
import Card from './Card'
import Products from './Products'

import NotFound from './NotFound'
import ProtectedRoute from './ProtectedRoute'
const Authintication = () => {
  return (
    <div>
      <BrowserRouter>
     
      <Routes>
        <Route exact path="/login" element={<Login />} />
        {/* <Route exact path="/" element={<Home />} /> */}
        <Route exact path='/' element={<ProtectedRoute element={<Home />} />} />
        <Route exact path="/card"  element={<ProtectedRoute element={<Card />} />} />
        <Route exact path="/products" element={<ProtectedRoute element={<Products />} />} />
        <Route path="*" element={<NotFound />} />

      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Authintication
