import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Avatar from '../../assets/avatar.png'

export const Statement = () => {
  const loginValues = { email: '', password: '' }
  const createValues = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    avatar: Avatar
  }
  const [render, setRender] = useState('login')

  const serverError = useSelector(state => state.auth.error)
  const dispatch = useDispatch()

  return {
    loginValues,
    createValues,
    render,
    setRender,
    serverError,
    dispatch
  }
}
