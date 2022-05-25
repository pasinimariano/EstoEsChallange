import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'

export const Statement = () => {
  const [formValues, setFormValues] = useState({
    id: uuidv4(),
    name: '',
    description: '',
    manager: '',
    assigned: '',
    status: '',
    created_at: Date().toLocaleString(),
    updated_at: ''
  })

  const status = [
    { id: 'unassigned', firstname: 'unassigned', lastname: '' },
    { id: 'assigned', firstname: 'assigned', lastname: '' },
    { id: 'on-progress', firstname: 'on-progress', lastname: '' },
    { id: 'review', firstname: 'review', lastname: '' },
    { id: 'done', firstname: 'done', lastname: '' },
    { id: 'standby', firstname: 'standby', lastname: '' }
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
