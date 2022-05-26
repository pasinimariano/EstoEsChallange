import React, { useEffect } from 'react'

import { ProjectList } from '../components/myProjects/projectsList'
import { Statement } from './statements/homePageStatement'
import { getPagination } from '../redux/features/projectsSlices'

export const HomePage = ({ allUsers, isRowBased }) => {
  const {
    modalShow,
    setModalShow,
    filter,
    handleFilter,
    selection,
    indexFirstProject,
    indexLastProject,
    projectsXpage,
    status,
    formValues,
    setFormValues,
    dispatch,
    pagination,
    allProjects,
    serverError,
    getUserById,
    nextPage,
    prevPage,
    handleNameSelection,
    handleStatusSelection,
    handleForm
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
      modalShow={modalShow}
      setModalShow={setModalShow}
      selection={selection}
      pagination={pagination}
      status={status}
      indexFirstProject={indexFirstProject}
      indexLastProject={indexLastProject}
      projectsXpage={projectsXpage}
      formValues={formValues}
      setFormValues={setFormValues}
      allProjects={allProjects}
      serverError={serverError}
      dispatch={dispatch}
      allUsers={allUsers}
      getUserById={getUserById}
      nextPage={nextPage}
      prevPage={prevPage}
      handleNameSelection={handleNameSelection}
      handleStatusSelection={handleStatusSelection}
      handleForm={handleForm}
      isRowBased={isRowBased}
    />
  )
}
