import React, { useEffect } from "react";
import styled from "styled-components";
import OtherHeader from "../OtherHeader";
import Intro from "../Intro";
import SlidingImg from "../SlidingImg";
import projects from "../../../data/projectData";
import WorkButton from "../../WorkButton";

import E_2 from "./img/E-2.jpg";
import E_3 from "./img/E-3.jpg";
import E_4 from "./img/E-4.jpg";
import E_5 from "./img/E-5.jpg";
import E_6 from "./img/E-6.jpg";
import E_7 from "./img/E-7.jpg";

import { useLocation } from "react-router-dom";

const project = projects[0];

const EspaceFine = () => {
  const location = useLocation();
  const isDarkTheme = location.pathname === "/ESPACE%20FINE";
  useEffect(() => {
    if (location.pathname === "/ESPACE%20FINE") {
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

      <div className="row">
        <img alt="espace fine" className="fullscreen-image top-img" src={E_2} />
      </div>

      <div className="row">
        <img alt="espace fine" className="rowimg1" src={E_3} />
        <img alt="espace fine" className="rowimg2" src={E_4} />
      </div>
      <div className="row">
        <img alt="espace fine" className="fullscreen-image" src={E_5} />
      </div>
      <div className="row">
        <img alt="espace fine" className="fullscreen-image" src={E_6} />
      </div>
      <div className="row">
        <img alt="espace fine" className="fullscreen-image" src={E_7} />
      </div>

      <WorkButton darkTheme={isDarkTheme} />

      <div className="direction">
        <h3>ARTISTIC DIRECTION</h3>
        <p>FERNANDO PEZO SALAS</p>
        <p>CHRISTELLE GUIMONT</p>
        <p>NICOLAS GOSSELIN</p>
        <p>CERYL BENZEKRI</p>
      </div>
    </Container>
  );
};

const Container = styled.div`
  .row {
    display: flex;
    justify-content: space-between;
    padding: 13px 20px;

    .rowimg1 {
      width: 44.7%;
    }

    .rowimg2 {
      width: 54%;
    }
  }

  .top-img {
    margin-top: 10vw;
  }
`;

export default EspaceFine;
