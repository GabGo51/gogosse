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
      const maxX = window.innerWidth - window.innerWidth * 0.46;

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
    <Container initial={{y:30}}  animate={{ x: mouseX,y:10 }} transition={spring}>
      <img   src={src} alt="moving project hero" />
    </Container>
  );
};

const Container = styled(motion.div)`
  width: 100%;
  height: 40vh;
  overflow: hidden;
  transform-origin:bottom;

  img {
    transform-origin:bottom;
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