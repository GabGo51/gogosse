import React from 'react'
import styled from 'styled-components'
import vid from '../img/gogosse.mp4'

const Intro = () => {
  return (
    <Container><video autoPlay={true}  src={vid}/></Container>
  )
}


const Container = styled.div`
position: fixed;
top: -150px;
bottom: 0;
left: 0;
right: 0;
background-color: blue;

video{
  width: 100%;

  
}
`

export default Intro