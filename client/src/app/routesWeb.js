import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import { LandingPage } from './pages/landingPage'
import { HomePage } from './pages/homePage'
import { AddProjectPage } from './pages/addProjectPage'
import { ProjectDetails } from './pages/projectDetails'
import { AboutUs } from './pages/aboutUsPage'

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
        element={!user ? <Navigate to='/' /> : <HomePage allUsers={allUsers} />}
      />
      <Route
        exact
        path='/newproject'
        element={
          !user ? <Navigate to='/' /> : <AddProjectPage allUsers={allUsers} />
        }
      />
      <Route
        exact
        path='/project/:id'
        element={!user ? <Navigate to='/' /> : <ProjectDetails />}
      />
      <Route
        exact
        path='/about'
        element={!user ? <Navigate to='/' /> : <AboutUs />}
      />
    </Routes>
  )
}
