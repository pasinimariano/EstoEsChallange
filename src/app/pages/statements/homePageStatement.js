import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

export const Statement = () => {
  // States

  const [modalShow, setModalShow] = useState({ isOpen: false, data: '' })
  const [filter, setFilter] = useState([])
  const [selection, setSelection] = useState({
    choice: 'all',
    name: '',
    status: 'All'
  })
  const [indexFirstProject, setIndexFirstProject] = useState(0)
  const [indexLastProject, setindexLastProject] = useState(6)
  const projectsXpage = 6
  const status = [
    'All',
    'unassigned',
    'assigned',
    'on-progress',
    'review',
    'done',
    'standby'
  ]
  const [formValues, setFormValues] = useState({
    id: '',
    name: '',
    description: '',
    manager: '',
    assigned: '',
    status: '',
    created_at: '',
    updated_at: Date().toLocaleString()
  })

  // Store

  const dispatch = useDispatch()
  const allProjects = useSelector(state => state.projects.projects)
  const pagination = useSelector(state => state.projects.pagination)
  const created = useSelector(state => state.projects.created)
  const serverError = useSelector(state => state.projects.error)

  // Handle Changes

  const getUserById = (id, state) => {
    const filter = state.filter(user => user.id === id)
    if (filter.length !== 0) {
      const response = {
        fullname: `${filter[0].firstname} ${filter[0].lastname}`,
        avatar: filter[0].avatar
      }

      return response
    }

    return false
  }

  const nextPage = projects => {
    if (indexLastProject < projects.length) {
      setIndexFirstProject(indexFirstProject + projectsXpage)
      setindexLastProject(indexLastProject + projectsXpage)
    }
  }

  const prevPage = () => {
    if (indexFirstProject > 0) {
      setIndexFirstProject(indexFirstProject - projectsXpage)
      setindexLastProject(indexLastProject - projectsXpage)
    }
  }

  const handleNameSelection = event => {
    const { value } = event.target

    setSelection(prevState => ({
      ...prevState,
      choice: '',
      status: '',
      name: value
    }))
  }

  const handleStatusSelection = event => {
    const { value } = event.target

    setSelection(prevState => ({
      ...prevState,
      choice: '',
      status: value,
      name: ''
    }))
  }

  const getByName = name => {
    const filteredProjects = allProjects.filter(project => {
      return project.name.toLowerCase().includes(name.toLowerCase())
    })

    setIndexFirstProject(0)
    setindexLastProject(projectsXpage)
    return filteredProjects
  }

  const getStatus = status => {
    if (status === 'All') return allProjects
    const filteredProjects = allProjects.filter(project => {
      return project.status === status
    })

    setIndexFirstProject(0)
    setindexLastProject(projectsXpage)

    return filteredProjects
  }

  const handleFilter = () => {
    if (selection.choice === 'all') setFilter(allProjects)
    else if (selection.name) setFilter(getByName(selection.name))
    else if (selection.status) setFilter(getStatus(selection.status))
  }

  const handleForm = event => {
    const { name, value } = event.target

    setFormValues(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return {
    modalShow,
    setModalShow,
    filter,
    handleFilter,
    selection,
    status,
    formValues,
    setFormValues,
    indexFirstProject,
    indexLastProject,
    projectsXpage,
    serverError,
    dispatch,
    allProjects,
    created,
    pagination,
    getUserById,
    nextPage,
    prevPage,
    handleNameSelection,
    handleStatusSelection,
    handleForm
  }
}
