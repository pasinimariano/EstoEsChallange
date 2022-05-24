import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { LandingPage } from './pages/landingPage'

export const RoutesWeb = () => {
  return (
    <Routes>
      <Route exact path='/' element={<LandingPage />} />
    </Routes>
  )
}
