import React from "react";
import styled from "styled-components";
import OtherHeader from "../OtherHeader";
import Intro from "../Intro";
import SlidingImg from "../SlidingImg";
import projects from "../../../data/projectData";
import L1 from "./img/L_01.gif";
import L2 from "./img/L_02.png";
import L3 from "./img/L_3.1.jpg";
import L4 from "./img/L_3.2.jpg";
import L5 from "./img/L_3.3.jpg";
import L6 from "./img/L_03.jpg";
import L7 from "./img/L_04.jpg";
import L8 from "./img/L_05.gif";
import L9 from "./img/L_06.jpg";
import L10 from "./img/L_07.jpg";
import L11 from "./img/woody.jpg";
import WorkButton from "../../WorkButton";
const project = projects[4];

const Lapies = () => {
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
      <img className="start middle-screen" src={L1} />
      <img className="middle-screen" src={L2} />
      <img className="middle-screen" src={L6} />
      <div className="row">
      <img className="rowimg" src={L4} />
      <img className="rowimg"  src={L3} />
      <img className="rowimg"  src={L5} />
      </div>
      <img className="fullscreen-image" src={L7} />
      <img className="fullscreen-image" src={L8} />
      <img className="fullscreen-image" src={L9} />
      <img className="middle-screen l10" src={L10} />
      <div className="full">
        <img className="" src={L11} />
      </div>
      

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

  .middle-screen {
    width: 40%;
    margin: 1vw 0;
  }
  .start {
    margin-top: 200px;
  }

  .row{
    margin-top: 8vw;
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 20px;

    .rowimg{
      width: 32.5%;
    }

  }

  .l10{
    margin: 8vw 0;
  }

  .full{
    width: 100%;
    padding: 20px;
    margin-bottom: 6vw;
    img{
      width: 100%;
    }
  }
`;

export default Lapies;
