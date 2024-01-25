import React from 'react'
import styled from 'styled-components'
import Intro from '../Intro'
import projects from '../../../data/projectData'
import  S3 from './img/S_03.jpg'

const project = projects[5]

const SAP = () => {
  return (
    <Container>
      <Intro title={project.title} description={project.description} tag1={project.type} src={project.img}/>
      <img className='fullscreen-image' src={S3}/>
    </Container>
  )
}

const Container = styled.div`
background: linear-gradient(180deg, #C7C7C7 45.4%, rgba(221, 221, 221, 0.66) 82.65%, rgba(221, 221, 221, 0.00) 100%);
`

export default SAP