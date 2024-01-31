import React from "react";
import styled from "styled-components";
import Header from "../Home/Header";
import gradient from "./img/gradient.png";
import drigo from './img/ABOUTME.gif'

const About = () => {
  return (
    <Container>
      <Header />
      <img src={gradient} alt="gradient" className="gradient" />
      <div className="frame">
        <p>
          Hey there! Tell me about yourself, your project, and what you aim to
          achieve. Please provide your information so we can get in touch and
          discuss your project needs further. Can't wait to hear about your
          project and putting it to life!
        </p>
        <img src={drigo} alt="drigo"/>
      </div>
    </Container>
  );
};

const Container = styled.div`
  .frame {
    padding: 0 20px;
    margin-top: -100px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100%;



    p{
      font-size: 40px;
      font-family: Authentic60;
      text-transform: uppercase;
      width: 50%;
      
    }

    img{
      width: 30%;
    }
  }
  .gradient {
    margin-top: -10px;
    height: 200px;
    width: 100vw;

    @media (max-width: 500px) {
      height: 150px;
    }
  }
`;

export default About;
