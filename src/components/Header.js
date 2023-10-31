import React from 'react'
import styled from 'styled-components'


const Header = () => {
  return (
    <Container>
      <div>
        <h1>GOGOSSE</h1>
        <p>STUDIO</p>
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
padding: 20px;
display: flex;
justify-content: space-between;
/* align-items: center; */

div{
  width: 100%;
  border-bottom: 2px solid white;
}

h1{
  display: inline-block;
  margin-right:40px ;
  font-size: 60px;
}

p{
  display: inline-block;
  font-size: 20px;
}

nav{
  font-family: Authentic60;
  font-size: 16px;
  border-bottom: 2px solid white;
}

li{
  cursor: pointer;
  &:hover{
    background-color: white;
    color: black;
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