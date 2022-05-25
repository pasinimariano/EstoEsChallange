import React from 'react'
import { Container, Image } from 'react-bootstrap'
import Cv from '../assets/CvMarianoPasini.jpg'

export const AboutUs = () => {
  return (
    <Container>
      <Image src={Cv} alt='CvMarianoPasini' />
    </Container>
  )
}
