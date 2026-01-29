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
        <Container className='NavBar'>
          <Navbar.Brand className='navButton' href="/">Home</Navbar.Brand>
          <Navbar.Brand className='navButton' href="#aboutMeContainer">¿Quien Soy?</Navbar.Brand>
          <Navbar.Brand className='navButton' href="#proyectosContainer">Poyectos</Navbar.Brand>
          <Navbar.Brand className='navButton' href="#footerContainer">Contacto</Navbar.Brand>
        </Container>
        <Container className='burguerMenu'>
          <input type="checkbox" className='checkBarMenu' name="burguer" id="burguer" />
          <label for="burguer"><svg className="burguerSvgLogo" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 17H20M4 12H20M4 7H20" stroke="#f3ececff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg></label>
          
          <Container className='contNavMobile'>
            <Navbar.Brand className='navButton' href="/">Home</Navbar.Brand>
            <Navbar.Brand className='navButton' href="#aboutMeContainer">¿Quien Soy?</Navbar.Brand>
            <Navbar.Brand className='navButton' href="#proyectosContainer">Poyectos</Navbar.Brand>
            <Navbar.Brand className='navButton' href="#footerContainer">Contacto</Navbar.Brand>
          </Container>
        </Container>
      </Navbar>
    </>
  )
}

export default Header

