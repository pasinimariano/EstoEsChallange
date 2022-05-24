import React from 'react'

import { ProjectList } from '../components/myProjects/projectsList'
import { Statement } from './statements/homePageStatement'

export const HomePage = ({ allUsers }) => {
  const { allProjects, getUserById } = Statement()

  return (
    <ProjectList
      allProjects={allProjects}
      getUserById={getUserById}
      allUsers={allUsers}
    />
  )
}
