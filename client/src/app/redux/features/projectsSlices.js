import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  projects: [],
  pagination: [],
  created: '',
  error: ''
}

export const ProjectsSlices = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    addNew: (state, action) => {
      state.projects = [...state.projects, action.payload]
      state.created = true
      state.error = ''
    },
    setError: (state, action) => {
      state.error = action.payload
    },
    setCreated: (state, action) => {
      state.created = action.payload
    },
    setPagination: (state, action) => {
      state.pagination = action.payload
    }
  }
})

export const addNewProject = data => dispatch => {
  try {
    dispatch(addNew(data))
  } catch (error) {
    dispatch(setError(error))
  }
}

export const deleteCreated = data => dispatch => {
  dispatch(setCreated(data))
}

export const getPagination = (projects, page, offset) => dispatch => {
  const paginatedProjects = projects.slice(page, offset)

  dispatch(setPagination(paginatedProjects))
}

export const {
  addNew,
  setError,
  setCreated,
  setPagination
} = ProjectsSlices.actions
export default ProjectsSlices.reducer
