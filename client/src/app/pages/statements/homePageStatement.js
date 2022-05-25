import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

export const Statement = () => {
  // States

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

  // Store

  const dispatch = useDispatch()
  const allProjects = useSelector(state => state.projects.projects)
  const pagination = useSelector(state => state.projects.pagination)

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

  return {
    filter,
    handleFilter,
    selection,
    status,
    indexFirstProject,
    indexLastProject,
    projectsXpage,
    dispatch,
    allProjects,
    pagination,
    getUserById,
    nextPage,
    prevPage,
    handleNameSelection,
    handleStatusSelection
  }
}
