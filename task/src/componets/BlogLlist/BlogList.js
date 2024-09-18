import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Contact from './Contact'
import Header from './Header'
import About from './About'
import NotFfound from './NotFfound'

const BlogListq=[
  {
    id: 1,
    title: 'Blog Post 1',
    content: 'This is the first blog post.',
    author: 'John Doe',
    date: '2022-01-01'
  },
  {
    id: 2,
    title: 'Blog Post 2',
    content: 'This is the second blog post.',
    author: 'Jane Smith',
    date: '2022-02-02'
  },
  {
    id: 3,
    title: 'Blog Post 3',
    content: 'This is the third blog post.',
    author: 'Mike Johnson',
    date: '2022-03-03'
  },
  {
    id: 4,
    title: 'Blog Post 4',
    content: 'This is the fourth blog post.',
    author: 'Emily Davis',
    date: '2022-04-04'
  }

]
const BlogList = () => {
  return (
    <div>
        <BrowserRouter>
        <Header />
        <Routes>
            <Route exact path='/' element={<Home BlogListq={BlogListq}/>} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/about' element={<About />} />
            <Route path='*' element={<NotFfound />} />
        </Routes>
        </BrowserRouter>
      
    </div>
  )
}

export default BlogList
