import React from 'react'
import styled from 'styled-components'
import Intro from '../Intro'
import projects from '../../../data/projectData'

const project = projects[5]

const SAP = () => {
  return (
    <Container>
      <Intro title={project.title} description={project.description} tag1={project.type} src={project.img}/>

    </Container>
  )
}

const Container = styled.div`

`

export default SAP