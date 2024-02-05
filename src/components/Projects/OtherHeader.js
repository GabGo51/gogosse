import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useContext } from "react";
import { MouseContext } from "../../context/mouseContext";

const OtherHeader = ({ name }) => {
  const { cursorChangeHandler } = useContext(MouseContext);

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => { 
    setIsOpen(!isOpen);
  };

  const navigate = useNavigate();
  const handleNavigate = (page) => {
    cursorChangeHandler('')
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
      <h1
        onMouseEnter={() => cursorChangeHandler("hover")}
        onMouseLeave={() => cursorChangeHandler("")}
        onClick={() => handleNavigate("/")}
      >
        GOGOSSE
      </h1>

      <nav>
        <p className="name">{name}</p>
        <div>
          <i className="fa-solid fa-bars" onClick={toggleMenu}></i>
          <ul className={isOpen ? "open" : ""}>
            <li
              onMouseEnter={handleBlur}
              onMouseLeave={removeBlur}
              onClick={() => handleNavigate("/")}
              className={blur ? "blurred" : ""}
            >
              WORK
            </li>
            <li
              onMouseEnter={handleBlur}
              onMouseLeave={removeBlur}
              onClick={() => handleNavigate("/about")}
              className={blur ? "blurred" : ""}
            >
              ABOUT
            </li>
            <li
              onMouseEnter={handleBlur}
              onMouseLeave={removeBlur}
              onClick={() => handleNavigate("/contact")}
              className={blur ? "blurred" : ""}
            >
              CONTACT
            </li>
          </ul>
        </div>
      </nav>
    </Container>
  );
};

const Container = styled.header`
  position: absolute;
  padding: 20px;
  padding-bottom: 60px;
  padding-top: 20px;
  display: flex;
  justify-content: space-between;
  position: relative;
  z-index: 100;

  .name {
    width: 100%;
  }

  div {
    width: 100%;
  }

  h1 {
    display: inline-block;
    font-size: 30px;
    font-family: Tagada;
    font-weight: 400;
    height: 30px;

    @media (max-width: 1100px) {
      font-size: 24px;
    }
  }

  nav {
    width: 50%;
    display: flex;
    justify-content: space-between;
    font-size: 16px;
    text-align: end;

    p {
      font-size: clamp(14px, 3vw, 20px);
      font-family: Authentic60;
      text-align: start;
    }

    ul {
      font-family: Authentic90;
      font-size: 14px;

      display: flex;
      flex-direction: column;
      justify-content: end;
      align-items: end;
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

  li {
    transition: 500ms;
    margin-bottom: 5px;
    width: 90px;
    &:hover {
      padding-right: 20px;
      filter: none;
    }
  }

  .blurred {
    filter: blur(1px);
  }

  @media (max-width: 800px) {
    padding: 20px;
  }

  @media (max-width: 500px) {
    i {
      display: block;
      width: 100%;
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
