import React, { useState, useEffect, useContext } from "react";
import styled, { keyframes } from "styled-components";
import projects from "../../data/projectData";
import { MouseContext } from "../../context/mouseContext";
import { useNavigate } from "react-router-dom";
import {motion} from "framer-motion"

const Hero = () => {
  const [mouseX, setMouseX] = useState(0);
  const { cursorChangeHandler } = useContext(MouseContext);

  const [activeProject, setActiveProject] = useState(projects[0]);

  const spring = {
    type: "spring",
    damping: 9,
    stiffness: 50
  }

  const handleHover = (projectTitle) => {
    cursorChangeHandler("hover");
    const selectedProject = projects.find(
      (project) => project.title === projectTitle
    );

    if (selectedProject) {
      setActiveProject(selectedProject);
    }
  };

  const navigate = useNavigate();
  const handleNavigate = (page) => {
    navigate(page);
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      const adjustedMouseX = e.clientX - 340;
      const minX = 0;
      const maxX = window.innerWidth - 670;

      if (window.innerWidth > 1100) {
        
        setMouseX(Math.max(minX, Math.min(adjustedMouseX, maxX)));
      }else{
        setMouseX(0)
      }
    };
    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  

  return (
    <Container>
      <ImgBox animate={{x: mouseX}} transition={spring}>
        <div className="top">
        <div>
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
              onMouseEnter={() => cursorChangeHandler("hover")}
              onMouseLeave={() => cursorChangeHandler("")}
              onClick={() => handleNavigate(`/${project.title}`)}
            />
          ))}
          
        </div>
        <div className="project-text">
            <p>{activeProject.title}</p>
            <p>{activeProject.type}</p>
        </div>

        </div>
        
      </ImgBox>

      <LettersBox>
        <div className="box" onMouseLeave={() => cursorChangeHandler("")}>
          <div
            className="g1"
            onMouseEnter={() => handleHover(projects[0].title)}
            onClick={() => handleNavigate(`/${projects[0].title}`)}
          >
            <p>G</p>
          </div>

          <div
            className="o1"
            onMouseEnter={() => handleHover(projects[1].title)}
            onClick={() => handleNavigate(`/${projects[1].title}`)}
          >
            <p>O</p>
          </div>

          <div
            className="g2"
            onMouseEnter={() => handleHover(projects[2].title)}
            onClick={() => handleNavigate(`/${projects[2].title}`)}
          >
            <p>G</p>
          </div>

          <div
            className="o2"
            onMouseEnter={() => handleHover(projects[3].title)}
            onClick={() => handleNavigate(`/${projects[3].title}`)}
          >
            <p>O</p>
          </div>

          <div
            className="s1"
            onMouseEnter={() => handleHover(projects[4].title)}
            onClick={() => handleNavigate(`/${projects[4].title}`)}
          >
            <p>S</p>
          </div>

          <div
            className="s2"
            onMouseEnter={() => handleHover(projects[5].title)}
            onClick={() => handleNavigate(`/${projects[5].title}`)}
          >
            <p>S</p>
          </div>

          <div
            className="e"
            onMouseEnter={() => handleHover(projects[6].title)}
            onClick={() => handleNavigate(`/${projects[6].title}`)}
          >
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
  height: calc(100vh - 40px);
  padding: 40px;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #dcdcdc;

  @media (max-width: 1100px) {
    justify-content: center;
    padding-bottom: 20px;

    
  }
  @media (max-width: 1200px) {
    height: 750px;
  }

  @media (max-width: 800px) {
    height: 650px;
    padding-bottom: 20px;
  }
`;

const ImgBox = styled(motion.div)`
  padding-top: 50px;
  .top{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
  }
  div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    font-family: Authentic90;
    position: relative;
    width: 600px;
    height: 250px;
    overflow: hidden;
    border: none;
  }
  img {
    transition: 500ms;
    border: none;
    width: 600px;
    height: 250px;
    position: absolute;
    object-fit: cover;
    animation: ${appearAnimation} 800ms forwards;

    &:hover {
      scale: 1.3;
      rotate: 5deg;
    }
  }

  .project-text{
    height: 30px;
  }

  .fade-out {
    animation: ${clearAnimation} 500ms forwards;
  }

  @media (max-width: 1100px) {

    display: flex;
  align-items: end;
  justify-content: end;
    
    div {
      max-width: 71vw;
      margin-top: 20px;

      @media (max-width: 750px) {
        max-width: 93vw;
      }
    }

    div {
      width: 100%;
      height:400px;
    }

    img {
      width: 100%;
      height: 400px;
    }
  }

  @media (max-width: 500px) {
    padding-top: 0;
    div {
      width: 100%;
      height: 50vh;
    }

    

    img {
      width: 100%;
      height: 50vh;
    }
  }
`;

const TextBox = styled.div`
  max-width: 815px;
  height: 100%;
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
