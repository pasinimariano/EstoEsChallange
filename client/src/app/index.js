import React from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'

import { RoutesWeb } from './routesWeb'
import { Navigation } from './components/navigation/navBar'
import { Footer } from './components/navigation/footer'
import { Styles } from './mainStyles'

export const App = () => {
  const location = useLocation().pathname
  const userState = useSelector(state => state.auth.logged)
  const allUsersState = useSelector(state => state.auth.users)

  return (
    <div className={Styles}>
      {location !== '/' ? <Navigation location={location} /> : null}
      <RoutesWeb user={userState} allUsers={allUsersState} />
      {location !== '/' ? <Footer /> : null}
    </div>
  )
}
