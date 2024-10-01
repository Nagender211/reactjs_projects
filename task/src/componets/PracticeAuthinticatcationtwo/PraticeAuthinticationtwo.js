import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Login'
import Card from './Card'
import Products from './Products'
import NotFound from './NotFound'
import Home from './Home'

const PraticeAuthinticationtwo = () => {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/' element={<Home />} />
            <Route exact path='/card' element={<Card />} />
            <Route exact path='/products' element={<Products /> } />
            <Route path='*' element={<NotFound />} />
        </Routes>
        </BrowserRouter>

    </div>
  )
}

export default PraticeAuthinticationtwo
