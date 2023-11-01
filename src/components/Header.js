import React from 'react'
import styled from 'styled-components'


const Header = () => {
  return (
    <Container>
      <div>
        <h1>GOGOSSE</h1>
        
      </div>
      
      <nav>
        <ul>
          <li>WORK</li>
          <li>ABOUT</li>
          <li>CONTACT</li>
        </ul>
      </nav>

    </Container>
  )
}

const Container = styled.header`
padding: 40px;
padding-bottom: 10px;
padding-top: 20px;
display: flex;
justify-content: space-between;
background-color: #DCDCDC;

div{
  width: 100%;
  border-bottom: 1px solid black;
}

h1{
  display: inline-block;
  margin-right:40px ;
  font-size: 60px;
  font-family: Tagada;
  font-weight: 400;
}

p{
  display: inline-block;
  font-size: 20px;
}

nav{
  font-family: Authentic60;
  font-size: 16px;
  border-bottom: 1px solid black;
  text-align: end;
}

li{
  cursor: pointer;
  &:hover{
    background-color: black;
    color: white;
    transition: 500ms;
    transform: translateX(-10%);
  }
}

@media (max-width:900px){
  h1{
    font-size: 30px;
  }

}
`



export default Header