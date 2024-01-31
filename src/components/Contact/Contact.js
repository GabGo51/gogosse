import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { useContext, useRef } from "react";
import { MouseContext } from "../../context/mouseContext";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import useMousePosition from "../../hooks/useMousePosition";
import Header from "../Home/Header";
import gradient from "./img/gradient.png";

const Contact = () => {
  const { cursorChangeHandler } = useContext(MouseContext);
  const mousePosition = useMousePosition();
  const isWideScreen = window.innerWidth > 1100;
  const spring = {
    type: "spring",
    damping: 9,
    stiffness: 40,
  };

  const gogosseForm = useRef();

  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_zw14vwu",
        "template_5nfy78a",
        gogosseForm.current,
        "VaZSX-PGbVyX__Gv8"
      )
      .then(
        function (response) {
          setLoading(false);
          console.log("SUCCESS!", response.status, response.text);
          gogosseForm.current.reset();
          setSent(true);
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
  };

  return (
    <Container>
      <Header />
      <img src={gradient} alt="gradient" className="gradient" />
      <div className="frame">
        <form ref={gogosseForm} onSubmit={handleSubmit}>
          <div className="textarea">
            <label>LET'S WORK</label>
            <textarea
              onMouseEnter={() => cursorChangeHandler("hover")}
              onMouseLeave={() => cursorChangeHandler("")}
              placeholder="Tell me about yourself, your project, and what you aim to achieve. Please provide your contact information so we can get in touch and discuss your project needs further. Can't wait to hear about your project and putting it to life!"
              required
              
            />
          </div>
          <motion.button
            {...(isWideScreen && { animate: { x: mousePosition.x - 120 } })}
            transition={spring}
            onMouseEnter={() => cursorChangeHandler("hover")}
            onMouseLeave={() => cursorChangeHandler("")}
            type="submit"
          >
            SUMBIT
          </motion.button>
        </form>
      </div>
    </Container>
  );
};

const Container = styled.div`

  .frame {
    padding: 0 20px;
    margin-top: -100px;
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .gradient {
    margin-top: -10px;
    height: 200px;
    width: 100vw;

    @media (max-width: 500px) {
      height: 150px;
    }
  }

  label {
    font-family: Authentic90C;
    font-size: 40px;
    margin-right: 30px;

    @media (max-width: 1100px) {
      font-size: 30px;
    }
    @media (max-width: 700px) {
      font-size: 20px;
    }
  }

  

  .textarea {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: clamp(80%, 3vw, 50%);

    textarea {
      transition: 1s;
      border: 1px solid white;
      max-width: 800px;
      resize: none;
      font-size: 24px;
      font-family: Authentic60;
      text-transform: uppercase;
      
      outline: none;
      width: 100%;
      height: 200px;
      padding: 10px;

      &:hover{
        border: 1px solid black;
      }

      @media (max-width: 1100px) {
        font-size: 24px;
      }
      @media (max-width: 700px) {
        font-size: 16px;
      }
    }
  }

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
    border-radius: 25px;
    margin-top: 40px;
    font-family: Authentic60;
    color: black;
    height: 70px;
    width: 170px;
    text-align: center;

    text-transform: uppercase;

    &:hover {
      background-color: black;
      color: white;
    }
    @media (max-width: 500px) {
      font-size: 18px;
      height: 50px;
      width: 120px;
      border-radius: 20px;
      margin-bottom: 0px;
    }
  }
`;
export default Contact;
