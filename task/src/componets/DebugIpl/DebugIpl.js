import React from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'

import IplList from './IplList'


const DebugIpl = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<IplList />} />
        <Route exact path='/blogs/:id' element={<IplDeatiles />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      </BrowserRouter>


    </div>
  )
}

export default DebugIpl
