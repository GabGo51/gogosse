import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import { MouseContext } from "../context/mouseContext";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const { cursorChangeHandler } = useContext(MouseContext);

  const location = useLocation();
  const isDarkTheme = location.pathname === "/HERITAGE" || location.pathname === "/HORIZON"|| location.pathname === "/ESPACE%20FINE";
  
  
  

  const [blur, setBlur] = useState(false);
  const handleBlur = () => {
    cursorChangeHandler("hover");
    setBlur(true);
  };
  const removeBlur = () => {
    cursorChangeHandler("");
    setBlur(false);
  };

  const navigate = useNavigate();
  const handleNavigate = (page) => {
    navigate(page);
    window.scrollTo({
      top:0,
      behavior: 'smooth',
    });
  };

  return (
    <Container>
      <Info darkTheme={isDarkTheme}>
        <button
          onMouseEnter={() => cursorChangeHandler("hover")}
          onMouseLeave={() => cursorChangeHandler("")}
          onClick={() => handleNavigate("/")}
        >
          GOGOSSE
        </button>
        <ul onMouseEnter={handleBlur} onMouseLeave={removeBlur}>
          <li className={blur ? "blurred" : ""}>
            <a
              target="#"
              href="https://www.behance.net/nicolasgosselin2?tracking_source=search_users|nicolas%20gosselin"
            >
              Behance
            </a>
          </li>
          <li className={blur ? "blurred" : ""}>
            <a target="#" href="https://www.instagram.com/rodrigoooo00o/">
              Intsagram
            </a>
          </li>
          <li className={blur ? "blurred" : ""}>
            <a
              target="#"
              href="https://www.linkedin.com/in/nicolas-gosselin-818862279/"
            >
              Linkedin
            </a>
          </li>
        </ul>
        <ul
          className="contact"
          onMouseEnter={handleBlur}
          onMouseLeave={removeBlur}
        >
          <li className={blur ? "blurred" : ""}>ggssestudio@outlook.com</li>
          <li className={blur ? "blurred" : ""}>450 822 5550</li>
        </ul>
      </Info>
    </Container>
  );
};

const Container = styled.footer`

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px 20px;
  background-color: transparent;
  width: 100%;
  font-weight: 700;
  font-family: Authentic60;
  .blurred {
    filter: blur(1px);
  }

  @media (max-width:800px){
    padding: 0;
  }
`;

const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;

  width: 100%;

  button {
    font-family: Tagada;
    font-size: 64px;
    font-weight: 400;
    color: ${props => props.darkTheme ? '#f2f2f2' : 'black'};
    background-color: transparent;
    border: none;
  }

  li {
    transition: 500ms;
    font-size: 18px;
    font-family: Authentic90;
    line-height: 24px;

    a {
      text-decoration: none;
      
      color: ${props => props.darkTheme ? '#f2f2f2' : 'black'};
    }

    &:hover {
      filter: none;
      transform: translateX(-10%);
    }
  }

  .contact {
    text-align: end;
  }

  @media (max-width: 800px) {
    padding: 20px;
    button {
      display: none;
    }

    li {
      font-size: 14px;
      line-height: 30px;
    }

    ul {
      margin: 0px 0px;
      text-align: start;
      padding: 0;
    }
  }
`;
export default Footer;
