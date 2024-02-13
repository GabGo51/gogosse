import React, { useEffect } from "react";
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

  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1100); // Set initial state based on screen width

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 1100); // Update state when the screen size changes
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
              $isDesktop={isDesktop}
              key={project.title}
              onClick={() => handleNavigate(`/${project.title}`)}
            >
              <h3>{project.title}</h3>
              <img alt="project" src={project.img} />
              <p className="description">{project.description}</p>
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
    font-family: Authentic60C;
    width: 100vw;
    margin: 50px 0px;
  }
`;

const ProjectBox = styled.div`
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
    // Responsive styles
    @media (max-width: 1100px) {
      width: 50%;
      height: 100%;
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
      display: none;
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

  ${({ $isDesktop }) =>
    $isDesktop &&
    `
    &:hover {
    img {
      scale: 1;
      width: 22vw;
      height: 22vw;
    }

    .description {
      font-size: 20px;
    }
  }
  `}

  @media (max-width: 1100px) {
    flex-direction: column-reverse;
    height: 240px;
    border-bottom: none;
    width: 50%;
    padding: 0;
    margin-bottom: 0;

    h3 {
      margin-bottom: 20px;
    }

    img {
      margin: 0;
      margin-bottom: 10px;
      scale: 1;
      width: 95%;
      min-height: 180px;
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
`;

export default Projects;
