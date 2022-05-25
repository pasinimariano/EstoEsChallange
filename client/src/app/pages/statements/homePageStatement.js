import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

export const Statement = () => {
  const [indexFirstProject, setIndexFirstProject] = useState(0)
  const [indexLastProject, setindexLastProject] = useState(6)
  const projectsXpage = 6

  const dispatch = useDispatch()
  const allProjects = useSelector(state => state.projects.projects)
  const pagination = useSelector(state => state.projects.pagination)

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

  return {
    indexFirstProject,
    indexLastProject,
    projectsXpage,
    dispatch,
    allProjects,
    pagination,
    getUserById,
    nextPage,
    prevPage
  }
}
