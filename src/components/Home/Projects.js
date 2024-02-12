import React from "react";
import styled, { keyframes } from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import projects from "../../data/projectData";
import { useContext } from "react";
import { MouseContext } from "../../context/mouseContext";


import WorkButton from "../WorkButton";

const Projects = () => {
  const { cursorChangeHandler } = useContext(MouseContext);

  const [blur, setBlur] = useState(false);
  const handleBlur = () => {
    cursorChangeHandler("hover");
    setBlur(true);
  };
  const removeBlur = () => {
    cursorChangeHandler("");
    setBlur(false);
  };

  const navigate = useNavigate();
  const handleNavigate = (page) => {
    cursorChangeHandler("");
    
    window.scrollTo({
      top: 0,
      
    });
    navigate(page);
  };

  return (
    <Container id="project">
      <h2>PROJECTS & FEATURED WORKS</h2>
      <div
        className="all-project"
        onMouseEnter={handleBlur}
        onMouseLeave={removeBlur}
      >
        <ProjectBox className={blur ? "blurred" : ""}>
          {projects.map((project) => (
            <Project
              key={project.title}
              onClick={() => handleNavigate(`/${project.title}`)}
            >
              <h3>{project.title}</h3>
              <img alt="project" src={project.img} />
              <p className="description">
                {project.description}
              </p>
              <div className="project-info">
                <p>{project.type}</p>
                <p>{project.date}</p>
              </div>
            </Project>
          ))}
        </ProjectBox>
      </div>

      <WorkButton />
    </Container>
  );
};


const Container = styled.div`
  background-color: white;
  padding: 20px;
  position: relative;
  width: 100vw;

  h2 {
    font-family: Authentic130C;
    width: 100vw;
    margin: 50px 0px;
  }

  .blurred {
    filter: blur(2px);
  }

  

    
    

  @media (max-width: 900px) {
    .blurred {
      filter: blur(0px);
    }
  }
`;

const ProjectBox = styled.div`
  &:hover {
    filter: blur(0);
  }

  @media (max-width: 1100px) {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
  }
`;

const Project = styled.div`
  position: relative;
  transition: 500ms;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid black;
  padding: 50px 0;
  margin-bottom: 20px;

  img {
    transition: 500ms;
    margin: 0 10px;
    width: 0;
    height: 0;
    object-fit: cover;
    scale: 0;
    filter: blur(10px);

    // Responsive styles
    @media (max-width: 1100px) {
      top: 50px;
      padding: 0;
    }
  }

  p {
    text-align: end;
    font-family: Authentic130C;
    font-size: 18px;

    @media (max-width: 1100px) {
      display: none;
    }
  }

  h3 {
    flex: 0.25;
    font-size: 20px;
    font-family: Authentic90C;
    text-transform: uppercase;
    @media (max-width: 1100px) {
      font-size: 14px;
    }
  }

  .description {
    transition: 500ms;
    max-width: 400px;
    font-size: 1px; // change font from 1 to big for cool effect
    flex: 1;
    text-align: start;
    font-family: Authentic60C;
    

    // Responsive styles
    @media (max-width: 1100px) {
      max-width: 300px;
    }

    &:hover {
      font-size: 14px;

      @media (max-width: 1100px) {
        font-size: 12px;
      }
    }
  }

  .project-info {
    display: flex;
    flex: 0.2;
    justify-content: space-between;
    text-transform: uppercase;
    width: 250px;
    height: 0px;

    // Responsive styles
    @media (max-width: 1100px) {
      display: flex;
      flex-direction: column;
    }
  }

  &:hover {
    img {
      scale: 1;
      filter: blur(0);
      width: 22vw;
      height: 22vw;

      @media (max-width: 1100px) {
        margin: 0;
        margin-bottom: 10px;
        scale: 1;
        width: 95%;
        height: 180px;
        filter: blur(0px);
      }
    }

    .description {
      font-size: 20px;

      @media (max-width: 1100px) {
        font-size: 12px;
      }
    }
  }

  @media (max-width: 1100px) {
    flex-direction: column-reverse;
    height: 240px;
    width: 50%;
    border-bottom: none;
    width: 50%;
    padding: 0;
    margin-bottom: 0;

    .blurred {
      filter: blur(0px);
    }

    h3 {
      margin-bottom: 20px;
    }

    img {
      margin: 0;
      margin-bottom: 10px;
      scale: 1;
      width: 95%;
      min-height: 180px;
      filter: blur(0px);
    }

    .project-info {
      display: flex;
      flex-direction: row;
      width: 150px;
    }

    .description {
      max-width: 150px;
      font-size: 12px;
      margin-bottom: 20px;
    }
  }

  // Responsive styles
  @media (max-width: 500px) {
    width: 100vw;
    img {
      width: 100%;
    }
  }

  // Responsive styles
  /* @media (max-width: 350px) {
    img {
      width: 150px;
      left: 55vw;
    }
  } */
`;

export default Projects;
