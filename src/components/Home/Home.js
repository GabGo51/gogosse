import React from "react";
import styled from "styled-components";
import Hero from "./Hero";
import Projects from "./Projects";

const Home = () => {
  return (
    <Container>
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
height: 100px;
}


.gradient2 {
    background: rgb(255,255,255);
    background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(220,220,220,1) 100%);
    height: 100px;
    width: 100vw;
  }
`;

export default Home;
