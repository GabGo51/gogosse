import React from 'react'
import styled from 'styled-components'

const Header = () => {
  return (
    <Container>
      <h1>GOGOSSE</h1>
      <p>STUDIO</p>
      <Nav>
        <ul>
          <li>WORK</li>
          <li>ABOUT</li>
          <li>CONTACT</li>
        </ul>
      </Nav>

    </Container>
  )
}

const Container = styled.header`

`

const Nav = styled.nav`

`

export default Header