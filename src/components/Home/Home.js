import React from "react";
import styled from "styled-components";
import Hero from "./Hero";
import Projects from "./Projects";

const Home = () => {
  return (
    <Container>
      <Hero />
      <Projects/>
    </Container>
  );
};

const Container = styled.div``;

export default Home;
