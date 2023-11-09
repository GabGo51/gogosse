import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const Footer = () => {
  const [blur, setBlur] = useState(false);
  const handleBlur = () => {
    setBlur(true);
  };
  const removeBlur = () => {
    setBlur(false);
  };

  const navigate = useNavigate();
  const handleNavigate = (page) => {
    navigate(page);
  };

  return (
    <Container>
      <Info>
        <button onClick={() => handleNavigate("/")}>GOGOSSE</button>
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
        <ul onMouseEnter={handleBlur} onMouseLeave={removeBlur}>
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
  width: 100vw;
  font-weight: 700;
  font-family: Authentic60;
  .blurred{
  filter: blur(1px);
}
`;

const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;

  width: 95vw;

  button {
    font-family: Tagada;
    font-size: 64px;
    font-weight: 400;
    cursor: pointer;
    background-color: transparent;
    border: none;
  }

  li {
    transition: 500ms;
    font-size: 18px;
    font-family: Authentic90;
    
    a {
      cursor: pointer;
      text-decoration: none;
      color: black;
    }

    &:hover {
      filter: none;
      transform: translateX(-10%);
    }
  }
`;
export default Footer;
