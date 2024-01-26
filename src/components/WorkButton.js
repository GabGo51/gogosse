import React from "react";
import styled, { keyframes } from "styled-components";
import { useNavigate } from "react-router-dom";

import { useContext } from "react";
import { MouseContext } from "../context/mouseContext";
import useMousePosition from "../hooks/useMousePosition";
import { motion } from "framer-motion";

const WorkButton = () => {
  const { cursorChangeHandler } = useContext(MouseContext);
  const mousePosition = useMousePosition();

  const isWideScreen = window.innerWidth > 1100;

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
    stiffness: 40,
  };

  return (
    <Container>
      <motion.button
      {...(isWideScreen && { animate: { x: mousePosition.x - 120 } })}
      transition={spring}
      onMouseEnter={() => cursorChangeHandler("hover")}
      onMouseLeave={() => cursorChangeHandler("")}
      onClick={() => {
        handleNavigate(`/contact`);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
      className="lets-work"
    >
      Let's <div>W</div>ork
    </motion.button>
    </Container>
    
  );
};

const rotate = keyframes`
to{
  transform: rotate(90deg);
}
`;

const Container = styled(motion.div)`
width: 95%;
  button {
    transition: 300ms;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    font-size: 30px;
    font-weight: 400;
    margin-bottom: 50px;
    border: 1px solid black;
    border-radius: 39px;
    font-family: Authentic60;
    color: black;
    width: 225px;
    height: 100px;
    text-align: center;
    margin-top: 100px;
    text-transform: uppercase;
    div {
      margin-left: 10px;
    }

    &:hover {
      background-color: black;
      color: white;
      div {
        animation: ${rotate} 500ms forwards;
      }
    }
    @media (max-width: 500px) {
      font-size: 20px;
      height: 70px;
      width: 170px;
      border-radius: 25px;
      margin-bottom: 0px;
    }
  }
`;

export default WorkButton;
