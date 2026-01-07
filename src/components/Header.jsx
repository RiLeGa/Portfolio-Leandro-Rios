import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import logo from '../assets/logoLean.png'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './header.css'



function Header() {
  return (
    <>
      <Navbar expand="lg" className="contHeader bg-body-tertiary">
        <Container className='contLogo'>
          <Navbar.Brand className='navLogo' href="/" ><img className="leanLogo" src={logo} alt="Lean Logo" /></Navbar.Brand>
        </Container>
        <Container>
          <Navbar.Brand className='navButton' href="/">Home</Navbar.Brand>
          <Navbar.Brand className='navButton' href="#aboutMeContainer">¿Quien Soy?</Navbar.Brand>
          <Navbar.Brand className='navButton' href="#proyectosContainer">Poyectos</Navbar.Brand>
          <Navbar.Brand className='navButton' href="#footerContainer">Contacto</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}

export default Header

