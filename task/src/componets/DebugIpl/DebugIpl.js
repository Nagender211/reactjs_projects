import React from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'

import IplList from './IplList'

import IplDeatiles from './IplDeatiles'

const NotFound = () => {
  return <h1>Page Not Found</h1>
}


const DebugIpl = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<IplList />} />
        <Route exact path='/team-match/:id' element={<IplDeatiles />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      </BrowserRouter>


    </div>
  )
}

export default DebugIpl
