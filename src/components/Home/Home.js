import React from "react";
import styled from "styled-components";
import Hero from "./Hero";
import Projects from "./Projects";
import Intro from "../Intro";

const Home = () => {
  return (
    <Container>
      {/* <Intro/> */}
      <Hero />
      <div className="gradient"></div>
      <Projects/>
      <div className="gradient2"></div>
    </Container>
  );
};

const Container = styled.div`

.gradient{
  background: rgb(220,220,220);
background: linear-gradient(180deg, rgba(220,220,220,1) 0%, rgba(255,255,255,1) 100%);
width: 100vw;
height: 150px;
}


.gradient2 {
    background: rgb(255,255,255);
    background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(220,220,220,1) 100%);
    height: 150px;
    width: 100vw;
  }

a{
  transition: 500ms;
  color: blue;
  font-weight: 12px;

  &:hover{
    color: red;
    font-size: 14px;
  }
}
  
`


;

export default Home;
