import React, { useEffect } from 'react'

import { NewProject } from '../components/myProjects/newProject'
import { Statement } from './statements/addProjectPageStatement'
import { addNewProject, deleteCreated } from '../redux/features/projectsSlices'

export const AddProjectPage = ({ allUsers, isRowBased }) => {
  const {
    formValues,
    setFormValues,
    status,
    dispatch,
    serverError,
    created
  } = Statement()

  useEffect(() => {
    if (created) {
      setTimeout(() => dispatch(deleteCreated(false)), 3000)
    }
  }, [created])

  return (
    <NewProject
      formValues={formValues}
      status={status}
      dispatch={dispatch}
      serverError={serverError}
      allUsers={allUsers}
      created={created}
      addNewProject={addNewProject}
      setFormValues={setFormValues}
      isRowBased={isRowBased}
    />
  )
}
