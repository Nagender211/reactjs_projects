import React from 'react'

import Home from './Home'
import Contacet from './Contacet'
import About from './About'
import Header from './Header'
import NotFound from './NotFound'
 import {BrowserRouter,Route,Routes} from 'react-router-dom'

const Spa = () => {
  return (
    <div>
        <BrowserRouter>
        <Header />
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/contact" element={<Contacet />} />
            <Route exact path="/about" element={<About />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
        </BrowserRouter>
        
      
    </div>
  )
}

export default Spa
