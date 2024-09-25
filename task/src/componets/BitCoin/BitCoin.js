import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CryptocurrencyItem from './CryptocurrencyItem'
import NotFound from './NotFound'

const BitCoin = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<CryptocurrencyItem />}/>
        <Route path='*' element={<NotFound />} />

      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default BitCoin
