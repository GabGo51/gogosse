import styled from "styled-components"
import useMousePosition from "./hooks/useMousePosition";
import { MouseContext } from "./context/mouseContext";
import { useContext } from "react";



const Cursor = () => {
  const {cursorType} = useContext(MouseContext);
  
    // 1.
  const { x, y } = useMousePosition();
  return (
    <Container>     
      <Dot
        className={cursorType === 'hover' || 'button' ? cursorType : ''}
        style={{ left: `${x}px`, top: `${y}px` }}
      ></Dot>
    </Container>
  );
};

const Container = styled.div`
mix-blend-mode: difference;
z-index: 999;
position: absolute;
`


const Dot = styled.div`
  transition:width 200ms, height 200ms;
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

  &.hover{
    width: 20px;
    height: 20px;
    
  }
  &.button{
    display: none;
  }
  @media (max-width:800px){
    display: none;
  }
` 
  


export default Cursor;