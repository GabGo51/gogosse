import React, { useEffect } from "react";
import styled from "styled-components";
import OtherHeader from "../OtherHeader";
import Intro from "../Intro";
import SlidingImg from "../SlidingImg";
import projects from "../../../data/projectData";
import WorkButton from "../../WorkButton";
import { useLocation } from "react-router-dom";
import H_2 from "./img/H-2.gif";
import H_3 from "./img/H-3.gif";
import H_4 from "./img/H-4.jpg";
import H_5 from "./img/H-5.jpg";
const project = projects[2];

const Horizon = () => {
  const location = useLocation();
  const isDarkTheme = location.pathname === "/HORIZON%202023";
  useEffect(() => {
    if (location.pathname === "/HORIZON%202023") {
      document.body.setAttribute("data-theme", "dark");
    } else {
      document.body.removeAttribute("data-theme");
    }

    // Cleanup when the component unmounts
    return () => {
      document.body.removeAttribute("data-theme");
    };
  }, [location.pathname]);
  return (
    <Container>
      <div className="top-section">
        <OtherHeader name={project.title} />
        <Intro
          title={project.title}
          description={project.description}
          tag1={project.type}
        />
        <SlidingImg src={project.img} />
      </div>

      <img alt="project" className="fullscreen-image gif1" src={H_2} />
      <img alt="project" className="fullscreen-image" src={H_3} />
      <img alt="project" className="fullscreen-image" src={H_4} />
      <img alt="project" className="fullscreen-image" src={H_5} />

      <WorkButton darkTheme={isDarkTheme} />

      <div className="direction">
        <h3>ARTISTIC DIRECTION</h3>
        <p>CHRISTELLE GUIMONT</p>
        <p>NICOLAS GOSSELIN</p>
        <p>CERYL BENZEKRI</p>
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .gif1 {
    margin-top: 15vw;
  }
`;

export default Horizon;
