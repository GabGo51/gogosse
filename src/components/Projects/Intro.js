import React from "react";
import styled from "styled-components";
import projects from "../../data/projectData";

const Intro = ({ title, description, tag1, tag2, src }) => {
  return (
    <Container>
      <h1>{title}</h1>

      <div className="middle">
        <div className="top">
          <p className="description">{description}</p>
          <div className="type">
            <p>{tag1}</p>
            <p>{tag2}</p>
          </div>
        </div>

        <img src={src} />
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: 40px 20px;

  h1{
    font-family: Authentic90C;
    font-weight: 400;
    font-size: clamp(40px, 3vw,80px);
  }

  .middle {
    align-items: flex-end;
    justify-content: end;
    max-width:800px;

    .top{
      display: flex;
      justify-content: space-between;
      margin-bottom: 50px;
    }
    .description {
      width: 70%;
      font-family: Authentic90;
      text-transform: uppercase;
      font-size: 14px;
      font-weight: 600px;
    }

    .type{
      font-family: Authentic60;
      text-transform: uppercase;
      font-size: 14px;
    }
    img {
      width: 100%;
    }
  }
`;

export default Intro;
