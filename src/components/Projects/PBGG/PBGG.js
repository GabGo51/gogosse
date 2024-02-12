import React from "react";
import styled from "styled-components";
import OtherHeader from "../OtherHeader";
import Intro from "../Intro";
import SlidingImg from "../SlidingImg";
import projects from "../../../data/projectData";
import WorkButton from "../../WorkButton";
import gradient from "../../Home/img/gradient.jpg";

import p2 from './img/PB_02.jpg'
import p3 from './img/PB_03.jpg'
import p4 from './img/PB_04.jpg'
import p5 from './img/PB_05.jpg'
import p6 from './img/PB_06.jpg'
import p7 from './img/PB_07.jpg'
import p8 from './img/PB_08.jpg'
import p9 from './img/PB_09.jpg'
import p10 from './img/PB_10.jpg'

const project = projects[6];

const PBGG = () => {
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
        <img alt="Book" className="fullscreen-image top-img" src={p2} />
      </div>
      <div className="row">
        <img alt="Book" className="fullscreen-image" src={p3} />
      </div>
      <div className="row">
        <img alt="Book" className="fullscreen-image" src={p4} />
      </div>

      <div className="row2">
        <img alt="Book" className="fullscreen-image" src={p5} />
      </div>
      <div className="row">
        <img alt="Book" className="fullscreen-image" src={p6} />
      </div>
      <div className="row2">
        <img alt="Book" className="fullscreen-image" src={p7} />
      </div>
      <div className="row">
        <img alt="Book" className="fullscreen-image" src={p8} />
      </div>
      <div className="row">
        <img alt="Book" className="fullscreen-image" src={p9} />
      </div>
      <div className="row">
        <img alt="Book" className="fullscreen-image" src={p10} />
      </div>

      

      <WorkButton />

      <div className="direction">
        <h3>ARTISTIC DIRECTION</h3>
        <p>NICOLAS GOSSELIN</p>
      </div>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .top-section {
    background-image: url(${gradient});
    background-size: cover;
  }

  .top-img {
    margin-top: 10vw;
  }

  .row{
    width: 100%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    margin: 10vw 0;
  }

  .row2{
    width: 70%;
  }

`;

export default PBGG