import React, { useEffect } from 'react'

import { ProjectList } from '../components/myProjects/projectsList'
import { Statement } from './statements/homePageStatement'
import { getPagination } from '../redux/features/projectsSlices'

export const HomePage = ({ allUsers }) => {
  const {
    filter,
    handleFilter,
    selection,
    indexFirstProject,
    indexLastProject,
    projectsXpage,
    dispatch,
    pagination,
    allProjects,
    getUserById,
    nextPage,
    prevPage,
    handleNameSelection,
    handleStatusSelection,
    status
  } = Statement()

  useEffect(() => {
    handleFilter()
  }, [selection])

  useEffect(() => {
    if (filter) {
      dispatch(getPagination(filter, indexFirstProject, indexLastProject))
    }
  }, [filter, indexFirstProject, indexLastProject])

  return (
    <ProjectList
      selection={selection}
      pagination={pagination}
      status={status}
      indexFirstProject={indexFirstProject}
      indexLastProject={indexLastProject}
      projectsXpage={projectsXpage}
      allProjects={allProjects}
      allUsers={allUsers}
      getUserById={getUserById}
      nextPage={nextPage}
      prevPage={prevPage}
      handleNameSelection={handleNameSelection}
      handleStatusSelection={handleStatusSelection}
    />
  )
}
