import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useContext } from "react";
import { MouseContext } from "../context/mouseContext";

const OtherHeader = () => {
  const { cursorChangeHandler } = useContext(MouseContext);

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navigate = useNavigate();
  const handleNavigate = (page) => {
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

  return (
    <Container>
      <h1 onClick={() => handleNavigate("/")}>GOGOSSE</h1>

      

      

      <nav>
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
            CONTACT
          </li>
        </ul>
      </nav>
    </Container>
  );
};

const Container = styled.header`
position: absolute;
  padding: 20px;
  padding-bottom: 10px;
  padding-top: 20px;
  display: flex;
  justify-content: space-between;
  background-color: #dcdcdc;
  position: relative;
  z-index: 999;
  div {
    width: 100%;
  }

  h1 {
    display: inline-block;
    font-size: 30px;
    font-family: Tagada;
    font-weight: 400;
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
    &:hover {
      transform: translateX(-10%);
      filter: none;
    }
  }

  .blurred {
    filter: blur(1px);
  }

  @media (max-width: 900px) {
    h1 {
      font-size: 30px;
    }
  }
  @media (max-width: 800px) {
    padding: 20px;
  }

  @media (max-width: 500px) {
    i {
      display: block;
    }

    ul {
      display: none;
      flex-direction: column;
      position: absolute;
      top: 100%;
      right: 40px;
      background-color: #dcdcdc;

      border: 1px solid black;
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
      display: flex;
    }
  }
`;

export default OtherHeader;