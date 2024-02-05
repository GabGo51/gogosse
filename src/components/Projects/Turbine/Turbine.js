import React from "react";
import styled from "styled-components";
import Intro from "../Intro";
import projects from "../../../data/projectData";
import WorkButton from "../../WorkButton";
import OtherHeader from "../OtherHeader";
import gradient from "../img/gradient.jpg";
import SlidingImg from "../SlidingImg";
import t2 from "./img/T_02.jpg";
import t3 from "./img/T_03.jpg";
import t4 from "./img/T_04.gif";
import t5 from "./img/T_05.jpg";
import t6 from "./img/T_06.gif";
import t7 from "./img/T_07.jpg";
import t8 from "./img/T_08.jpg";
const project = projects[3];

const Turbine = () => {
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

      <img alt="turbine" className="t1" src={t2} />
      <img alt="turbine" className="t2" src={t3} />
      <img alt="turbine" className="t3" src={t4} />
      <img alt="turbine" className="middle-screen" src={t5} />
      <img alt="turbine" className="fullscreen-image t6" src={t6} />
      <div className="frame">
        <img alt="turbine" className="fullscreen-image " src={t7} />
      </div>
      <img alt="turbine" className="t8" src={t8} />

      <WorkButton />

      <div className="direction">
        <h3>ARTISTIC DIRECTION</h3>
        <p>NICOLAS GOSSELIN</p>
        <p>MAËL DUSSAULT</p>
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .top-section {
    background-image: url(${gradient});
    background-size: cover;
  }

  .t1 {
    width: 45%;
    margin-top: 10vw;

    @media (max-width: 1100px) {
      width: 62%;
    }
  }
  .t2 {
    width: 32%;
    @media (max-width: 1100px) {
      width: 45%;
    }
  }
  .t3 {
    width: 31%;
    margin-bottom: 10vw;
    @media (max-width: 1100px) {
      width: 44%;
    }
  }

  .t6 {
    margin: 10vw 0;
  }

  .frame {
    padding: 20px;
    margin: 0;
    img {
      width: 100%;
    }
  }

  .t8 {
    width: 50%;
    margin: 8vw 0;
  }
`;

export default Turbine;
