import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import { LandingPage } from './pages/landingPage'
import { HomePage } from './pages/homePage'
import { AddProjectPage } from './pages/addProjectPage'
import { ProjectDetails } from './pages/projectDetails'
import { AboutUs } from './pages/aboutUsPage'

export const RoutesWeb = ({ user, allUsers, isRowBased }) => {
  return (
    <Routes>
      <Route
        exact
        path='/'
        element={
          <LandingPage
            userState={user}
            allUsers={allUsers}
            isRowBased={isRowBased}
          />
        }
      />
      <Route
        exact
        path='/home'
        element={
          !user ? (
            <Navigate to='/' />
          ) : (
            <HomePage allUsers={allUsers} isRowBased={isRowBased} />
          )
        }
      />
      <Route
        exact
        path='/newproject'
        element={
          !user ? (
            <Navigate to='/' />
          ) : (
            <AddProjectPage allUsers={allUsers} isRowBased={isRowBased} />
          )
        }
      />
      <Route
        exact
        path='/project/:id'
        element={
          !user ? (
            <Navigate to='/' />
          ) : (
            <ProjectDetails isRowBased={isRowBased} />
          )
        }
      />
      <Route
        exact
        path='/about'
        element={
          !user ? <Navigate to='/' /> : <AboutUs isRowBased={isRowBased} />
        }
      />
    </Routes>
  )
}
