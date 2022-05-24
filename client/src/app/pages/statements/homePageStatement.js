import { useSelector } from 'react-redux'

export const Statement = () => {
  const allProjects = useSelector(state => state.projects.projects)

  const getUserById = (id, state) => {
    const filter = state.filter(user => user.id === id)
    console.log(filter)
    if (filter.length !== 0) {
      const response = {
        fullname: `${filter[0].firstname} ${filter[0].lastname}`,
        avatar: filter[0].avatar
      }

      return response
    }

    return false
  }

  return {
    allProjects,
    getUserById
  }
}
