import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import G from "../img/g.png";
import E from "../img/e.png";
import O from "../img/o.png";
import S from "../img/s.png";
import cat from "../img/3683.webp";

const Hero = () => {
  const [active, setActive] = useState(null);

  const handleHover = (letter) => {
    setTimeout(() => {
      setActive(letter);
    }, 100);
  };

  const handleNotHover = () => {
    setActive(null);
  };
  console.log(active);

  return (
    <Container>
      <TextBox>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
        odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
        voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
        quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
        eius modi
      </TextBox>
      <LettersBox onMouseLeave={handleNotHover}>
        <div onMouseEnter={() => handleHover("g1")}>
          <img src={G} alt="letter" />
        </div>

        <div
          className={`${active === "g1" ? "show" : "hide"}`}
          onMouseEnter={() => handleHover("g1")}
        >
          <img src={cat} alt="project" />
        </div>

        <div onMouseEnter={() => handleHover("o1")}>
          <img src={O} alt="letter" />
        </div>

        <div
          className={`${active === "o1" ? "show" : "hide"}`}
          onMouseEnter={() => handleHover("o1")}
        >
          <img src={cat} alt="project" />
        </div>

        <div onMouseEnter={() => handleHover("g2")}>
          <img src={G} alt="letter" />
        </div>

        <div
          className={`${active === "g2" ? "show" : "hide"}`}
          onMouseEnter={() => handleHover("g2")}
        >
          <img src={cat} alt="project" />
        </div>

        <div onMouseEnter={() => handleHover("o2")}>
          <img src={O} alt="letter" />
        </div>
        <div
          className={`${active === "o2" ? "show" : "hide"}`}
          onMouseEnter={() => handleHover("o2")}
        >
          <img src={cat} alt="project" />
        </div>
        <div onMouseEnter={() => handleHover("s1")}>
          <img src={S} alt="letter" />
        </div>
        <div
          className={`${active === "s1" ? "show" : "hide"}`}
          onMouseEnter={() => handleHover("s1")}
        >
          <img src={cat} alt="project" />
        </div>
        <div onMouseEnter={() => handleHover("s2")}>
          <img src={S} alt="letter" />
        </div>
        <div
          className={`${active === "s2" ? "show" : "hide"}`}
          onMouseEnter={() => handleHover("s2")}
        >
          <img src={cat} alt="project" />
        </div>
        <div onMouseEnter={() => handleHover("e")}>
          <img src={E} alt="letter" />
        </div>
        <div
          className={`${active === "e" ? "show" : "hide"}`}
          onMouseEnter={() => handleHover("e")}
        >
          <img src={cat} alt="project" />
        </div>
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

const Container = styled.div`
padding: 20px;
`;

const TextBox = styled.div`
  max-width: 830px;
  font-weight: 600;
  font-size: 24px;
  font-family: Authentic60;
  text-transform: uppercase;
  margin-bottom: 120px;
`;

const LettersBox = styled.div`
  width: 98vw;
  height: 400px;
  display: flex;

  div {
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
