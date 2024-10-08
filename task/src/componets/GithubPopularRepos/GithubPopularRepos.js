import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import All from './All'
import JavaScript from './JavaScript'
import Ruby from './Ruby'
import Java from './Java'
import Css from './Css'
import NotFound from './NotFound'
import Header from './Header'

const GithubPopularRepos = () => {
  return (
    <div>
        <BrowserRouter>
        <Header />
        <Routes>
            <Route exact path='/' element={<All />} />
            <Route exact path='/javaScript' element={<JavaScript />} />
            <Route exact path='/ruby' element={<Ruby />} />
            <Route exact path='/java' element={<Java />} />
            <Route exact path='/css' element={<Css />} />
            <Route path='*' element={<NotFound />} />
            
        </Routes>
        </BrowserRouter>
      
    </div>
  )
}

export default GithubPopularRepos
