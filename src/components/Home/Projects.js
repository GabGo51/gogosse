import React from "react";
import styled from "styled-components";
import proj1 from './img/proj1.png'
import proj2 from './img/proj2.png'
import proj3 from './img/proj3.png'
import proj4 from './img/proj4.png'
import proj5 from './img/proj5.png'
import proj6 from './img/proj6.png'
import proj7 from './img/proj7.png'

const Projects = () => {
  return (
    <Container>
      <h2>PROJECTS</h2>
      <ProjectBox>
        <Project>
          <img src={proj1}/>
          <h3>PROJET</h3>
          <p className="description">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque voluptas
            sit aspernatur aut odit aut fugit, sed quia consequunt
          </p>
          <p> Evenement</p>
          <p> 2023</p>
        </Project>
      </ProjectBox>
      <ProjectBox>
        <Project>
        <img src={proj2}/>
          <h3>PROJET</h3>
          <p className="description">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque voluptas
            sit aspernatur aut odit aut fugit, sed quia consequunt
          </p>
          <p> Evenement</p>
          <p> 2023</p>
        </Project>
      </ProjectBox>
      <ProjectBox>
        <Project>
        <img src={proj3}/>
          <h3>PROJET</h3>
          <p className="description">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque voluptas
            sit aspernatur aut odit aut fugit, sed quia consequunt
          </p>
          <p> Evenement</p>
          <p> 2023</p>
        </Project>
      </ProjectBox>
      <ProjectBox>
        <Project>
        <img src={proj4}/>
          <h3>PROJET</h3>
          <p className="description">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque voluptas
            sit aspernatur aut odit aut fugit, sed quia consequunt
          </p>
          <p> Evenement</p>
          <p> 2023</p>
        </Project>
      </ProjectBox>
      <ProjectBox>
        <Project>
        <img src={proj5}/>
          <h3>PROJET</h3>
          <p className="description">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque voluptas
            sit aspernatur aut odit aut fugit, sed quia consequunt
          </p>
          <p> Evenement</p>
          <p> 2023</p>
        </Project>
      </ProjectBox>
      <ProjectBox>
        <Project>
        <img src={proj6}/>
          <h3>PROJET</h3>
          <p className="description">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque voluptas
            sit aspernatur aut odit aut fugit, sed quia consequunt
          </p>
          <p> Evenement</p>
          <p> 2023</p>
        </Project>
      </ProjectBox>
      <ProjectBox>
        <Project>
        <img src={proj7}/>
          <h3>PROJET</h3>
          <p className="description">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque voluptas
            sit aspernatur aut odit aut fugit, sed quia consequunt
          </p>
          <p> Evenement</p>
          <p> 2023</p>
        </Project>
      </ProjectBox>
    </Container>
  );
};

const Container = styled.div`
  background-color: white;
  padding: 40px;
  position: relative;
  padding-top: 100px;

  h2{
    position: absolute;
    top: 40px;
    right: 50.5vw;
    font-family: Authentic130;
  }
  
`;

const ProjectBox = styled.section``;

const Project = styled.div`
position: relative;
transition: 500ms;
display: flex;
border-bottom:  1px solid black;
padding-top:20px ;
padding-bottom: 20px;
margin-bottom: 20px;

img{
  transition: 500ms;
  width: 400px;
  height: 400px;
  object-fit: cover;
  position: absolute;
  left: 13vw;
  top: 2vw;
  scale: 0;
}
p{
  flex: 0.2;
  text-align: end;
  font-family: Authentic130C;
  font-size: 18px;
}
h3{
  flex:.50;
  font-size: 25px;
  font-family: Tagada;
  
}
.description{
  max-width: 400px;
  flex: 1;
  text-align: start;
  font-family: Authentic60C;
  text-transform: uppercase;
}


&:hover{
  padding-top: 150px;
  padding-bottom: 150px;
  h3{
    font-family: Authentic60C;
  }
  img{
    scale: 1;
  }
}
`;

export default Projects;
