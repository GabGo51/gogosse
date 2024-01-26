import React from "react";
import styled from "styled-components";
import Intro from "../Intro";
import projects from "../../../data/projectData";

import OtherHeader from "../OtherHeader";
import gradient from "../SAP/img/gradient.jpg";
import SlidingImg from "../SlidingImg";
import s2 from "./img/S_02.gif";
import s3 from "./img/S_03.jpg";
import s4 from "./img/S_04.gif";
import s5 from "./img/S_05.jpg";
import s6 from "./img/S_06.gif";
import s7 from "./img/S_07.jpg";
import s8 from "./img/S_08.jpg";
import WorkButton from "../../WorkButton";
const project = projects[5];

const SAP = () => {
  return (
    <Container>
      <div className="top-section">
        <OtherHeader />
        <Intro
          title={project.title}
          description={project.description}
          tag1={project.type}
        />
      </div>
      <SlidingImg src={project.img} />
      <div className="right-section">
        <div>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque voluptas
            sit aspernatur aut odit aut fugit, sed quia consequuntSed ut
            perspiciatis unde omnis iste natus error sit voluptatem accusantium
            doloremque laudantium, totam rem aperiam, eaque voluptas sit
            aspernatur aut odit aut fugit, sed quia consequunt
          </p>
        </div>
        <div>
          <img src={s2} />
        </div>
      </div>
      <img className="fullscreen-image" src={s3} />
      <img className="almost-fullscreen" src={s4} />
      <img className="middle-screen" src={s5} />
      <img className="fullscreen-image" src={s6} />
      <img className="almost-fullscreen" src={s7} />
      <img className="almost-fullscreen" src={s8} />

      <WorkButton />

      <div className="direction">
        <h3>ARTISTIC DIRECTION</h3>
        <p>NICOLAS GOSSELIN</p>
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
    background-position: bottom;
  }

  .middle-screen {
    margin-bottom: 6vw;
  }

  .fullscreen-image {
    margin-bottom: 4vw;
  }
`;

export default SAP;
