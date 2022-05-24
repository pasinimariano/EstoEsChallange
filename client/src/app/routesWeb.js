import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import { LandingPage } from './pages/landingPage'
import { HomePage } from './pages/homePage'

export const RoutesWeb = ({ user, allUsers }) => {
  return (
    <Routes>
      <Route
        exact
        path='/'
        element={<LandingPage userState={user} allUsers={allUsers} />}
      />
      <Route
        exact
        path='/home'
        element={!user ? <Navigate to='/' /> : <HomePage />}
      />
    </Routes>
  )
}
