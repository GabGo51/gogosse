import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useContext } from "react";
import { MouseContext } from "../../context/mouseContext";

const Header = () => {
  const { cursorChangeHandler } = useContext(MouseContext);

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navigate = useNavigate();
  const handleNavigate = (page) => {
    navigate(page);
    setIsOpen(false);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
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

      <p>
        Gogosse is Nicolas Gosselin, a French Canadian designer and recent
        DESIGN graduate based in Montreal. Specializing in branding, poster
        design, and EDITORIAL DESIGN, I am dedicated to creating clean and
        FLEXIBLE designs that leave a lasting impact. Beyond my design
        expertise, I am also an avid skier with a deep passion for the outdoors.
        My work is a reflection of this dual love for design precision and the
        exhilaration of nature.
      </p>

      <ul
        className="contact"
        onMouseEnter={handleBlur}
        onMouseLeave={removeBlur}
      >
        <li className={blur ? "blurred" : ""}>ggss.studio@outlook.com</li>
        <li className={blur ? "blurred" : ""}>450 822 5550</li>
      </ul>

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
            CONNECT
          </li>
        </ul>
      </nav>
    </Container>
  );
};

const Container = styled.header`
  padding: 20px;
  padding-bottom: 10px;
  padding-top: 20px;
  display: flex;
  justify-content: space-between;

  position: relative;
  div {
    width: 100%;
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
    font-size: 16px;
    max-width: 500px;

    @media (max-width: 1100px) {
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

  @media (max-width: 600px) {
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

export default Header;
