import React from 'react'
import { Container, Image } from 'react-bootstrap'
import Cv from '../assets/CvMarianoPasini.jpg'

import { Styles } from './styles/aboutUsStyles'

export const AboutUs = ({ isRowBased }) => {
  return (
    <Container style={Styles.mainContainer(isRowBased)}>
      <Image src={Cv} alt='CvMarianoPasini' style={Styles.image(isRowBased)} />
    </Container>
  )
}
