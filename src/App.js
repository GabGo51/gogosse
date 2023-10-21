import styled from "styled-components";
import Header from "./components/Header";
import Hero from "./components/Hero";


function App() {
  return (
    <Container>
      <Header/>
      <Hero/>
    </Container>
  );
}


const Container = styled.div`
width: 100vw;

`
export default App;
