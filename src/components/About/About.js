import React, { useEffect } from "react";
import styled from "styled-components";
import drigo from "./img/ABOUTME.gif";
import { useLocation } from "react-router-dom";
import OtherHeader from "../Projects/OtherHeader";
import { motion } from "framer-motion";

const About = () => {
  const location = useLocation();

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
  const initial = { opacity: 0, x: -20 };
  const animate = { opacity: 1, x: 0 };
  return (
    <Container>
      <OtherHeader />

      <div className="frame">
        <div>
          <motion.p initial={initial}
        animate={animate}
        transition={{ duration: 0.5, delay: 0.1 }}>
            Hi, I'm Nicolas, a Montreal-based designer! My practice covers
            various types of projects: bookmaking, branding, poster design,
            creative coding, web design, motion design, and animation.
          </motion.p>

          <motion.p initial={initial}
        animate={animate}
        transition={{ duration: 0.5, delay: 0.3 }}>
            Gogosse is my creative space where I share my graphic design work.
            The name "Gogosse" holds special significance for me—it's deeply
            intertwined with my family's legacy and ethos. Rooted in the surname
            "Gosselin," it represents more than just a title it embodies our
            family's resourcefulness and inventive spirit.In my family, we're
            known for being "gosseux," which in French means finding creative
            ways to make things work of any kind. Choosing the name "Gogosse"
            was a no-brainer given my backgrounds family's penchant for creative
            problem-solving.
          </motion.p>
          <motion.p initial={initial}
        animate={animate}
        transition={{ duration: 0.5, delay: 0.5 }}>
            With Gogosse, I aim to showcase my work and connect with other
            creatives, as well as find interesting projects to collaborate on.
            Let’s connect, and hopefully soon!
          </motion.p>
        </div>

        <motion.img initial={{x:50}} animate={{x:0}} src={drigo} transition={{ duration: 0.5}} alt="drigo" />
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
      font-size: clamp(14px, 2vw, 30px);
      font-family: Authentic60;
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
      div{
        width: 100%;
        margin-top: 50px;
      }
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
