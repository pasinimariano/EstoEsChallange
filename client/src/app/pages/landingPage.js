import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, Col, Row } from 'react-bootstrap'

import { Login } from '../components/auth/login'
import { Create } from '../components/auth/create'
import { Statement } from './statements/landingPageStatement'
import { Styles } from './styles/landingPageStyles.js'

export const LandingPage = ({ userState, allUsers }) => {
  const {
    loginValues,
    createValues,
    render,
    setRender,
    serverError,
    dispatch
  } = Statement()

  const navigate = useNavigate()

  useEffect(() => {
    userState ? navigate('/home') : null
  }, [userState])

  return (
    <div
      style={Styles.mainContainer}
      className='d-flex flex-column justify-content-center'
    >
      <Container>
        <Row className='justify-content-center align-items-center'>
          <Col xl={4} style={Styles.form}>
            {render === 'login' ? (
              <Login
                loginValues={loginValues}
                setRender={setRender}
                serverError={serverError}
                dispatch={dispatch}
                allUsersState={allUsers}
              />
            ) : (
              <Create
                createValues={createValues}
                setRender={setRender}
                serverError={serverError}
                dispatch={dispatch}
                userState={userState}
                allUsersState={allUsers}
              />
            )}
          </Col>
        </Row>
      </Container>
    </div>
  )
}
