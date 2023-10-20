import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import G from "../img/g.png";
import E from "../img/e.png";
import O from "../img/o.png";
import S from "../img/s.png";

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
      <LettersBox>
        <div onMouseEnter={() => handleHover("g1")}>
          <img src={G} />
        </div>
        {active === "g1" && (
          <div className="new " onMouseEnter={() => handleHover("g1")}>
            yo
          </div>
        )}
        <div onMouseEnter={() => handleHover("o1")}>
          <img src={O} />
        </div>
        {active === "o1" && (
          <div className="new " onMouseEnter={() => handleHover("o1")}>
            yeur
          </div>
        )}
        <div onMouseEnter={() => handleHover("g2")}>
          <img src={G} />
        </div>
        {active === "g2" && (
          <div className="new " onMouseEnter={() => handleHover("g2")}>
            yeur
          </div>
        )}
        <div onMouseEnter={() => handleHover("o2")}>
          <img src={O} />
        </div>
        {active === "o2" && (
          <div className="new" onMouseEnter={() => handleHover("o2")}>
            yeur
          </div>
        )}
        <div onMouseEnter={() => handleHover("s1")}>
          <img src={S} />
        </div>
        {active === "s1" && (
          <div className="new" onMouseEnter={() => handleHover("s1")}>
            yeur
          </div>
        )}
        <div onMouseEnter={() => handleHover("s2")}>
          <img src={S} />
        </div>
        {active === "s2" && (
          <div className="new " onMouseEnter={() => handleHover("s2")}>
            yeur
          </div>
        )}
        <div onMouseEnter={() => handleHover("e")}>
          <img src={E} />
        </div>
        {active === "e" && (
          <div className="new " onMouseEnter={() => handleHover("e")}>
            yeur
          </div>
        )}
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
    &.new {
      animation: ${slideIn} 0.5s forwards;
    }
  }
`;
export default Hero;
