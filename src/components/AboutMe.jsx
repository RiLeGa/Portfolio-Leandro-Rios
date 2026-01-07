import React from 'react'
import LeanImage from '../assets/leanImage.png'
import './aboutMe.css'
import { Container } from 'react-bootstrap'

function AboutMe() {
  return (
    <>
      <Container id='aboutMeContainer' className='aboutMeContainer'>
        <Container >
          <h1>¿Quien soy?</h1>
        </Container>
        <Container className='aboutMeText'>
          <img className="leanImage" src={LeanImage} alt="Emanuel Logo" />
          <h2>Hola!! mi nombre es Leandro, soy un apasionado programador web fullstack con experiencia en desarrollo en Node.js, .NET Core y conocimientos en React. Mi objetivo es aplicar mis habilidades y conocimientos para contribuir al éxito de nuevos proyectos. Estoy constantemente aprendiendo y mejorando mis habilidades para mantenerme al día con las últimas tecnologías y tendencias. ¡No dudes en contactarme si crees que puedo ser una buena incorporación a tu equipo!</h2>
        </Container>
      </Container>
    </>
  )
}

export default AboutMe