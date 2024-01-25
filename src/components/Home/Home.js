import React from "react";
import styled from "styled-components";
import Hero from "./Hero";
import Projects from "./Projects";
import Header from "./Header";
import gray from '../../img/gray.jpg'

const Home = () => {
  return (
    <Container>
      <div className="top-section">
        <Header />
        <Hero />
      </div>
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
  img{
    width: 100vw;
    height: 200px;
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
