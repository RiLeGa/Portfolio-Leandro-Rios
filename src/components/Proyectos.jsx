import React from 'react'
import LeanImage from '../assets/leanImage.png'
import './proyectos.css'
import { Container } from 'react-bootstrap'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import challLogo from '../assets/chall.png'
import pokeLogo from '../assets/pokeapi.png'



function Proyectos() {

  return (
    <>
        <Container id='proyectosContainer' className='proyectosContainer'>
          <Container >
            <h2 className='sectionTitle'>Mis proyectos</h2>
          </Container>
          <Container className='listaProyectos'>
            <a className='linkAProyecto' href="https://challenge-planify-chi.vercel.app/">
              <Card>
                <CardContent>
                  <img src={challLogo} alt="challLogo"/>
                </CardContent>
              </Card>  
              <span>Gestion de turnos Challenge Tecnico</span>
            </a>
            <a className='linkAProyecto' href="https://heroic-cannoli-4f2d6d.netlify.app/">
              <Card>
                <CardContent>
                  <img src={pokeLogo} alt="pokeLogo"/>
                </CardContent>
              </Card>
              <span>Pokedex Pokeapi + React</span>  
            </a>
            <a className='linkAProyecto' href="https://challenge-planify-chi.vercel.app/">
              <Card>
                <CardContent>
                  <img src={challLogo} alt="challLogo"/>
                </CardContent>
              </Card>  
              <span>Gestion de turnos Challenge Tecnico</span>
            </a>
            <a className='linkAProyecto' href="https://heroic-cannoli-4f2d6d.netlify.app/">
              <Card>
                <CardContent>
                  <img src={pokeLogo} alt="pokeLogo"/>
                </CardContent>
              </Card>
              <span>Pokedex Pokeapi + React</span>  
            </a>
          </Container>
          <Container className='listaProyectos2'>
            <a className='linkAProyecto' href="https://challenge-planify-chi.vercel.app/">
              <Card>
                <CardContent>
                  <img src={challLogo} alt="challLogo"/>
                </CardContent>
              </Card>  
              <span>Gestion de turnos Challenge Tecnico</span>
            </a>
            <a className='linkAProyecto' href="https://heroic-cannoli-4f2d6d.netlify.app/">
              <Card>
                <CardContent>
                  <img src={pokeLogo} alt="pokeLogo"/>
                </CardContent>
              </Card>
              <span>Pokedex Pokeapi + React</span>  
            </a>
            <a className='linkAProyecto' href="https://challenge-planify-chi.vercel.app/">
              <Card>
                <CardContent>
                  <img src={challLogo} alt="challLogo"/>
                </CardContent>
              </Card>  
              <span>Gestion de turnos Challenge Tecnico</span>
            </a>
            <a className='linkAProyecto' href="https://heroic-cannoli-4f2d6d.netlify.app/">
              <Card>
                <CardContent>
                  <img src={pokeLogo} alt="pokeLogo"/>
                </CardContent>
              </Card>
              <span>Pokedex Pokeapi + React</span>  
            </a>
          </Container>
        </Container>
    </>
  )
}

export default Proyectos



