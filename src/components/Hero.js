import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import G from "../img/g.png";
import E from "../img/e.png";
import O from "../img/o.png";
import S from "../img/s.png";
import cat from '../img/3683.webp'

const Hero = () => {
  const [active, setActive] = useState(null);

  const handleHover = (letter) => {
    setActive(letter);
  };

  const handleNotHover = () => {
    setActive(null);
  };
  console.log(active);

  return (
    <Container>
      <LettersBox onMouseLeave={handleNotHover}>
        <div onMouseEnter={() => handleHover("g1")}>
          <img src={G} />
        </div>

        <div
          className={`${active === "g1" ? "show" : "hide"}`}
          onMouseEnter={() => handleHover("g1")}
        ><img src={cat}/></div>

        <div onMouseEnter={() => handleHover("o1")}>
          <img src={O} />
        </div>

        <div
          className={`${active === "o1" ? "show" : "hide"}`}
          onMouseEnter={() => handleHover("o1")}
        ></div>

        <div onMouseEnter={() => handleHover("g2")}>
          <img src={G} />
        </div>
        
        <div
          className={`${active === "g2" ? "show" : "hide"}`}
          onMouseEnter={() => handleHover("g2")}
        ></div>
        
        <div onMouseEnter={() => handleHover("o2")}>
          <img src={O} />
        </div>
        <div
          className={`${active === "o2" ? "show" : "hide"}`}
          onMouseEnter={() => handleHover("o2")}
        ></div>
        <div onMouseEnter={() => handleHover("s1")}>
          <img src={S} />
        </div>
        <div
          className={`${active === "s1" ? "show" : "hide"}`}
          onMouseEnter={() => handleHover("s1")}
        ></div>
        <div onMouseEnter={() => handleHover("s2")}>
          <img src={S} />
        </div>
        <div
          className={`${active === "s2" ? "show" : "hide"}`}
          onMouseEnter={() => handleHover("s2")}
        ></div>
        <div onMouseEnter={() => handleHover("e")}>
          <img src={E} />
        </div>
        <div
          className={`${active === "e" ? "show" : "hide"}`}
          onMouseEnter={() => handleHover("e")}
        ></div>
      </LettersBox>
    </Container>
  );
};
const slideIn = keyframes`
  0% {
    flex: 0;
    opacity: 0;
  }
  100% {
    flex: 2;
    opacity: 1;
  }
`;
const slideOut = keyframes`
  0% {
    flex: 2;
    opacity: 1;
  }
  100% {
    flex: 0;
    opacity: 0;
  }
`;

const Container = styled.div``;

const LettersBox = styled.div`
  width: 100vw;
  height: 400px;
  display: flex;

  div {
    border: 3px solid blue;
    height: 100%;
    flex: 1;

    img {
      width: 100%;
      height: 100%;
    }
    &.show {
      animation: ${slideIn} 0.5s forwards;
    }
    &.hide {
      animation: ${slideOut} 0.5s forwards;
    }
  }
`;
export default Hero;
