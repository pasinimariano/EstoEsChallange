import React from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'

import { RoutesWeb } from './routesWeb'
import { Navigation } from './components/navigation/navBar'
import { Styles } from './mainStyles'
import { useMediaQuery } from './components/commons/mediaQuery'

export const App = () => {
  const isRowBased = useMediaQuery('(max-width: 480px)')
  const location = useLocation().pathname
  const userState = useSelector(state => state.auth.logged)
  const allUsersState = useSelector(state => state.auth.users)

  return (
    <div className={Styles}>
      {location !== '/' ? (
        <Navigation location={location} isRowBased={isRowBased} />
      ) : null}
      <RoutesWeb
        user={userState}
        allUsers={allUsersState}
        isRowBased={isRowBased}
      />
    </div>
  )
}
