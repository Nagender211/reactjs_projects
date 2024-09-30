import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Home from './Home'
import NotFound from './NotFound'
import Submited from './Submited'

const Registration = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/submit' element={<Submited />} />
        <Route path='*' element={<NotFound />} />


      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Registration
