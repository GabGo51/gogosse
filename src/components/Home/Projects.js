import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import proj1 from "./img/proj1.webp";
import proj2 from "./img/proj2.webp";
import proj3 from "./img/proj3.webp";
import proj4 from "./img/proj4.webp";
import proj5 from "./img/proj5.webp";
import proj6 from "./img/proj6.webp";
import proj7 from "./img/proj7.webp";

const Projects = () => {
  const [blur, setBlur] = useState(false);
  const handleBlur = () => {
    setBlur(true);
  };
  const removeBlur = () => {
    setBlur(false);
  };

  const navigate = useNavigate();
  const handleNavigate = (page) => {
    navigate(page);
  };

  return (
    <Container>
      <h2>PROJECTS & FEATURED WORKS</h2>
      <div
        className="all-project"
        onMouseEnter={handleBlur}
        onMouseLeave={removeBlur}
      >
        <ProjectBox className={blur ? "blurred" : ""}>
          <Project blur={blur} onClick={() => handleNavigate("/about")}>
            <img
              alt="project"
              src={proj1}
            />
            <h3>PROJET</h3>
            <p className="description">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque
              voluptas sit aspernatur aut odit aut fugit, sed quia consequunt
            </p>
            <div className="project-info">
              <p> Evenement</p>
              <p> 2023</p>
            </div>
          </Project>
        </ProjectBox>
        <ProjectBox className={blur ? "blurred" : ""}>
          <Project>
            <img alt="project" src={proj2} />
            <h3>PROJET</h3>
            <p className="description">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque
              voluptas sit aspernatur aut odit aut fugit, sed quia consequunt
            </p>
            <div className="project-info">
              <p> Evenement</p>
              <p> 2023</p>
            </div>
          </Project>
        </ProjectBox>
        <ProjectBox className={blur ? "blurred" : ""}>
          <Project>
            <img alt="project" src={proj3} />
            <h3>PROJET</h3>
            <p className="description">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque
              voluptas sit aspernatur aut odit aut fugit, sed quia consequunt
            </p>
            <div className="project-info">
              <p> Evenement</p>
              <p> 2023</p>
            </div>
          </Project>
        </ProjectBox>
        <ProjectBox className={blur ? "blurred" : ""}>
          <Project>
            <img alt="project" src={proj4} />
            <h3>PROJET</h3>
            <p className="description">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque
              voluptas sit aspernatur aut odit aut fugit, sed quia consequunt
            </p>
            <div className="project-info">
              <p> Evenement</p>
              <p> 2023</p>
            </div>
          </Project>
        </ProjectBox>
        <ProjectBox className={blur ? "blurred" : ""}>
          <Project>
            <img alt="project" src={proj5} />
            <h3>PROJET</h3>
            <p className="description">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque
              voluptas sit aspernatur aut odit aut fugit, sed quia consequunt
            </p>
            <div className="project-info">
              <p> Evenement</p>
              <p> 2023</p>
            </div>
          </Project>
        </ProjectBox>
        <ProjectBox className={blur ? "blurred" : ""}>
          <Project>
            <img alt="project" src={proj6} />
            <h3>PROJET</h3>
            <p className="description">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque
              voluptas sit aspernatur aut odit aut fugit, sed quia consequunt
            </p>
            <div className="project-info">
              <p> Evenement</p>
              <p> 2023</p>
            </div>
          </Project>
        </ProjectBox>
        <ProjectBox className={blur ? "blurred" : ""}>
          <Project>
            <img alt="project" src={proj7} />
            <h3>PROJET</h3>
            <p className="description">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque
              voluptas sit aspernatur aut odit aut fugit, sed quia consequunt
            </p>
            <div className="project-info">
              <p> Evenement</p>
              <p> 2023</p>
            </div>
          </Project>
        </ProjectBox>
      </div>

      <p className="title">Lets Work</p>
    </Container>
  );
};

const Container = styled.div`
  background-color: white;
  padding: 40px;
  position: relative;
  padding-top: 20px;

  h2 {
    font-family: Authentic130C;
    width: 100vw;
    margin: 50px 0px;
  }

  .blurred {
    filter: blur(2px);
  }

  .title {
    font-size: 50px;
    font-weight: 600;
    margin-bottom: 50px;
    font-family: Authentic60;
    width: 100vw;
    text-align: center;
    margin-top: 100px;
  }

  .box {
    margin-top: 100px;
  }

  @media (max-width: 750px) {
    padding: 20px;

    .blurred {
      filter: blur(0px);
    }
  }
`;

const ProjectBox = styled.div`
  &:hover {
    filter: blur(0);
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

  @media (max-width: 1100px) {
    padding: 20px 0;
  }

  &:hover {
    .description {
      font-size: 20px;

      @media (max-width: 750px) {
        font-size: 12px;
      }
    }
  }

  img {
    transition: 500ms;
    width: 18vw;
    height: 18vw;
    object-fit: cover;
    position: absolute;
    left: 13vw;
    top: 2vw;
    scale: 0;
    filter: blur(10px);
    @media (max-width: 1100px) {
      top: 50px;
    }
  }
  p {
    text-align: end;
    font-family: Authentic130C;
    font-size: 18px;
  }
  h3 {
    flex: 0.4;
    font-size: 20px;
    font-family: Tagada;
  }
  .description {
    transition: 500ms;
    max-width: 400px;
    font-size: 1px; // change font from 1 to big for cool effect
    flex: 1;
    text-align: start;
    font-family: Authentic60C;
    text-transform: uppercase;
  }

  .project-info {
    display: flex;
    flex: 0.2;
    justify-content: space-between;
    width: 250px;
  }

  &:hover {
    
    img {
      scale: 1;
      filter: blur(0);
    }

    padding: 100px 0px;

    @media (max-width: 1100px) {
      padding: 70px 0px;
    }

    @media (max-width: 750px) {
      padding: 0px 0px;
    }
  }

  @media (max-width: 1100px) {
    .project-info {
      display: flex;
      flex-direction: column;
    }

    .description {
      max-width: 300px;
    }

    &:hover {
      .description {
        font-size: 14px;
        @media (max-width: 750px) {
          font-size: 12px;
        }
      }
    }
  }
  @media (max-width: 750px) {
    &:hover{
      padding: 20px 0;
    }
    flex-direction: column;

    .blurred {
      filter: blur(0px);
    }

    h3 {
      margin-bottom: 20px;
    }

    img {
      scale: 1;
      width: 180px;
      height: 180px;
      filter: blur(0px);
      left: 60vw;
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

  @media (max-width: 500px) {
    
    img {
      min-width: 150px;
      left: 45vw;
    }
  }
`;

export default Projects;
