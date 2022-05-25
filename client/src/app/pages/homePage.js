import React, { useEffect } from 'react'

import { ProjectList } from '../components/myProjects/projectsList'
import { Statement } from './statements/homePageStatement'
import { getPagination } from '../redux/features/projectsSlices'

export const HomePage = ({ allUsers }) => {
  const {
    indexFirstProject,
    indexLastProject,
    projectsXpage,
    dispatch,
    pagination,
    allProjects,
    getUserById,
    nextPage,
    prevPage
  } = Statement()

  useEffect(() => {
    dispatch(getPagination(allProjects, indexFirstProject, indexLastProject))
  }, [indexFirstProject, indexLastProject])

  return (
    <ProjectList
      pagination={pagination}
      indexFirstProject={indexFirstProject}
      indexLastProject={indexLastProject}
      projectsXpage={projectsXpage}
      allProjects={allProjects}
      getUserById={getUserById}
      nextPage={nextPage}
      prevPage={prevPage}
      allUsers={allUsers}
    />
  )
}
