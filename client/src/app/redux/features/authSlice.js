import { createSlice } from '@reduxjs/toolkit'

import { Users } from '../mockData/index'

const initialState = {
  logged: false,
  error: ''
}

export const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logOut: state => {
      state.logged = false
      state.error = ''
    },
    logIn: (state, action) => {
      state.logged = action.payload
      state.error = ''
    },
    setError: (state, action) => {
      state.error = action.payload
    }
  }
})

export const loginUser = data => async dispatch => {
  const user = Users.filter(obj => obj.email === data.email)

  if (user.length === 0)
    dispatch(setError(`El email ${data.email} es invalido`))
  else if (user[0].password !== data.password)
    dispatch(setError('La contraseña ingresada es incorrecta'))
  else {
    const userData = {
      id: user[0].id,
      firstname: user[0].first_name,
      lastname: user[0].last_name,
      email: user[0].email,
      avatar: user[0].avatar
    }
    dispatch(logIn(userData))
  }
}

export const logoutUser = dispatch => {
  dispatch(logOut())
}

export const { logIn, logOut, setError } = AuthSlice.actions
export default AuthSlice.reducer
