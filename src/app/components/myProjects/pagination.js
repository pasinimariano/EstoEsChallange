import React from 'react'
import { Container, Button } from 'react-bootstrap'
import { FcNext, FcPrevious } from 'react-icons/fc'

import { Styles } from './styles/listStyles'

export const Pagination = ({
  indexFirstProject,
  indexLastProject,
  allProjects,
  nextPage,
  prevPage,
  isRowBased
}) => {
  return (
    <Container
      style={Styles.paginationContainer(isRowBased)}
      className={
        isRowBased
          ? 'd-flex flex-column justify-content-center align-items-center'
          : 'd-flex justify-content-center align-items-center'
      }
    >
      <Container className='d-flex justify-content-center align-items-center'>
        <h6 style={Styles.legend}> {indexFirstProject + 1} - </h6>
        <h6 style={Styles.legend}>
          {indexLastProject > allProjects.length
            ? allProjects.length
            : indexLastProject}
        </h6>
        <h6 style={Styles.legend}> of {allProjects.length}</h6>
      </Container>
      <Container>
        <Button
          onClick={() => prevPage()}
          disabled={indexFirstProject === 0 ? true : false}
          style={Styles.button}
        >
          <FcPrevious />
        </Button>
        <Button
          onClick={() => nextPage(allProjects)}
          style={Styles.button}
          disabled={indexLastProject > allProjects.length ? true : false}
        >
          <FcNext />
        </Button>
      </Container>
    </Container>
  )
}
