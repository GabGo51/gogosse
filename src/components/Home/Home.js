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
    height: 95vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (max-width:1100px){
      height: auto;
    }
  }

  .gradient{
    margin-top: 0px;
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
