import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './Login'
import Home from './Home'
import Products from './Products'
import Card from './Card'
import NotFound from './NotFound'
import Header from './Header'
import ProtectedRoute from './ProtectedRoute'
const ProductsFiltersGroup = () => {
  return (
    <div>
         <BrowserRouter>
         {/* <Header /> */}
        <Routes>
            <Route exact path='/login' element={<Login />} />
        
            <Route exact path='/' element={<ProtectedRoute element={<Home />} />} />
          
            <Route exact path='/products' element={<ProtectedRoute element={<Card />} />} />
            <Route exact path='/card' element={<ProtectedRoute element={<Products />} />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
        </BrowserRouter>
    
        

    </div>
  )
}

export default ProductsFiltersGroup
