import React, { useState, useEffect, useContext } from "react";
import styled, { keyframes } from "styled-components";
import projects from "../../data/projectData";
import { MouseContext } from "../../context/mouseContext";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import G from "./img/G.png";
import O from "./img/O.png";
import S from "./img/S.png";
import E from "./img/E.png";

const Hero = ({ load }) => {
  const [mouseX, setMouseX] = useState(0);
  const { cursorChangeHandler } = useContext(MouseContext);
  const [activeProject, setActiveProject] = useState(projects[0]);

  const spring = {
    type: "spring",
    damping: 9,
    stiffness: 50,
  };

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
    cursorChangeHandler("");
    navigate(page);
    window.scrollTo({
      top: 0,
    });
  };

  useEffect(() => {
    
    const handleMouseMove = (e) => {
      const adjustedMouseX = e.clientX - 340;
      const minX = 0;
      const maxX = window.innerWidth - window.innerWidth * 0.365; //adjust for responsiveness depending on width of teh asset

      if (window.innerWidth > 1100) {
        setMouseX(Math.max(minX, Math.min(adjustedMouseX, maxX)));
      } else {
        setMouseX(0);
      }
    };

    let intervalId; // Variable to hold interval id for clearing

    if (window.innerWidth < 1100) {
      // Check if screen width is under 1100px
      intervalId = setInterval(() => {
        // Set an interval to change active project every 2 seconds
        setActiveProject((prevActiveProject) => {
          const currentIndex = projects.findIndex(
            (project) => project.title === prevActiveProject.title
          );
          const nextIndex =
            currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
          return projects[nextIndex];
        });
      }, 2500);
    }
    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <Container>
      <ImgBox animate={{ x: mouseX }} transition={spring}>
        <div className="top">
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
                onMouseEnter={() => cursorChangeHandler("hover")}
                onMouseLeave={() => cursorChangeHandler("")}
                onClick={() => handleNavigate(`/${project.title}`)}
              />
            ))}
          </div>
          <div className="project-text">
            <p>{activeProject.title}</p>
            <p className="type">{activeProject.type}</p>
          </div>
        </div>
      </ImgBox>

      <LettersBox>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={
            load
              ? { duration: 0.5, delay: 2.8 }
              : { duration: 0.5, delay: 0.2 }
          }
          className="g1"
          onMouseEnter={() => handleHover(projects[0].title)}
          onMouseLeave={() => {
            cursorChangeHandler("");
          }}
          onClick={() => handleNavigate(`/${projects[0].title}`)}
        >
          <img alt="letter" src={G} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={
            load
              ? { duration: 0.5, delay: 2.9 }
              : { duration: 0.5, delay: 0.3 }
          }
          className="o1"
          onMouseEnter={() => handleHover(projects[1].title)}
          onMouseLeave={() => {
            cursorChangeHandler("");
          }}
          onClick={() => handleNavigate(`/${projects[1].title}`)}
        >
          <img alt="letter" src={O} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={
            load
              ? { duration: 0.5, delay: 3 }
              : { duration: 0.5, delay: 0.4 }
          }
          className="g2"
          onMouseEnter={() => handleHover(projects[2].title)}
          onMouseLeave={() => {
            cursorChangeHandler("");
          }}
          onClick={() => handleNavigate(`/${projects[2].title}`)}
        >
          <img alt="letter" src={G} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={
            load
              ? { duration: 0.5, delay: 3.1 }
              : { duration: 0.5, delay: 0.5 }
          }
          className="o2"
          onMouseEnter={() => handleHover(projects[3].title)}
          onMouseLeave={() => {
            cursorChangeHandler("");
          }}
          onClick={() => handleNavigate(`/${projects[3].title}`)}
        >
          <img alt="letter" src={O} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={
            load
              ? { duration: 0.5, delay: 3.2 }
              : { duration: 0.5, delay: 0.6 }
          }
          className="s1"
          onMouseEnter={() => handleHover(projects[4].title)}
          onMouseLeave={() => {
            cursorChangeHandler("");
          }}
          onClick={() => handleNavigate(`/${projects[4].title}`)}
        >
          <img alt="letter" src={S} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={
            load
              ? { duration: 0.5, delay: 3.3 }
              : { duration: 0.5, delay: 0.7 }
          }
          className="s2"
          onMouseEnter={() => handleHover(projects[5].title)}
          onMouseLeave={() => {
            cursorChangeHandler("");
          }}
          onClick={() => handleNavigate(`/${projects[5].title}`)}
        >
          <img alt="letter" src={S} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={
            load
              ? { duration: 0.5, delay: 3.4 }
              : { duration: 0.5, delay: 0.8 }
          }
          className="e"
          onMouseEnter={() => handleHover(projects[6].title)}
          onMouseLeave={() => {
            cursorChangeHandler("");
          }}
          onClick={() => handleNavigate(`/${projects[6].title}`)}
        >
          <img alt="letter" src={E} />
        </motion.div>
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
  transform: translateY(-120%);
  opacity: 0.8;
 }
`;

const Container = styled.div`
  padding: 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 3;
`;

const ImgBox = styled(motion.div)`
  height: 100%;

  .top {
    max-height: 700px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }

  .cadre {
    max-height: 700px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    font-family: Authentic90C;
    position: relative;
    width: 35%;

    overflow: hidden;
    border: none;
  }
  img {
    max-height: 700px;
    transition: 500ms;
    border: none;
    width: 100%;
    height: 100%;
    position: absolute;
    object-fit: cover;
    animation: ${appearAnimation} 900ms forwards;

    &:hover {
      scale: 1.3;
      rotate: 5deg;
    }
  }

  .project-text {
    display: flex;
    width: 100%;
    justify-content: space-between;
    height: 60px;
    p {
      width: 100%;
      text-transform: uppercase;
    }
    .type {
      text-align: end;
    }
  }

  .fade-out {
    animation: ${clearAnimation} 500ms forwards;
  }

  @media (max-width: 1100px) {
    display: flex;
    align-items: end;
    justify-content: end;
    height: 400px;

    .top {
      width: 100%;
      height: 100%;
      align-items: end;
    }

    .cadre {
      width: 70%;
    }
    .project-text {
      width: 70%;
    }

    img {
      width: 100%;
      height: 100%;
    }
  }

  @media (max-width: 700px) {
    height: 500px;

    .cadre {
      width: 100%;
      height: 450px;
    }
    .project-text {
      width: 100%;
    }

    img {
      width: 100%;
      height: 100%;
    }

    .project-text {
      margin-top: 5px;
    }
  }
`;

const LettersBox = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  margin-bottom: -10px;
  @media (max-width: 1000px) {
    padding: 0;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 1000px) {
    }
    img {
      transition: 500ms;
      width: 100%;
      height: auto;
      &:hover {
        transform: rotate3d(0.1, 0.2, 0.2, 0.02turn);
      }
    }
  }

  .o2 {
    margin-right: 1.5vw;
  }

  @media (max-width: 1100px) {
    margin-top: -30px;
  }
`;
export default Hero;
