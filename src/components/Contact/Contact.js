import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { useContext, useRef } from "react";
import { MouseContext } from "../../context/mouseContext";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import useMousePosition from "../../hooks/useMousePosition";


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
      
      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque voluptas sit
        aspernatur aut odit aut fugit, sed quia consequunt
      </p>
      <form ref={gogosseForm} onSubmit={handleSubmit}>
        <div>
          <label>NAME</label>
          <input
            onMouseEnter={() => cursorChangeHandler("hover")}
            onMouseLeave={() => cursorChangeHandler("")}
            required
          />
        </div>
        <div>
          <label>COMPAGNY</label>
          <input
            onMouseEnter={() => cursorChangeHandler("hover")}
            onMouseLeave={() => cursorChangeHandler("")}
          />
        </div>
        <div>
          <label>BUDGET</label>
          <input
            onMouseEnter={() => cursorChangeHandler("hover")}
            onMouseLeave={() => cursorChangeHandler("")}
            required
          />
        </div>
        <div className="textarea">
          <label>PROJECT DESCRIPTION</label>
          <textarea
            onMouseEnter={() => cursorChangeHandler("hover")}
            onMouseLeave={() => cursorChangeHandler("")}
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
    </Container>
  );
};

const Container = styled.div`
  padding: 20px;

  p {
    font-size: 40px;
    text-transform: uppercase;
    font-family: Authentic60;
    margin: 100px 0px;

    @media (max-width: 1100px) {
      font-size: 24px;
    }
    @media (max-width: 700px) {
      font-size: 16px;
    }
  }
  div {
    border-bottom: 1px solid black;
    padding-bottom: 5px;
    display: flex;
    align-items: center;
    position: relative;
    margin-bottom: 20px;
  }

  label {
    font-family: Tagada;
    font-size: 40px;
    margin-right: 30px;

    @media (max-width: 1100px) {
      font-size: 30px;
    }
    @media (max-width: 700px) {
      font-size: 20px;
    }
  }

  input {
    height: 40px;
    font-size: 34px;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: transparent;
    font-family: Authentic60;
    border: none;
    outline: none;
    padding-left: 220px;
    text-transform: uppercase;

    @media (max-width: 1100px) {
      font-size: 24px;
      padding-left: 170px;
    }
    @media (max-width: 800px) {
      font-size: 16px;
      padding-left: 120px;
    }
  }

  .textarea {
    border-bottom: none;
    flex-direction: column;
    align-items: flex-start;

    textarea {
      background-color: #2e2e2e;
      color: white;
      resize: none;
      font-size: 24px;
      font-family: Authentic60;
      text-transform: uppercase;
      width: 100%;
      height: 200px;
      padding: 10px;

      @media (max-width: 1100px) {
        font-size: 24px;
      }
      @media (max-width: 700px) {
        font-size: 16px;
      }
    }
  }

  @media (max-width: 800px) {
    padding: 20px;
  }

  button{
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
