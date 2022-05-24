import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  projects: [],
  error: ''
}

export const ProjectsSlices = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    addNew: (state, action) => {
      state.projects = [...state.projects, action.payload]
      state.error = ''
    },
    setError: (state, action) => {
      state.error = action.payload
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

export const { addNew, setError } = ProjectsSlices.actions
export default ProjectsSlices.reducer
