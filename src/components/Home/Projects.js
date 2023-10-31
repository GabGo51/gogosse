import React from "react";
import styled from "styled-components";

const Projects = () => {
  return (
    <Container>
      <h2>PROJECTS</h2>
      <ProjectBox>
        <Project>
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
display: flex;
border-top:  1px solid black;
padding-top:20px ;
margin-bottom: 20px;
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
`;

export default Projects;
