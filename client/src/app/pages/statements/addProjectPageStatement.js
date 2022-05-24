import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

export const Statement = () => {
  const [formValues, setFormValues] = useState({
    name: '',
    description: '',
    manager: '',
    assigned_to: '',
    status: ''
  })

  const status = [
    { id: 1, firstname: 'unassigned', lastname: '' },
    { id: 2, firstname: 'assigned', lastname: '' },
    { id: 3, firstname: 'on-progress', lastname: '' },
    { id: 4, firstname: 'review', lastname: '' },
    { id: 5, firstname: 'done', lastname: '' },
    { id: 6, firstname: 'standby', lastname: '' }
  ]

  const dispatch = useDispatch()

  const serverError = useSelector(state => state.projects.error)
  const created = useSelector(state => state.projects.created)

  return {
    formValues,
    setFormValues,
    status,
    dispatch,
    serverError,
    created
  }
}
