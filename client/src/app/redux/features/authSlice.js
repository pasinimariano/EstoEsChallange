import { createSlice } from '@reduxjs/toolkit'

import { Users } from '../mockData/index'

const initialState = {
  users: Users,
  created: false,
  logged: false,
  error: ''
}

export const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    newUser: (state, action) => {
      state.users = [...state.users, action.payload]
      state.created = action.payload
    },
    logOut: state => {
      state.logged = false
      state.error = ''
      state.created = false
    },
    logIn: (state, action) => {
      state.logged = action.payload
      state.error = ''
      state.created = false
    },
    setError: (state, action) => {
      state.error = action.payload
      state.created = false
    }
  }
})

export const loginUser = (data, state) => async dispatch => {
  const user = state.filter(obj => obj.email === data.email)

  if (user.length === 0)
    dispatch(setError(`El email ${data.email} es invalido`))
  else if (user[0].password !== data.password)
    dispatch(setError('La contraseña ingresada es incorrecta'))
  else {
    const userData = {
      id: user[0].id,
      firstname: user[0].firstname,
      lastname: user[0].lastname,
      email: user[0].email,
      avatar: user[0].avatar
    }
    dispatch(logIn(userData))
  }
}

export const createUser = data => async dispatch => {
  try {
    dispatch(newUser(data))
  } catch (error) {
    dispatch(setError(error))
  }
}

export const logoutUser = dispatch => {
  dispatch(logOut())
}

export const { newUser, logIn, logOut, setError } = AuthSlice.actions
export default AuthSlice.reducer
