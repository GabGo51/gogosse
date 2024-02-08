import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Intro = ({ title, description, tag1, tag2}) => {
  const initial =  { opacity:0, y:20}
  const animate = { opacity:1, y:0}
  return (
    <Container>
      <motion.h1 initial = {initial}
      animate = {animate}
      transition = {{duration:0.5 , delay:0.1}}>{title}</motion.h1>

      <div className="middle">
        <div className="top">
          <motion.p initial = {initial}
      animate = {animate}
      transition = {{duration:0.5 , delay:0.3}} className="description">{description}</motion.p>
          <motion.div initial = {initial}
      animate = {animate}
      transition = {{duration:0.5 , delay:0.5}} className="type">
            <p>{tag1}</p>
            <p>{tag2}</p>
          </motion.div>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`

  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 40px 20px;
  

  h1 {
    font-family: Authentic90C;
    font-weight: 400;
    font-size: clamp(50px, 3vw, 80px);
  }

  .middle {
    align-items: flex-end;
    justify-content: end;
    width: 50%;

    .top {
      display: flex;
      justify-content: space-between;
      margin-bottom: 50px;
    }
    .description {
      width: 70%;
      font-family: Authentic60;
      text-transform: uppercase;
      font-size: clamp(12px, 3vw, 18px);
    }

    .type {
      font-family: Authentic60;
      text-transform: uppercase;
      font-size: 14px;
    }
    img {
      width: 100%;
    }
  }

  @media (max-width: 1100px) {
    flex-direction: column;
    padding-bottom: 0;

    h1 {
      margin-bottom: 60px;
      width: 100%;
      text-align: justify;
    }

    .middle {
      width: 100%;
      margin-bottom: 0;

      .top {
        justify-content: space-between;
        width: 100%;
        margin-bottom: 20px;
        align-items: end;
      }

      
      .type {
        font-size: 10px;
      }
    }
  }
`;

export default Intro;
