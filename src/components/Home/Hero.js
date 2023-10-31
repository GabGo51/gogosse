import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import G from './img/g.png'
import O from './img/o.png'
import S from './img/s.png'
import E from './img/e.png'

const Hero = () => {
  
  const [active, setActive] = useState(null);

  const handleHover = (letter) => {
    
    
    
    
  };

  const handleNotHover = () => {
    setActive(null);
  };
  console.log(active);

  return (
    <Container>
      <div className="top">
        
        <TextBox>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
          illo inventore veritatis et quasi architecto beatae vitae dicta sunt
          explicabo.
        </TextBox>
        
        <ImgBox>

        </ImgBox>
      </div>
      <LettersBox onMouseLeave={handleNotHover}>
          <div>
            <img src={G}/>
          </div>
          <div>
            <img src={O}/>
          </div>
          <div>
            <img src={G}/>
          </div>
          
          <div>
            <img src={O}/>
          </div>
          <div>
            <img src={S}/>
          </div>
          <div>
            <img src={S}/>
          </div>
          <div>
            <img src={E}/>
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
display: flex;
flex-direction: column;
justify-content: space-between;

.top{

}
`;

const ImgBox = styled.div`

`




const TextBox = styled.div`
  max-width: 815px;
  max-height: 485px;
  font-weight: 300;
  font-size: 36px;
  font-family: Authentic60;
  text-transform: uppercase;
  margin-bottom: 120px;
`;



const LettersBox = styled.div`
  width: 100vw;
  padding-right: 40px;
  height: 20vw;
  display: flex;

  .letter {
    padding: 20px;
  }
  

  div {
    height: 100%;
    flex: 1;
    margin: 10px;

    img {
      display: block;
      width: 100%;
      height: 100%;
    }
  }

 
`;
export default Hero;
