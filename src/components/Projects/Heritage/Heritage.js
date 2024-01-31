import React, {useEffect} from "react";
import styled from "styled-components";
import OtherHeader from "../OtherHeader";
import Intro from "../Intro";
import SlidingImg from "../SlidingImg";
import projects from "../../../data/projectData";
import WorkButton from "../../WorkButton";
import group from './img/Group 16.jpg'
import h1 from './img/h1.jpg'
import { useLocation } from "react-router-dom";

const project = projects[1];



const Heritage = () => {
  const location = useLocation();
  const isDarkTheme = location.pathname === "/HERITAGE";
  useEffect(() => {
    if (location.pathname === "/HERITAGE") {
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
      </div>
      <SlidingImg src={project.img} />
      <img className="fullscreen-image h1" src={h1}/>
      <img className="fullscreen-image" src={group}/>

      <WorkButton darkTheme={isDarkTheme} />

      <div className="direction">
        <h3>ARTISTIC DIRECTION</h3>
        <p>NICOLAS GOSSELIN</p>
      </div>
    </Container>
  )
}

const Container = styled.div`
.h1{
  margin-bottom: -20px;
  margin-top: 20vw;

  @media (max-width:1100px){
    display: none;
  }
}
`

export default Heritage