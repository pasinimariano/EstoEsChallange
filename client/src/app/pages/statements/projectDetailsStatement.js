import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'

export const Statement = () => {
  const [modalShow, setModalShow] = useState(false)
  const location = useLocation()
  const { project, manager, assigned } = location.state

  const dispatch = useDispatch()

  return {
    modalShow,
    setModalShow,
    project,
    manager,
    assigned,
    dispatch
  }
}
