import React from 'react'
import styled from 'styled-components'
import projects from "../../data/projectData";
import { useParams } from 'react-router-dom';
const ProjectIntro = () => {

  const { projectname } = useParams();
  const project = projects.find((p) => p.name === projectname);

  if (!project) {
    return <div>Project not found</div>;
  }

  const { title, description, type, img } = project;
  console.log(project);
  return (
    <Container>
      <div className='top-proj'>
        <h1>{title}</h1>
        <p>{description}</p>
        <ul>
          <li>{type}</li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div>
        <img src={img}/>
      </div>
      

    </Container>
  )
}

const Container = styled.div`
padding: 20px;
div{
  width: 100%;
  display: flex;
  justify-content: space-between;

  h1{
    flex: 0.5;
    font-family: tagada;
    font-weight: 100;
    font-size: 60px;
    text-transform: uppercase;
  }
  p{
    max-width: 600px;
    font-size: 14px;
    font-family: Authentic60;
    font-weight: 600;
    text-transform: uppercase;
  }

  img{
    width: 100%;
    height: 600px;
    object-fit: cover;
    margin-top: 50px;
  }

  ul{
    font-size: 18px;
    font-family: Authentic60;
    font-weight: 300;
    text-transform: uppercase;
  }

  
}

`

export default ProjectIntro