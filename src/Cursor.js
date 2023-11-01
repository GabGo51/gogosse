import styled from "styled-components"
import useMousePosition from "./hooks/useMousePosition";
import { MouseContext } from "./context/mouseContext";
import { useContext } from "react";
import Hammer from './img/Hammer.webp'



const Cursor = () => {
  const { cursorType } = useContext(MouseContext);
  
    // 1.
  const { x, y } = useMousePosition();
  return (
    <Container>     
      <Dot
        className={cursorType === 'hovered' || 'button' ? cursorType : ''}
        style={{ left: `${x}px`, top: `${y}px` }}
      > <img src={Hammer}/></Dot>
    </Container>
  );
};

const Container = styled.div`
position: absolute; //makes it go over everything fuck the static position 
mix-blend-mode: difference;
z-index: 999;

`



const Dot = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 8px;
  height: 8px;
  background-color: white;
  mix-blend-mode: difference;
  border-radius: 100%;
  transform: translate(-50%, -50%);
  z-index: 999;
  pointer-events: none;

  img{
    scale: 0.15;
    transform: translate(-320%, -320%);
  }

  &.hovered{
    display: none;
    
  }
  &.button{
    display: none;
  }
  
` 
  


export default Cursor;