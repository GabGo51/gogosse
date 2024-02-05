import React from "react";
import styled from "styled-components";


const Intro = ({ title, description, tag1, tag2}) => {
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
      </div>
    </Container>
  );
};

const Container = styled.div`

  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 40px 20px;
  height: 350px;

  h1 {
    font-family: Authentic90C;
    font-weight: 400;
    font-size: clamp(50px, 3vw, 80px);
  }

  .middle {
    align-items: flex-end;
    justify-content: end;
    width: 50%;

    .top {
      display: flex;
      justify-content: space-between;
      margin-bottom: 50px;
    }
    .description {
      width: 70%;
      font-family: Authentic60;
      text-transform: uppercase;
      font-size: 18px;
    }

    .type {
      font-family: Authentic60;
      text-transform: uppercase;
      font-size: 14px;
    }
    img {
      width: 100%;
    }
  }

  @media (max-width: 1100px) {
    flex-direction: column;
    padding-bottom: 0;

    h1 {
      margin-bottom: 60px;
      width: 100%;
      text-align: justify;
    }

    .middle {
      width: 100%;
      margin-bottom: 0;

      .top {
        justify-content: space-between;
        width: 100%;
        margin-bottom: 20px;
        align-items: end;
      }

      .description {
        font-size: 14px;
      }
      .type {
        font-size: 10px;
      }
    }
  }
`;

export default Intro;
