import React from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import BlogListItem from './BlogListItem'
import About from './About'
import Contact from './Contact'
import NotFound from './NotFound'
import BlogListDeatils from './BlogListDeatils'
import Header from './Header'

const DebugBlog = () => {
  return (
    <div>
      <BrowserRouter>
      <Header />
        <Routes>
            <Route exact path='/' element={<BlogListItem />} />
            <Route exact path='/about' element={<About />} />
            <Route exact path='/contact' element={<Contact />} />
            <Route exact path='/blogs/:id' element={<BlogListDeatils />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default DebugBlog
