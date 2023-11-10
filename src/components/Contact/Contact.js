import React from "react";
import styled from "styled-components";

const Contact = () => {
  return (
    <Container>
      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque voluptas sit
        aspernatur aut odit aut fugit, sed quia consequunt
      </p>
      <form>
        <div>
          <label>NAME</label>
          <input required />
        </div>
        <div>
          <label>COMPAGNY</label>
          <input/>
        </div>
        <div>
          <label>BUDGET</label>
          <input required />
        </div>
        <div className="textarea">
          <label >
            PROJECT DESCRIPTION
          </label>
          <textarea required  />
        </div>
      </form>
    </Container>
  );
};

const Container = styled.div`
padding: 40px;

p{
  font-size: 40px;
  text-transform: uppercase;
  font-family: Authentic60;
  margin-bottom: 100px;

  @media (max-width:1100px){
    font-size: 24px;
    
  }
  @media (max-width:700px){
    font-size: 16px;
    ;
  }
}
div{
  border-bottom: 1px solid black;
  padding-bottom: 5px;
  display: flex;
  align-items: center;
  position: relative;
  margin-bottom: 20px;
}

label{
  font-family: Tagada;
  font-size:40px;
  margin-right: 30px;

  @media (max-width:1100px){
    font-size: 30px;
  }
  @media (max-width:700px){
    font-size: 20px;
  }
  
}

input{
  height: 40px;
  font-size: 34px;
  position: absolute;
  width:100%;
  height: 100%;
  background-color: transparent;
  font-family: Authentic60;
  border: none;
  outline: none;
  padding-left: 220px;
  text-transform: uppercase;

  @media (max-width:1100px){
    font-size: 24px;
    padding-left: 170px;
  }
  @media (max-width:700px){
    font-size: 16px;
    padding-left: 120px;
  }
  
}

.textarea{
  border-bottom: none;
  flex-direction: column;
  align-items: flex-start;

  textarea{
    background-color: #2E2E2E;
    color: white;
    resize: none;
    font-size: 24px;
    font-family: Authentic60;
    text-transform: uppercase;
    width: 100%;
    height: 200px;
    padding: 10px;

    @media (max-width:1100px){
    font-size: 24px;
    
  }
  @media (max-width:700px){
    font-size: 16px;
    
  }
    
  }
}
`;
export default Contact;
