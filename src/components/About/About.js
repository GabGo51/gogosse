import React, { useEffect } from "react";
import styled from "styled-components";
import drigo from "./img/ABOUTME.gif";
import { useLocation } from "react-router-dom";
import OtherHeader from "../Projects/OtherHeader";

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
      <OtherHeader />

      <div className="frame">
        <div>
          <p>
            Hi, I'm Nicolas, a Montreal-based designer! My practice covers
            various types of projects: bookmaking, branding, poster design,
            creative coding, web design, motion design, and animation.
          </p>

          <p>
            Gogosse is my creative space where I share my graphic design work.
            The name "Gogosse" holds special significance for me—it's deeply
            intertwined with my family's legacy and ethos. Rooted in the surname
            "Gosselin," it represents more than just a title it embodies our
            family's resourcefulness and inventive spirit.In my family, we're
            known for being "gosseux," which in French means finding creative
            ways to make things work of any kind. Choosing the name "Gogosse"
            was a no-brainer given my backgrounds family's penchant for creative
            problem-solving.
          </p>
          <p>
            With Gogosse, I aim to showcase my work and connect with other
            creatives, as well as find interesting projects to collaborate on.
            Let’s connect, and hopefully soon!
          </p>
        </div>

        <img src={drigo} alt="drigo" />
      </div>
    </Container>
  );
};

const Container = styled.div`
  .frame {
    padding: 0 20px;

    display: flex;
    align-items: start;
    justify-content: space-between;
    width: 100%;
    height: 100%;

    div{
      width: 50%;
    }
    p {
      font-size: clamp(20px, 3vw, 30px);
      font-family: Authentic60;
      text-transform: ;
      width: 100%;
      margin-bottom: 20px;
    }

    img {
      width: 30%;

      object-fit: cover;
    }

    @media (max-width: 1100px) {
      flex-direction: column;
      align-items: center;
      p {
        width: 100%;
        margin-bottom: 40px;
      }

      img {
        width: 100%;
      }
    }
  }
`;

export default About;
