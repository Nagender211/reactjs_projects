import React from 'react'

import BlogList from './BlogList'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Header from './Header'
import About from './About'
import Content from './Content'
import NotFound from './NotFound'
import BlogDeatils from './BlogDeatils'

const ApiBlog = () => {
  return (
    <div>
        <BrowserRouter>
        <Header />
        <Routes>
            <Route exact path='/' element={<BlogList />} />
            <Route exact path='/about' element={<About />} />
            <Route exact path='/contact' element={<Content />} /> 
            <Route exact path='/blogs/:id' element={<BlogDeatils />} />   
            <Route path='*' element={<NotFound />} />  
            

        </Routes>
        </BrowserRouter>
        {/* // <BlogList /> */}
      
    </div>
  )
}

export default ApiBlog
