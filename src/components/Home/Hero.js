import React, { useState } from "react";
import styled, { keyframes, css } from "styled-components";
import proj1 from './img/proj1.png'
import proj2 from './img/proj2.png'
const Hero = () => {
  
  //make variables for the chosen project and change that variable depending on the staTE 
  const [active, setActive] = useState("Turbine");
  const [img , setImg] = useState(proj1)
  const [title , setTitle] = useState("Turbine")
  const [type , setType] = useState("Event")

  const projects = [
    {
      title: "Turbine",
      type: "Web Development",
      img: proj1
    },
    {
      title: "Turbine2",
      type: "Mobile App",
      img: proj2
    },
    {
      title: "PROJET 3",
      type: "Data Analysis",
      img: proj2 
    },
    
  ];

  

  const handleHover = (projectTitle) => {
    const selectedProject = projects.find((project) => project.title === projectTitle);

    if (selectedProject) {
      setImg(selectedProject.img);
      setTitle(selectedProject.title);
      setType(selectedProject.type);
    }

    
    setActive(projectTitle);
    
    
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
            <p>{title}</p>
            <p>{type}</p>
          </div>
          <div className="cadre">

            {active === 'Turbine' ? <img src={proj1} /> : <img className="fade-out" src={proj1} /> }
            {active === 'Turbine2' ? <img src={proj2} /> : <img className="fade-out" src={proj2} />  }
            
          </div> 
        </ImgBox>

      </div>
      <LettersBox >
        <div className="box">

          <div className="g1" onMouseEnter={() => handleHover("Turbine")}>
            <p>G</p>
          </div>

          <div className="o1" onMouseEnter={() => handleHover("Turbine2")}>
            <p>O</p>
          </div>

          <div className="g2" onMouseEnter={() => handleHover("proj3")}>
            <p>G</p>
          </div>
          
          <div className="o2" onMouseEnter={() => handleHover("proj4")}>
            <p>O</p>
          </div>

          <div className="s1" onMouseEnter={() => handleHover("proj5")}>
            <p>S</p>
          </div>

          <div className="s2" onMouseEnter={() => handleHover("proj6")} >
            <p>S</p>
          </div>

          <div className="e" onMouseEnter={() => handleHover("proj7")}>
            <p>E</p>
          </div>

        </div>
      </LettersBox>
      
    </Container>
  );
};

const appearAnimation = keyframes`
   0% {
    transform: translateY(100%);
  }
  60% {
    transform: translateY(-2.5%);
  }
  80% {
    transform: translateY(2.5%);
  }
  100% {
    transform: translateY(0%);
  }

`

const clearAnimation = keyframes`
 0%{
  transform: translateY(0%);
  opacity: 1;
 }
 100%{
  transform: translateY(-110%);
  opacity: 0.8;
 }
`




const Container = styled.div`
padding: 40px;
padding-top: 20px;
display: flex;
flex-direction: column;
justify-content: space-between;
background-color: #DCDCDC;
padding-bottom: 80px;
.top{
 display: flex;
 justify-content: space-between;
}

@media (max-width:1100px){
  justify-content: center;
  
  padding-bottom: 20px;
  .top{
    flex-direction: column;
  }
}
`;

const ImgBox = styled.div`

div{
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  max-width: 38vw;
  font-family: Authentic90;
}

.cadre{
  position: relative;
  width: 38vw;
  height: 18vw;
  overflow: hidden;
  border: none;
}

img{
  transition: 500ms;
  border: none;
  width: 38vw;
  height: 18vw;
  position: absolute;
  object-fit: cover;
  animation: ${appearAnimation} 800ms forwards;

  &:hover{
    scale: 1.3;
    rotate: 5deg;
  }
}

.fade-out{
  animation: ${clearAnimation} 500ms forwards;
}
@media (max-width:1100px){

  div{
    max-width: 85vw;
    margin-top: 20px;
  }
  .cadre{
    width: 98%;
    height: 30vw;
  }
  img{
    width: 98%;
    height: 30vw;
  }
}

`

const TextBox = styled.div`
  max-width: 815px;
  max-height: 485px;
  font-weight: 300;
  font-size: 2vw;
  font-family: Authentic60C;
  text-transform: uppercase;
  margin-top: 30px;
  @media (max-width:1100px){
    font-size: 12px;
  }
`;

const LettersBox = styled.div`
  display: flex;
  
  .box{
    width: 100%;

    p{
      height: 20vw;
      transition: 500ms;
      &:hover{
      
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
    @media (max-width:1100px){
    font-size: 20vw;
  }
    
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
