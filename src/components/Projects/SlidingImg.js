import React from "react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import styled from "styled-components";

const SlidingImg = ({ src }) => {
  const spring = {
    type: "spring",
    damping: 9,
    stiffness: 50,
  };
  const [mouseX, setMouseX] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const adjustedMouseX = e.clientX - 340;
      const minX = 20;
      const maxX = window.innerWidth - 850;

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
    <Container animate={{ x: mouseX }} transition={spring}>
      <img src={src} alt="Sliding Image" />
    </Container>
  );
};

const Container = styled(motion.div)`
  width: 100%;
  height: 400px;
  overflow: hidden;

  img {
    width: 45%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 1100px) {
    width: 100%;
    height: 400px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

export default SlidingImg;