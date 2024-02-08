import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useContext } from "react";
import { MouseContext } from "../../context/mouseContext";
import { motion } from "framer-motion";

const OtherHeader = ({ name }) => {
  const { cursorChangeHandler } = useContext(MouseContext);

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navigate = useNavigate();
  const handleNavigate = (page) => {
    cursorChangeHandler("");
    navigate(page);
    setIsOpen(false);
  };

  const [blur, setBlur] = useState(false);
  const handleBlur = () => {
    cursorChangeHandler("hover");
    setBlur(true);
  };
  const removeBlur = () => {
    cursorChangeHandler("");
    setBlur(false);
  };

  const initial = { opacity: 0, y: -20 };
  const animate = { opacity: 1, y: 0 };

  return (
    <Container>
      <div className={isOpen ? "header header-open" : "header"}>
        <motion.h1
          initial={initial}
          animate={animate}
          transition={{ duration: 0.5, delay: 0.1 }}
          onMouseEnter={() => cursorChangeHandler("hover")}
          onMouseLeave={() => cursorChangeHandler("")}
          onClick={() => handleNavigate("/")}
        >
          GOGOSSE
        </motion.h1>

        

        

        <motion.nav
          initial={initial}
          animate={animate}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <i className="fa-solid fa-bars" onClick={toggleMenu}></i>
          <ul
            onMouseEnter={handleBlur}
            onMouseLeave={removeBlur}
            className={isOpen ? "open" : ""}
          >
            <li
              onClick={() => handleNavigate("/")}
              className={blur ? "blurred" : ""}
            >
              WORK
            </li>
            <li
              onClick={() => handleNavigate("/about")}
              className={blur ? "blurred" : ""}
            >
              ABOUT
            </li>
            <li
              onClick={() => handleNavigate("/contact")}
              className={blur ? "blurred" : ""}
            >
              CONNECT
            </li>
          </ul>
        </motion.nav>
      </div>
    </Container>
  );
};

const Container = styled.header`
  padding: 20px;
  padding-bottom: 10px;
  padding-top: 20px;

  

  div {
    transition: 500ms;
    width: 100%;
    display: flex;
    justify-content: space-between;
    position: relative;
  }

  h1 {
    display: inline-block;
    font-size: clamp(20px, 3vw, 40px);
    font-family: Tagada;
    font-weight: 400;
    margin-right: 30px;
  }

  p {
    font-family: Authentic60C;
    text-transform: uppercase;
    display: inline-block;
    font-size: clamp(12px, 1vw, 16px);
    max-width: 500px;

    @media (max-width: 800px) {
      display: none;
    }
  }

  nav {
    font-size: 16px;
    text-align: end;

    ul {
      font-family: Authentic90;
      font-size: 14px;
    }
  }

  i {
    display: none;

    scale: 1.2;
    transition: 400ms;

    &:hover {
      scale: 1.3;
    }
  }
  ul {
    display: flex;
    flex-direction: column;
    font-family: Authentic60C;
    font-size: 18px;
    text-transform: uppercase;
  }

  li {
    transition: 500ms;
    margin-left: 30px;
    margin-bottom: 5px;
    &:hover {
      transform: translateX(-10%);
      filter: none;
    }
  }

  .blurred {
    filter: blur(1px);
  }

  @media (max-width: 800px) {
    padding: 20px;
  }

  @media (max-width: 700px) {
    i {
      display: block;
    }

    ul {
      display: none;
    }

    li {
      margin-right: 0;
      margin-left: 0;
      padding: 10px;
      width: 100%;
      /* text-align: center; */
    }

    /* Show the menu when isOpen state is true */
    ul.open {
      right: 0;
      display: flex;
      flex-direction: row;
      position: absolute;
      bottom: 0;

      li{
        border: 1px solid black ;
        border-radius: 15px;
        margin-left: 10px;
      }
    }

    div.header-open{
      height: 100px;

      p{
        display: none;
      }

      
    }
  }
`;

export default OtherHeader;
