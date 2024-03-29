import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import { MouseContext } from "../context/mouseContext";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "./logo-footer.png";

const Footer = () => {
  const { cursorChangeHandler } = useContext(MouseContext);

  const location = useLocation();
  const isDarkTheme =
    location.pathname === "/H%C3%89RITAGE%20B%C3%82TI" ||
    location.pathname === "/HORIZON%202023" ||
    location.pathname === "/ESPACE%20FINE%20VOL.2" ||
    location.pathname === "/about";

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
      top: 0,
    });
  };
  const initial = { opacity: 0, y: 20 };
  const animate = { opacity: 1, y: 0 };

  return (
    <Container>
      <Info $darkTheme={isDarkTheme}>
        <motion.button
          initial={initial}
          animate={animate}
          transition={{ duration: 0.5, delay: 0.1 }}
          onMouseEnter={() => cursorChangeHandler("hover")}
          onMouseLeave={() => cursorChangeHandler("")}
          onClick={() => handleNavigate("/")}
        >
          <img src={logo} alt="logo" />
        </motion.button>
        <motion.ul
          initial={initial}
          animate={animate}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <li
            onMouseEnter={handleBlur}
            onMouseLeave={removeBlur}
            className={blur ? "blurred" : ""}
          >
            <a
              target="#"
              href="https://www.behance.net/nicolasgosselin2?tracking_source=search_users|nicolas%20gosselin"
            >
              Behance
            </a>
          </li>
          <li
            onMouseEnter={handleBlur}
            onMouseLeave={removeBlur}
            className={blur ? "blurred" : ""}
          >
            <a target="#" href="https://www.instagram.com/rodrigoooo00o/">
              Instagram
            </a>
          </li>
          <li
            onMouseEnter={handleBlur}
            onMouseLeave={removeBlur}
            className={blur ? "blurred" : ""}
          >
            <a
              target="#"
              href="https://www.linkedin.com/in/nicolas-gosselin-818862279/"
            >
              Linkedin
            </a>
          </li>
        </motion.ul>
        <motion.ul
          initial={initial}
          animate={animate}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="contact"
        >
          <li
            onMouseEnter={handleBlur}
            onMouseLeave={removeBlur}
            className={blur ? "blurred" : ""}
            onClick={() => {
              window.location.href = "mailto:ggss.studio@outlook.com";
            }}
          >
            ggss.studio@outlook.com
          </li>
          <li
            onMouseEnter={handleBlur}
            onMouseLeave={removeBlur}
            className={blur ? "blurred" : ""}
            onClick={() => {
              window.location.href = "tel:+14508225550";
            }}
          >
            450 822 5550
          </li>
        </motion.ul>
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
  padding-bottom: 20px;
  background-color: transparent;
  width: 100%;
  text-transform: uppercase;
  font-family: Authentic60;

  .blurred {
    filter: blur(1px);
  }

  @media (max-width: 800px) {
    padding: 0;
  }
`;

const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;

  width: 100%;
  button {
    all: unset;
    img {
      width: 80px;
      filter: ${(props) => (props.$darkTheme ? "invert(0.95)" : "")};
    }
  }

  li {
    transition: 500ms;
    font-size: clamp(12px, 3vw, 14px);
    font-family: Authentic90;
    line-height: 24px;

    a {
      text-decoration: none;

      color: ${(props) => (props.$darkTheme ? "#f2f2f2" : "black")};
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

    ul {
      margin: 0px 0px;
      text-align: start;
      padding: 0;
    }
  }
`;
export default Footer;
