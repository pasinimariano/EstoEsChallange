import React from 'react'
import { useSelector } from 'react-redux'

import { RoutesWeb } from './routesWeb'
import { Styles } from './mainStyles'

export const App = () => {
  const userState = useSelector(state => state.auth.logged)
  const allUsersState = useSelector(state => state.auth.users)

  return (
    <div className={Styles}>
      <RoutesWeb user={userState} allUsers={allUsersState} />
    </div>
  )
}
