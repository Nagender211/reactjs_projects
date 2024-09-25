import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import BlogListDeatials from './BlogListDeatials'
import About from './About'
import Contact from './Contact'
import NotFound from './NotFound'
import BlogListDisplay from './BlogListDisplay'
import Header from './Header'

const FetchRoute = () => {
  return (
    <div>
        <BrowserRouter>
        <Header />
        <Routes>
            <Route exact path='/' element={<BlogListDisplay />} />
            <Route exact path='/about' element={<About />} />
            <Route exact path='/contact' element={<Contact />} />
            <Route exact path='/blogs/:id' element={<BlogListDeatials />} />  {/* dynamic routing */}
            <Route path='*' element={<NotFound />} />


        </Routes>
        </BrowserRouter>
      
    </div>
  )
}

export default FetchRoute
