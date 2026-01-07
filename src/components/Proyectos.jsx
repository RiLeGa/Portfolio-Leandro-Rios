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


function Proyectos() {

  return (
    <>
        <Container id='proyectosContainer' className='proyectosContainer'>
          <Container >
            <h1>Mis proyectos</h1>
          </Container>
          <Container className='listaProyectos'>
            <a className='linkAProyecto' href="https://challenge-planify-chi.vercel.app/">
              <Card>
                <CardContent>
                  <img src="src/assets/chall.png" alt="" />
                </CardContent>
              </Card>  
              <span>Gestion de turnos Challenge Tecnico</span>
            </a>
            <a className='linkAProyecto' href="https://heroic-cannoli-4f2d6d.netlify.app/">
              <Card>
                <CardContent>
                  <img src="src/assets/pokeapi.png" alt="" />
                </CardContent>
              </Card>
              <span>Pokedex Pokeapi + React</span>  
            </a>
            <a className='linkAProyecto' href="https://challenge-planify-chi.vercel.app/">
              <Card>
                <CardContent>
                  <img src="src/assets/chall.png" alt="" />
                </CardContent>
              </Card>  
              <span>Gestion de turnos Challenge Tecnico</span>
            </a>
            <a className='linkAProyecto' href="https://heroic-cannoli-4f2d6d.netlify.app/">
              <Card>
                <CardContent>
                  <img src="src/assets/pokeapi.png" alt="" />
                </CardContent>
              </Card>
              <span>Pokedex Pokeapi + React</span>  
            </a>
          </Container>
          <Container className='listaProyectos2'>
            <a className='linkAProyecto' href="https://challenge-planify-chi.vercel.app/">
              <Card>
                <CardContent>
                  <img src="src/assets/chall.png" alt="" />
                </CardContent>
              </Card>  
              <span>Gestion de turnos Challenge Tecnico</span>
            </a>
            <a className='linkAProyecto' href="https://heroic-cannoli-4f2d6d.netlify.app/">
              <Card>
                <CardContent>
                  <img src="src/assets/pokeapi.png" alt="" />
                </CardContent>
              </Card>
              <span>Pokedex Pokeapi + React</span>  
            </a>
            <a className='linkAProyecto' href="https://challenge-planify-chi.vercel.app/">
              <Card>
                <CardContent>
                  <img src="src/assets/chall.png" alt="" />
                </CardContent>
              </Card>  
              <span>Gestion de turnos Challenge Tecnico</span>
            </a>
            <a className='linkAProyecto' href="https://heroic-cannoli-4f2d6d.netlify.app/">
              <Card>
                <CardContent>
                  <img src="src/assets/pokeapi.png" alt="" />
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



