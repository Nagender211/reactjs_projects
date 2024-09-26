import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DashBoardItems from './DashBoardItems'
import DashBoardDatials from './DashBoardDatials'
import NotFound from './NotFound'

const IplDashBoard = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<DashBoardItems />} />
        <Route path='/team-match/:id' element={<DashBoardDatials />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default IplDashBoard
