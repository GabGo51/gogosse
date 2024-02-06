import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { useContext, useRef } from "react";
import { MouseContext } from "../../context/mouseContext";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import OtherHeader from '../Projects/OtherHeader'


const Contact = () => {
  const { cursorChangeHandler } = useContext(MouseContext);

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
      const maxX = window.innerWidth - window.innerWidth * 0.11;

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
    <Container>
      <OtherHeader />
      <div className="frame">
        <form ref={gogosseForm} onSubmit={handleSubmit}>
          <div className="textarea">
            <label>LET'S WORK</label>
            <textarea
            name="user_project"
            autoFocus
              onMouseEnter={() => cursorChangeHandler("hover")}
              onMouseLeave={() => cursorChangeHandler("")}
              placeholder="Tell me about yourself, your project, and what you aim to achieve. Please provide your contact information so we can get in touch and discuss your project needs further. Can't wait to hear about your project and putting it to life!"
              required
              
            />
          </div>
          <motion.button
            animate={{ x: mouseX }}
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
    display: flex;
    flex-direction: column;
    width: 100%;
    height:100%;
    margin-top: 100px;
  }
  
  label {
    font-family: Authentic90C;
    font-size: 40px;
    margin-bottom: 50px;

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
      border: none;
      max-width: 800px;
      resize: none;
      font-size: 24px;
      font-family: Authentic60;
      text-transform: uppercase;
      
      outline: none;
      width: 100%;
      height: 180px;
      

      

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
