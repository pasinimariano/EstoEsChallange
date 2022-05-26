import React from 'react'
import { useDispatch } from 'react-redux'
import { Navbar, Nav } from 'react-bootstrap'
import { HiHome } from 'react-icons/hi'
import { AiFillFolderAdd } from 'react-icons/ai'
import { SiAboutdotme } from 'react-icons/si'
import { GrLogout } from 'react-icons/gr'

import Logo from '../../assets/logo.png'
import { logoutUser } from '../../redux/features/authSlice'
import { Styles } from './styles/navBarStyles'

export const Navigation = ({ location, isRowBased }) => {
  const dispatch = useDispatch()
  return (
    <Navbar bg='light' className='d-flex align-items-end'>
      <img alt='' src={Logo} className='d-inline-block align-top m-2' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='me-auto d-flex align-items-end'>
          <Nav.Link href='/home'>
            <HiHome
              size={isRowBased ? '32px' : '25px'}
              style={location === '/home' ? Styles.selected : Styles.icon}
            />
          </Nav.Link>
          <Nav.Link href='/newproject'>
            <AiFillFolderAdd
              size={isRowBased ? '28px' : '25px'}
              style={location === '/newproject' ? Styles.selected : Styles.icon}
            />
          </Nav.Link>
          <Nav.Link href='/about'>
            <SiAboutdotme
              size={isRowBased ? '28px' : '25px'}
              style={location === '/about' ? Styles.selected : Styles.icon}
            />
          </Nav.Link>
          <Nav.Link>
            <GrLogout
              size={'25px'}
              style={Styles.icon}
              onClick={() => dispatch(logoutUser())}
            />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
