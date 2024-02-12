import React from "react";
import styled from "styled-components";
import OtherHeader from "../OtherHeader";
import Intro from "../Intro";
import SlidingImg from "../SlidingImg";
import projects from "../../../data/projectData";
import WorkButton from "../../WorkButton";
import gradient from "../../Home/img/gradient.jpg";

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

`;

export default PBGG