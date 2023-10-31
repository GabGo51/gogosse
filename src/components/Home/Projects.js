import React from "react";
import styled from "styled-components";

const Projects = () => {
  return (
    <Container>
      <h2>Projects</h2>
      <ProjectBox>
        <Project>
          <h3>projet 1</h3>
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
  
`;

const ProjectBox = styled.section``;

const Project = styled.div`
display: flex;
border-top:  1px solid black;
padding-top:20px ;
p{
  flex: 0.2;
  text-align: end;
}
h3{
  flex:.50;
}
.description{
  max-width: 400px;
  flex: 1;
  text-align: start;
}
`;

export default Projects;
