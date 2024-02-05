import React, {useEffect} from "react";
import styled from "styled-components";
import Header from "../Home/Header";
import drigo from './img/ABOUTME.gif'
import { useLocation } from "react-router-dom";

const About = () => {
  const location = useLocation();
  const isDarkTheme = location.pathname === "/about";
  useEffect(() => {
    if (location.pathname === "/about") {
      document.body.setAttribute("data-theme", "dark");
    } else {
      document.body.removeAttribute("data-theme");
    }

    // Cleanup when the component unmounts
    return () => {
      document.body.removeAttribute("data-theme");
    };
  }, [location.pathname]);
  return (
    <Container>
      <Header />
      
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
    margin-top: 100px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    p{
      font-size: clamp(20px, 3vw, 40px);
      font-family: Authentic60;
      text-transform: uppercase;
      width: 50%;
      
    }

    img{
      width: 30%;
      
      object-fit: cover;
    }

    @media (max-width:1100px){
    flex-direction: column;
    align-items: center;
    p{
      width: 100%;
      margin-bottom: 40px;
    }

    img{
      width: 100%;
    }
  }
  }
  

  
`;

export default About;
