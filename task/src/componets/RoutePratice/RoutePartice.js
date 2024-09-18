import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import NotFound from './NotFound'
import Header from './Header'

const RoutePartice = () => {
  return (
    <div>
      <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/contact' element={<Contact />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default RoutePartice
