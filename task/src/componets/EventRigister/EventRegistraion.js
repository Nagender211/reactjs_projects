import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import EventItem from './EventItem'
import NotFound from './NotFound'
const EventRegistraion = () => {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<EventItem />} />
            <Route path='*' element={<NotFound />} />

        </Routes>
        </BrowserRouter>

    </div>
  )
}

export default EventRegistraion
