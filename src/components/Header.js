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
font-size: 32px;


div{
  width: 100%;
  border-bottom: 2px solid white;
}

h1{
  display: inline-block;
  margin-right:40px ;
}

p{
  display: inline-block;
}

nav{
  font-family: Authentic60;
  font-size: 16px;
  border-bottom: 2px solid white;
}
`



export default Header