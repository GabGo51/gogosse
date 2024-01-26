import React from "react";
import styled from "styled-components";
import Hero from "./Hero";
import Projects from "./Projects";
import Header from "./Header";
import gradient from './img/gradient.png'

const Home = () => {
  return (
    <Container>
      <div className="top-section">
        <Header />
        <Hero />
      </div>
      <img className="gradient" src={gradient}/>
      <Projects />
      <div className="gradient2"></div>
    </Container>
  );
};

const Container = styled.div`
  .top-section {
    
    display: flex;
    flex-direction: column;
    
  }

  .gradient{
    margin-top: -10px;
    height: 200px;
    width: 100vw;

    @media (max-width: 500px) {
    height: 100px;
    
  }
  }
  

  

  a {
    transition: 500ms;
    color: blue;
    font-weight: 12px;

    &:hover {
      color: red;
      font-size: 14px;
    }
  }
`;

export default Home;
