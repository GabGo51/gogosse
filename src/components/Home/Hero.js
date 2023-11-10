import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import projects from "../../data/projectData";

const Hero = () => {
  const [activeProject, setActiveProject] = useState(projects[0]);

  const handleHover = (projectTitle) => {
    const selectedProject = projects.find(
      (project) => project.title === projectTitle
    );

    if (selectedProject) {
      setActiveProject(selectedProject);
    }
  };

  return (
    <Container>
      <div className="top">
        <TextBox>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
        </TextBox>
        <ImgBox>
          <div>
            <p>{activeProject.title}</p>
            <p>{activeProject.type}</p>
          </div>
          <div className="cadre">
            {projects.map((project) => (
              <img
                key={project.title}
                alt="project"
                src={
                  project.title === activeProject.title
                    ? project.img
                    : project.img
                }
                className={
                  project.title === activeProject.title ? "" : "fade-out"
                }
              />
            ))}
          </div>
        </ImgBox>
      </div>
      <LettersBox>
        <div className="box">
          <div className="g1" onMouseEnter={() => handleHover("Turbine")}>
            <p>G</p>
          </div>

          <div className="o1" onMouseEnter={() => handleHover("Salon Aventure et Plein-Air")}>
            <p>O</p>
          </div>

          <div className="g2" onMouseEnter={() => handleHover("Lapies")}>
            <p>G</p>
          </div>

          <div className="o2" onMouseEnter={() => handleHover("Petits Budgets Grands Gouts")}>
            <p>O</p>
          </div>

          <div className="s1" onMouseEnter={() => handleHover("Horizon")}>
            <p>S</p>
          </div>

          <div className="s2" onMouseEnter={() => handleHover("Festival International de Jazz de Montreal")}>
            <p>S</p>
          </div>

          <div className="e" onMouseEnter={() => handleHover("Turbine7")}>
            <p>E</p>
          </div>
        </div>
      </LettersBox>
    </Container>
  );
};

const appearAnimation = keyframes`
   0% {
    transform: translateY(100%);
  }
  60% {
    transform: translateY(-2.5%);
  }
  80% {
    transform: translateY(2.5%);
  }
  100% {
    transform: translateY(0%);
  }

`;

const clearAnimation = keyframes`
 0%{
  transform: translateY(0%);
  opacity: 1;
 }
 100%{
  transform: translateY(-110%);
  opacity: 0.8;
 }
`;

const Container = styled.div`
  padding: 40px;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #dcdcdc;
  padding-bottom: 80px;

  .top {
    display: flex;
    justify-content: space-between;
  }

  @media (max-width: 1100px) {
    justify-content: center;
    padding-bottom: 20px;

    .top {
      flex-direction: column;
    }
  }

  @media (max-width: 750px) {
    padding: 20px;
  }
`;

const ImgBox = styled.div`
  div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    font-family: Authentic90;
  }

  .cadre {
    position: relative;
    width: 38vw;
    height: 18vw;
    overflow: hidden;
    border: none;
  }

  img {
    transition: 500ms;
    border: none;
    width: 38vw;
    height: 18vw;
    position: absolute;
    object-fit: cover;
    animation: ${appearAnimation} 800ms forwards;

    &:hover {
      scale: 1.3;
      rotate: 5deg;
    }
  }

  .fade-out {
    animation: ${clearAnimation} 500ms forwards;
  }

  @media (max-width: 1100px) {
    div {
      max-width: 91vw;
      margin-top: 20px;

      @media (max-width: 750px) {
        max-width: 93vw;
      }
    }

    .cadre {
      width: 100%;
      height: 40vw;
    }

    img {
      width: 100%;
      height: 40vw;
    }
  }

  @media (max-width: 500px) {
    div {
      max-width: 90vw;
      margin-top: 20px;
    }

    .cadre {
      width: 100%;
      height: 70vw;
    }

    img {
      width: 100%;
      height: 70vw;
    }
  }
`;

const TextBox = styled.div`
  max-width: 815px;
  max-height: 485px;
  font-weight: 300;
  font-size: 1.7vw;
  font-family: Authentic60C;
  text-transform: uppercase;
  margin-top: 30px;
  margin-right: 50px;

  @media (max-width: 1100px) {
    font-size: 16px;
    margin-right: 0px;
  }
`;

const LettersBox = styled.div`
  display: flex;

  .box {
    width: 100%;

    p {
      height: 20vw;
      transition: 500ms;

      &:hover {
        transform: rotate3d(1, 0.05, 0.1, 20deg);
      }
    }
  }
  div {
    flex: 1;
    display: flex;
    font-family: Tagada;
    align-items: center;
    justify-content: center;
    font-size: 27.2vw;

    @media (max-width: 1100px) {
      font-size: 20vw;
    }
  }

  .o1 {
    letter-spacing: -1.2vw;
  }

  .g1 {
    letter-spacing: -1.5vw;
  }

  .g2 {
    letter-spacing: -1.4vw;
  }

  .e {
    margin-left: -0.8vw;
  }
`;
export default Hero;
