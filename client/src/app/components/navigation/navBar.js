import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { HiHome } from 'react-icons/hi'
import { AiFillFolderAdd, AiFillEdit } from 'react-icons/ai'
import { SiAboutdotme } from 'react-icons/si'

import Logo from '../../assets/logo.png'
import { Styles } from './styles/navBarStyles'

export const Navigation = ({ location }) => {
  return (
    <Navbar bg='light' className='d-flex align-items-end'>
      <img alt='' src={Logo} className='d-inline-block align-top m-2' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='me-auto'>
          <Nav.Link href='/home'>
            <HiHome
              size={'25px'}
              style={location === '/home' ? Styles.selected : Styles.icon}
            />
          </Nav.Link>
          <Nav.Link href='/newproject'>
            <AiFillFolderAdd
              size={'25px'}
              style={location === '/newproject' ? Styles.selected : Styles.icon}
            />
          </Nav.Link>
          <Nav.Link href='/about'>
            <SiAboutdotme
              size={'25px'}
              style={location === '/about' ? Styles.selected : Styles.icon}
            />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
