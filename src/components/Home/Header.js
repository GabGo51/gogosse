import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useContext } from "react";
import { MouseContext } from "../../context/mouseContext";
import { motion } from "framer-motion";

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

  const scrollToRef = (id) => {
    const element = document.getElementById(id);
    console.log(element);
    if (element) {
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      const targetScrollPosition = elementPosition;

      window.scrollTo({
        top: targetScrollPosition,
        behavior: "smooth",
      });
    }
  };

  const initial = { opacity: 0, y: -20 };
  const animate = { opacity: 1, y: 0 };

  return (
    <Container>
      <motion.div  className={isOpen ? "frame frame-open" : "frame"}>
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

        <motion.p
          initial={initial}
          animate={animate}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Gogosse is Nicolas Gosselin, a French Canadian designer and recent
          DESIGN graduate based in Montreal. Specializing in branding, poster
          design, and EDITORIAL DESIGN, I am dedicated to creating clean and
          FLEXIBLE designs that leave a lasting impact. Beyond my design
          expertise, I am also an avid skier with a deep passion for the
          outdoors. My work is a reflection of this dual love for design
          precision and the exhilaration of nature.
        </motion.p>

        <motion.ul
          initial={initial}
          animate={animate}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="contact"
          onMouseEnter={handleBlur}
          onMouseLeave={removeBlur}
        >
          <li className={blur ? "blurred" : ""}>ggss.studio@outlook.com</li>
          <li className={blur ? "blurred" : ""}>450 822 5550</li>
        </motion.ul>

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
              onClick={() => {
                removeBlur();
                setIsOpen(false);
                scrollToRef("project");
              }}
              className={blur ? "blurred" : ""}
            >
              WORK
            </li>
            <li
              onClick={() => {
                removeBlur();
                setIsOpen(false);
                handleNavigate("/about");
              }}
              className={blur ? "blurred" : ""}
            >
              ABOUT
            </li>
            <li
              onClick={() => {
                removeBlur();
                setIsOpen(false);
                handleNavigate("/contact");
              }}
              className={blur ? "blurred" : ""}
            >
              CONNECT
            </li>
          </ul>
        </motion.nav>
      </motion.div>
    </Container>
  );
};



const Container = styled.header`
  padding: 20px;
  padding-bottom: 30px;
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

    scale: 1.5;
    transition: 400ms;

    
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

      li {
        border: 1px solid black;
        border-radius: 15px;
        margin-left: 10px;
      }
    }

    div.frame-open {
      height: 100px;
      

      p {
        display: none;
      }
    }
  }
`;

export default Header;
