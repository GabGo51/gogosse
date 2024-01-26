import React from "react";
import styled from "styled-components";
import Intro from "../Intro";
import projects from "../../../data/projectData";
import WorkButton from "../../WorkButton";
import OtherHeader from "../OtherHeader";
import gradient from "../SAP/img/gradient.jpg";
import SlidingImg from "../SlidingImg";
import t2 from './img/T_02.jpg'
import t3 from './img/T_03.jpg'
import t4 from './img/T_04.gif'
import t5 from './img/T_05.jpg'
import t6 from './img/T_06.gif'
import t7 from './img/T_07.jpg'
import t8 from './img/T_08.jpg'
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
      </div>
      <SlidingImg src={project.img} />
      <img className="t1" src={t2} />
      <img className="t2" src={t3} />
      <img className="t3" src={t4} />
      <img className="middle-screen" src={t5} />
      <img className="fullscreen-image t6" src={t6} />
      <div className="frame">
        <img className="fullscreen-image " src={t7} />
      </div>
      <img className="middle-screen" src={t8} />
      

      <WorkButton />



      <div className="direction">
        <h3>ARTISTIC DIRECTION</h3>
        <p>NICOLAS GOSSELIN</p>
        <p>MAËL DUSSAULT</p>
      </div>
    </Container>
  )
}

const Container = styled.div`
display: flex;
  flex-direction: column;
  align-items: center;

  .t1{
    width: 45%;
    margin-top: 10vw;
  }
  .t2{
    width: 32%;
  }
  .t3{
    width: 31%;
    margin-bottom: 10vw;
  }

  .t6{
    margin: 10vw 0;
  }

  .frame{
    padding: 20px;
    margin: 0;
    img{
      width: 100%;
    }
  }

  .middle-screen{
    width: 50%;
    margin-top: 8vw;
  }
`

export default Turbine