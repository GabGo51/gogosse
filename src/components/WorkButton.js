import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { MouseContext } from "../context/mouseContext";
import { motion } from "framer-motion";

const WorkButton = ({ darkTheme }) => {
  const { cursorChangeHandler } = useContext(MouseContext);

  const navigate = useNavigate();
  const handleNavigate = (page) => {
    navigate(page);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const spring = {
    type: "spring",
    damping: 9,
    stiffness: 50,
  };
  const [mouseX, setMouseX] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const adjustedMouseX = e.clientX - 140;
      const minX = 0;
      const maxX = window.innerWidth - window.innerWidth * 0.14;

      if (window.innerWidth > 1100) {
        setMouseX(Math.max(minX, Math.min(adjustedMouseX, maxX)));
      } else {
        setMouseX(0);
      }
    };

    // Add event listener for mouse move
    document.addEventListener("mousemove", handleMouseMove);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <Container $darkTheme={darkTheme}>
      <motion.button
        animate={{ x: mouseX }}
        transition={spring}
        onMouseEnter={() => cursorChangeHandler("hover")}
        onMouseLeave={() => cursorChangeHandler("")}
        onClick={() => {
          handleNavigate(`/contact`);
          window.scrollTo({ top: 0 });
        }}
        className="lets-work"
      >
        Let's <div>W</div>ork
      </motion.button>
    </Container>
  );
};



const Container = styled(motion.div)`
  width: 95%;

  button {
    transition: 300ms;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    font-size: 30px;
    margin-bottom: 50px;
    border: 1px solid ${(props) => (props.$darkTheme ? "white" : "black")};
    border-radius: 25px;
    font-family: Authentic60;
    color: ${(props) => (props.$darkTheme ? "white" : "black")};
    width: 220px;
    height: 70px;

    text-align: center;
    margin-top: 100px;
    text-transform: uppercase;
    div {
      margin-left: 10px;
    }

    &:hover {
      background-color: ${(props) => (props.$darkTheme ? "white" : "black")};
      color: ${(props) => (props.$darkTheme ? "black" : "white")};
      
    }

    @media (max-width: 1100px) {
      width: 160px;
      height: 60px;
      font-size: 20px;
      border-radius: 20px;
    }
  }
`;

export default WorkButton;
