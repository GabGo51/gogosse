import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { useContext, useRef } from "react";
import { MouseContext } from "../../context/mouseContext";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import OtherHeader from "../Projects/OtherHeader";
import loadinggif from "./img/Rolling-1.4s-200px.gif";
const Contact = () => {
  const { cursorChangeHandler } = useContext(MouseContext);

  const gogosseForm = useRef();
  const [normal, setNormal] = useState(true);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

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
          setNormal(false);
          console.log("SUCCESS!", response.status, response.text);
          gogosseForm.current.reset();
          setSent(true);
        },
        function (error) {
          console.log("FAILED...", error);
          setNormal(false);
          setError(true);
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

  const initial = { opacity: 0, x: -20 };
  const animate = { opacity: 1, x: 0 };

  return (
    <Container>
      <OtherHeader />
      <div className="frame">
        <form ref={gogosseForm} onSubmit={handleSubmit}>
          <div className="textarea">
            <motion.label
              initial={initial}
              animate={animate}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              LET'S WORK
            </motion.label>

            {sent && (
              <motion.p
                initial={initial}
                animate={animate}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                YOUR MESSAGE HAS BEEN SENT. I WILL CONTACT YOU REGARDING YOUR
                PROJECT AS SOON AS POSSIBLE. THANK YOU !
              </motion.p>
            )}
            {error && (
              <motion.p
                initial={initial}
                animate={animate}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                OOPS, IT LOOKS LIKE SOMETHING WENT WRONG. PLEASE TRY AGAIN LATER
                OR CONTACT ME DIRECTLY VIA PHONE OR EMAIL. SORRY!
              </motion.p>
            )}
            {normal && (
              <motion.textarea
                initial={initial}
                animate={animate}
                transition={{ duration: 0.5, delay: 0.1 }}
                name="user_project"
                autoFocus
                onMouseEnter={() => cursorChangeHandler("hover")}
                onMouseLeave={() => cursorChangeHandler("")}
                placeholder="Tell me about yourself, your project, and what you aim to achieve. Please provide your contact information so we can get in touch and discuss your project needs further. Can't wait to hear about your project and putting it to life!"
                required
              />
            )}
          </div>
          {normal && (
            <motion.button
              initial={initial}
              animate={{ x: mouseX, opacity: 1 }}
              transition={spring}
              onMouseEnter={() => cursorChangeHandler("hover")}
              onMouseLeave={() => cursorChangeHandler("")}
              type="submit"
            >
              {loading ? <img alt="loading" src={loadinggif} /> : <>SUBMIT</>}
            </motion.button>
          )}
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
    height: 100%;
    margin-top: 100px;
  }

  label {
    font-family: Authentic90C;
    font-size: clamp(20px, 5vw, 40px);
    margin-bottom: 50px;
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
      font-size: clamp(16px, 5vw, 24px);
      font-family: Authentic60;

      outline: none;
      width: 100%;
      height: 220px;
    }

    p {
      font-size: clamp(16px, 5vw, 24px);
      font-family: Authentic60;
      text-transform: uppercase;
      max-width: 800px;
    }
  }

  button {
    transition: 300ms;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    overflow: hidden;
    font-size: 30px;
    font-weight: 400;
    margin-bottom: 50px;
    border: 1px solid black;
    border-radius: 25px;
    margin-top: 40px;
    font-family: Authentic60;
    color: black;
    width: 150px;
    height: 70px;
    text-align: center;
    text-transform: uppercase;

    img {
      width: 100%;
      scale: 0.4;
    }

    &:hover {
      background-color: black;
      color: white;
      img {
        filter: invert(1);
      }
    }
    @media (max-width: 1100px) {
      width: 100px;
      height: 50px;
      font-size: 20px;
      border-radius: 20px;
      img{
        scale: 0.5;
      }
    }
  }
`;
export default Contact;
