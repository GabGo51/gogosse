import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import proj1 from './img/proj1.png'
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
          <div>
            <p>yo</p>
            <p>yeur</p>
          </div>
          <img src={proj1}/>
        </ImgBox>

      </div>
      <LettersBox onMouseLeave={handleNotHover}>
        <div className="box">

          <div className="g1">
            <p>G</p>
          </div>

          <div className="o1">
            <p>O</p>
          </div>

          <div className="g2">
            <p>G</p>
          </div>
          
          <div className="o2">
            <p>O</p>
          </div>

          <div className="s1" >
            <p>S</p>
          </div>

          <div className="s2" >
            <p>S</p>
          </div>

          <div className="e">
            <p>E</p>
          </div>

        </div>
      </LettersBox>
      
    </Container>
  );
};
const softWiggle = keyframes`
  0% {
    transform: rotate(0);
  }
  25% {
    transform: rotate(2deg);
  }
  50% {
    transform: rotate(0);
  }
  75% {
    transform: rotate(-2deg);
  }
  100% {
    transform: rotate(0);
  }
`


const Container = styled.div`
padding: 40px;
padding-top: 20px;
display: flex;
flex-direction: column;
justify-content: space-between;
background-color: #DCDCDC;
height:calc(100vh - 70px) ;
padding-bottom: 150px;


.top{
 display: flex;
 justify-content: space-between;
}
`;

const ImgBox = styled.div`

div{
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  p{
    font-family: Authentic60;

  }
}

img{
  width: 38vw;
  height: 18vw;
  object-fit: cover;
}

`

const TextBox = styled.div`
  max-width: 815px;
  max-height: 485px;
  font-weight: 300;
  font-size: 36px;
  font-family: Authentic60;
  text-transform: uppercase;
  margin-top: 30px;
`;

const LettersBox = styled.div`
  display: flex;
  
  .box{
    width: 100%;

    p{
      height: 20vw;
      transition: 500ms;
      &:hover{
      /* animation: ${softWiggle} 1s infinite; */
      transform:  rotate3d(1, 0.05, 0.1, 20deg);
    }
    }
  }
  div {
    
    flex: 1;
    display: flex;
    font-family: Tagada;
    align-items: center;
    justify-content: center;
    font-size: 27.2vw;
    
  }

  .o1{
    letter-spacing: -1.2vw;
  }
  .g1{
    letter-spacing: -1.5vw;
  }
  .g2{
    letter-spacing: -1.4vw;
  }

  .e{
    margin-left: -0.8vw;
  }
 
  

`;
export default Hero;
