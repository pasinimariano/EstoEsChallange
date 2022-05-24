import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { LandingPage } from './pages/landingPage'

export const RoutesWeb = ({ user, allUsers }) => {
  return (
    <Routes>
      <Route
        exact
        path='/'
        element={<LandingPage userState={user} allUsers={allUsers} />}
      />
    </Routes>
  )
}
